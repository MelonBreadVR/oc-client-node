var oc = oc || {};
(oc.components = oc.components || {}), (oc.components[
  '884851aea70e65c9aed7f2f4f40e91566a24404c'
] = function(o) {
  var e,
    n = [],
    r = o || {};
  return function(o) {
    n.push(
      '<div>Any problems? ' +
        jade.escape(null == (e = o ? 'Yep' : 'Nope') ? '' : e) +
        '.  </div>'
    );
  }.call(
    this,
    'error' in r ? r.error : 'undefined' != typeof error ? error : void 0
  ), n.join('');
});
