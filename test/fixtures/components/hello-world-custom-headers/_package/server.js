'use strict';
module.exports.data = function(e, t) {
  e.setHeader('Test-Header', 'Test-Value'), e.setHeader(
    'Cache-Control',
    'public max-age=3600'
  ), t(null, {});
};
