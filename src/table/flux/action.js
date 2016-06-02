import TableDispatcher from './table-dispatcher';

export const ActionTypes = {
  HIDE_COLUMN: 'HIDE_COLUMN',
  SHOW_COLUMN: 'SHOW_COLUMN'
};


export const Actions = {
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
