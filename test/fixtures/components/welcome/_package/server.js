'use strict';
module.exports.data = function(a, s) {
  s(null, {
    firstName: a.params.firstName || 'John',
    lastName: a.params.lastName || 'Doe'
  });
};
