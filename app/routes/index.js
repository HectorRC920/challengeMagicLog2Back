const express = require('express');
const loginRouter = require('./login');
const registerRouter = require('./register');

class routerAPI {
    constructor(app) {
        this.app = app;
        this.router = express.Router();
        this.app.use('/api/v1', this.router);
        this.router.use('/login', loginRouter);
        this.router.use('/register', registerRouter);
    }
}

module.exports = routerAPI;