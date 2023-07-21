const express = require('express');
const loginRouter = require('./login');

class routerAPI {
    constructor(app) {
        this.app = app;
        this.router = express.Router();
        this.app.use('/api/v1', this.router);
        this.router.use('/login', loginRouter);
    }
}

module.exports = routerAPI;