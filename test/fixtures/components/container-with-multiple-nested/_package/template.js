var oc = oc || {};
(oc.components = oc.components || {}), (oc.components[
  '59378b18799629ee3da81986c828eca534932ed2'
] = function(e) {
  var n,
    o = [],
    i = e || {};
  return function(e, i) {
    o.push('<div>Hi, these are nested components:<ul>'), function() {
      var i = e;
      if ('number' == typeof i.length)
        for (var t = 0, d = i.length; t < d; t++) {
          var l = i[t];
          o.push('<li>' + (null == (n = l) ? '' : n) + '</li>');
        }
      else {
        var d = 0;
        for (var t in i) {
          d++;
          var l = i[t];
          o.push('<li>' + (null == (n = l) ? '' : n) + '</li>');
        }
      }
    }.call(this), o.push('</ul></div>');
  }.call(
    this,
    'nested' in i ? i.nested : 'undefined' != typeof nested ? nested : void 0,
    'undefined' in i ? i.undefined : void 0
  ), o.join('');
});
