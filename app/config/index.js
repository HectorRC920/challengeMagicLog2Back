const dotenv = require('dotenv');
// config() will read your .env file, parse the contents, assign it to process.env.
dotenv.config();
const error = new Error();
module.exports = {
	host: process.env.DB_HOST,
	username: process.env.MYSQLDB_USER,
	password: process.env.MYSQLDB_USER_PASSWORD,
	database: process.env.MYSQLDB_DATABASE,
	port: process.env.MYSQLDB_PORT,
	dialect: 'mysql',
	poolConfig: {
		pool: {
			max: 20,
			min: 1,
			acquire: 80000,
			idle: 10000
		}
	},

	errors: {
		400: (msg = 'Bad Request') => {
			error.message = msg;
			error.status = 400;
			return error
		},
		404: (msg = 'Not Found') => {
			error.message = msg;
			error.status = 404;
			return error
		},
		409: (msg = 'Confict') => {
			error.message = msg;
			error.status = 409;
			return error
		},
		422: (msg = 'Unprocesable entity') => {
			error.message = msg;
			error.status = 422;
			return error
		}
	}

}