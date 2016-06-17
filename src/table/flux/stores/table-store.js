import TableDispatcher from './../table-dispatcher';
import {ActionTypes} from './../action';
import EventEmitter from 'events';
const CHANGE_EVENT = 'column-change';
import {OrderedSet, Record} from 'immutable';
import resizeEvent from './../../../resize'
import delegate from './table-store-delegate';


/*

 OrderedSet<Record({
 name: 'Name',
 data: 'name',
 width: {flex: 4, },
 display: true,
 filter: {type: 'text', percentage: 30, px: 200}
 }>

 */
const WidthRecord = new Record({flex: 4, px: null, percentage: null});
const ColumnFilter = new Record({type: 'text', percentage: 30, px: 200});
const ColumnRecord = new Record({
  name: null,
  data: null,
  type: 'text',
  width: WidthRecord,
  display: true,
  filter: ColumnFilter
});
var _columns;
var _tableWidth = 0;
var _tableHeight = 0;

class TableStoreClass extends EventEmitter {

  constructor() {
    super();
  }

  initStore(columnsConfig, tableWidth) {
    this.setWidth(tableWidth);
    var columns = this.countWidth(columnsConfig);
    columns = this.setDisplay(columns);
    _columns = OrderedSet.of(...columns);
  }

  setWidth(tableWidth) {
    _tableWidth = tableWidth;
  }

  getHeight() {
    return _tableHeight;
  }

  setDisplay(columns) {
    return columns.map(c=> {
      return new ColumnRecord({...c, display: c.display == undefined ? true : c.display});
    });
  }

  countWidth(columns) {
    var flexSum = columns.map(c=> {
      if(!c.width) c.width = {};
      if(!c.width.flex) c.width.flex = 1;
      return c.width.flex;
    }).reduce((prev, curr) => {
      return prev + curr;
    });

    var portion = 100 / flexSum;

    return columns.map(c => {
      var percentage = c.width.flex * portion;
      var px = _tableWidth * percentage / 100;
      return {...c, width: new WidthRecord({...c.width, percentage: c.width.flex * portion, px: px})};
    });
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getColumns() {
    return _columns;
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

const tableStore = new TableStoreClass();
export default tableStore;


TableDispatcher.register((action) => {
  switch(action.actionType) {
    case ActionTypes.TABLE_DID_RESIZE:
    {
      _tableWidth = action.width;
      _columns = delegate.resizeColumnsByNewWidth(_columns, _tableWidth);
      tableStore.emitChange();
      break
    }case ActionTypes.TABLE_HEIGHT_DID_CHANGE:
    {
      _tableHeight = action.height;
      tableStore.emitChange();
      break
    }
    case ActionTypes.SHOW_COLUMN:
    {
      _columns = delegate.showColumn(_columns, action.columnName);
      tableStore.emitChange();
      break
    }
    case ActionTypes.HIDE_COLUMN:
    {
      _columns = delegate.hideColumn(_columns, action.columnName);
      tableStore.emitChange();
      break
    }
    case ActionTypes.COLUMNS_DID_RESIZE:
    {
      _columns = delegate.resizeColumn(_columns, action.name, action.width);
      tableStore.emitChange();
      break
    }
  }
});