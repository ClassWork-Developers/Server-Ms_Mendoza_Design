module.exports = (sequelize, Sequelize) => {
	const Form = sequelize.define('form', {
	  name: {
		type: Sequelize.STRING
	  },
	  mail: {
		type: Sequelize.STRING
	  },
	  phoneNumber: {
		  type: Sequelize.STRING
	  },
	  affairs: {
		type: Sequelize.STRING
	  },
	});
	return Form;
}