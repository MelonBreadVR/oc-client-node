var oc = oc || {};
(oc.components = oc.components || {}), (oc.components[
  '28144f0dfecc345da2ee82c2614e61d1bd8543a9'
] = function(e) {
  var a,
    n = [],
    o = e || {};
  return function(e, o) {
    n.push(
      '<span>hi ' +
        jade.escape(null == (a = e) ? '' : a) +
        ' ' +
        jade.escape(null == (a = o) ? '' : a) +
        '  </span>'
    );
  }.call(
    this,
    'firstName' in o
      ? o.firstName
      : 'undefined' != typeof firstName ? firstName : void 0,
    'lastName' in o
      ? o.lastName
      : 'undefined' != typeof lastName ? lastName : void 0
  ), n.join('');
});
