module.exports = function(app) {
 
    const forms = require('../controller/form.controller.js');
 
    // Create a new Customer
    app.post('/api/form', forms.create);
 
    // Retrieve all Customer
    app.get('/api/forms', forms.findAll);;
}