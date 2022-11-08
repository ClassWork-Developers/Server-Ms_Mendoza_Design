const db = require('../config/db.config.js');
const Form = db.form;

exports.create = (req, res) => {	
	Form.create({  
		name: req.body.name,
		mail: req.body.mail,
    phoneNumber: req.body.number,
    affairs: req.body.affairs
	}).then(form => {		
		res.send(form);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

exports.findAll = (req, res) => {
	Form.findAll().then(form => {
		res.send(form);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

// exports.findById = (req, res) => {	
// 	Form.findById(req.params.customerId).then(form => {
// 		res.send(form);
// 	}).catch(err => {
// 		res.status(500).send("Error -> " + err);
// 	})
// };
