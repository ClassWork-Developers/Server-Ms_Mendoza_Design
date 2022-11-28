module.exports = function(app) {
  const forms = require('../controller/form.controller.js');

  app.post('/api/form', forms.create);
  app.get('/api/forms', forms.findAll);;
}