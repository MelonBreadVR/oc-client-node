'use strict';
var _ = require('lodash');
module.exports.data = function(r, e) {
  e(null, { magicNumber: _.first([5, 4]) });
};
