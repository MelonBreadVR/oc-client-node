'use strict';
module.exports.data = function(r, e) {
  'timeout' === r.params.errorType
    ? setTimeout(function() {
      e(null, { error: !0, timeout: !0 });
    }, r.params.timeout || 2e3)
    : '500' === r.params.errorType
      ? e('An error happened')
      : e(null, { error: !1 });
};
