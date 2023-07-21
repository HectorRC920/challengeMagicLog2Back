const path = require('path');
const db = require(path.resolve('app', 'db', 'models', 'index'));

module.exports = {
	databaseConnection: async () => {
		try {
			// test db connection
			await db.sequelize.authenticate();
			return true;
		} catch (error) {
			console.log(error, 'auth db error');
			throw new Error('Unable to connect to the database');
		}
	}
};
