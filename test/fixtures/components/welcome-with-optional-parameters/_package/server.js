'use strict';
module.exports.data = function(a, s) {
  s(null, {
    firstName: a.params.firstName,
    lastName: a.params.lastName,
    nick: a.params.nick
  });
};
