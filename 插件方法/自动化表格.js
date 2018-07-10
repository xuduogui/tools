function makeTable(id, _data) {
  var _tableStyle = "width: 100%; background-color: #fff; color: #666;",
      _allTdStyle = "position: relative;padding: 9px 15px;min-height: 20px;line-height: 20px;font-size: 14px;border-width: 1px;border-style: solid;border-color: #e6e6e6;";
  var _form = document.getElementById(id);
  _form.innerHTML = '';
  var _table = document.createElement('table');
  _table.setAttribute('style', _tableStyle + '');
  var firstTr = document.createElement('tr');
  _table.appendChild(firstTr);
  _form.appendChild(_table);
  _data.forEach(function (ele) {
    var trLast = document.querySelector('#_form table tr:last-child');
    var _tdKey = document.createElement('td');
    _tdKey.setAttribute('style', _allTdStyle + 'background: #f8f8f8; text-align: center; min-width: 100px;');
    _tdKey.setAttribute('rowspan', ele.rows); // 跨行数
    _tdKey.setAttribute('colspan', ele.kcols); // 跨列数
    _tdKey.setAttribute('data-key', ele.key); // 单元格标志
    _tdKey.innerText = ele.name; // key值
    trLast.appendChild(_tdKey);
    if (ele.th != true) {
        var _tdVal = document.createElement('td');
        _tdVal.setAttribute('style', _allTdStyle + '');
        _tdVal.innerText = ele.val;
        _tdVal.setAttribute('rowspan', ele.rows); // 跨行数
        _tdVal.setAttribute('colspan', ele.vcols); // 跨列数
        _tdVal.setAttribute('data-key', ele.key); // 单元格标志
        trLast.appendChild(_tdVal);
    }
    if (ele.newr) {
      var _tr = document.createElement('tr');
      _table.appendChild(_tr);
    }
  });
}



/*  ------------------------------------------------------------
<div id="_form" style="margin: 10px;"></div>
var _data = [
  {
      key: 'qymc', // key名
      name: '企业名称',
      val: data.qymc, // val值
      edit: 'ddd',  // 是否可编辑，暂时未处理
      rows: '', // 所占据行数
      kcols: '', // key 列数
      vcols: '3', // val 列数
      newr: '', // 是否要新开一行（以此结尾）
      th: '', // 是否是纯粹标题（无val）
  },
]
makeTable('_form', _data); 
-----------------------------------------------------------------*/