const express = require('express')
const app = express()
const dotenv = require('dotenv');
dotenv.config();
const routerAPI = require('./app/routes');

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

new routerAPI(app);

console.log('Server is running on port ' + process.env.NODE_LOCAL_PORT || 3000)

app.listen(process.env.NODE_LOCAL_PORT || 3000)