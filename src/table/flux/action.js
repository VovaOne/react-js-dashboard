import TableDispatcher from './table-dispatcher';

export const ActionTypes = {
  HIDE_COLUMN: 'HIDE_COLUMN',
  SHOW_COLUMN: 'SHOW_COLUMN',
  TABLE_DID_RESIZE: 'TABLE_DID_RESIZE',
  TABLE_HEIGHT_DID_CHANGE: 'TABLE_HEIGHT_DID_CHANGE',
  COLUMNS_DID_RESIZE: 'COLUMNS_DID_RESIZE',
  ADD_FILTER: 'ADD_FILTER',
  ADD_FILTERS: 'ADD_FILTERS',
  REMOVE_COLUMN_FILTER: 'REMOVE_COLUMN_FILTER',
  REMOVE_ALL_FILTERS: 'REMOVE_ALL_FILTERS'
};


export const Actions = {
  tableDidResize: (width)=> {
    TableDispatcher.dispatch({
      actionType: ActionTypes.TABLE_DID_RESIZE,
      width: width
    });
  },
  tableHeightDidChange: (height)=> {
    TableDispatcher.dispatch({
      actionType: ActionTypes.TABLE_HEIGHT_DID_CHANGE,
      height: height
    });
  },
  columnsDidResize: (name, width)=> {
    TableDispatcher.dispatch({
      actionType: ActionTypes.COLUMNS_DID_RESIZE,
      name: name,
      width: width
    });
  },
  hideColumn: (columnName)=> {
    TableDispatcher.dispatch({
      actionType: ActionTypes.HIDE_COLUMN,
      columnName: columnName
    });
  },
  showColumn: (columnName)=> {
    TableDispatcher.dispatch({
      actionType: ActionTypes.SHOW_COLUMN,
      columnName: columnName
    });
  },
  addFilter: (filter)=> {
    TableDispatcher.dispatch({
      actionType: ActionTypes.ADD_FILTER,
      filter: filter
    });
  },
  addFilters: (filterArray)=> {
    TableDispatcher.dispatch({
      actionType: ActionTypes.ADD_FILTERS,
      filterArray: filterArray
    });
  }
};
