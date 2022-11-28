module.exports = function(app) {
  const forms = require('../controller/form.controller.js');

  app.post('/api/form', forms.create);
}