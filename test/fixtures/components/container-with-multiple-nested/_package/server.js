'use strict';
module.exports.data = function(e, a) {
  e.renderComponents(
    [
      { name: 'welcome', parameters: { firstName: 'Jane' } },
      { name: 'welcome', parameters: { firstName: 'John' } }
    ],
    { parameters: { lastName: 'Doe' } },
    function(e, t) {
      a(e, { nested: t });
    }
  );
};
