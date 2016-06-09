class TableStoreDelegateClass {

  constructor() {
  }

  hideColumn(columns, columnName) {
    return columns.map(column => {
      if(column.name == columnName) return column.set('display', false);
      else return column;
    });
  };

  showColumn(columns, columnName) {
    return columns.map(column => {
      if(column.name == columnName) return column.set('display', true);
      else return column;
    });
  };

  resizeColumnsByNewWidth(columns, tableWidth) {
    return columns.map(columnRecord => {
      var widthRecord = columnRecord.width;
      var px = tableWidth * widthRecord.percentage / 100;
      var newWidthRecord = widthRecord.set('px', px);
      return columnRecord.set('width', newWidthRecord);
    });
  };

  resizeColumn(columns, name, newWidth) {
    return columns.map(columnRecord => {
      if(columnRecord.name != name) return columnRecord;

      var widthRecord = columnRecord.width;
      var newPercentage = newWidth * widthRecord.percentage / widthRecord.px;
      var newWidthRecord = widthRecord.set('px', newWidth).set('percentage', newPercentage);
      return columnRecord.set('width', newWidthRecord);
    });
  };
}

const tableStoreDelegate = new TableStoreDelegateClass();
export default tableStoreDelegate;