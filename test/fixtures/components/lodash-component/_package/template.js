var oc = oc || {};
(oc.components = oc.components || {}), (oc.components[
  '37dc765b8d01c74a0a9b9f36a2827c1d0c86ef07'
] = function(c) {
  var e,
    n = [],
    o = c || {};
  return function(c) {
    n.push(
      '<div>The magic number is ' +
        jade.escape(null == (e = c) ? '' : e) +
        '</div>'
    );
  }.call(
    this,
    'magicNumber' in o
      ? o.magicNumber
      : 'undefined' != typeof magicNumber ? magicNumber : void 0
  ), n.join('');
});
