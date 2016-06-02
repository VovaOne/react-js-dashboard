import TableDispatcher from './table-dispatcher';

export const ActionTypes = {
  HIDE_COLUMN: 'HIDE_COLUMN',
  SHOW_COLUMN: 'SHOW_COLUMN',
  TABLE_DID_RESIZE: 'TABLE_DID_RESIZE'
};


export const Actions = {
  tableDidResize: (width)=> {
    TableDispatcher.dispatch({
      actionType: ActionTypes.TABLE_DID_RESIZE,
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
  }
};
