var oc = oc || {};
(oc.components =
  oc.components ||
  {}), (oc.components.b6fd493b37ed12ab8b81c7147dc2feb0e04cb0cc = function(e) {
    var n,
      c = [],
      a = e || {};
    return function(e) {
      c.push(
      '<p>selected language is ' +
        jade.escape(null == (n = e) ? '' : n) +
        '</p>'
    );
    }.call(
    this,
    'language' in a
      ? a.language
      : 'undefined' != typeof language ? language : void 0
  ), c.join('');
  });
