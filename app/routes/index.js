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

// function routerAPI(app){
//     const router = express.Router();
//     app.use('/api/v1', router);
//     router.use('/logon', loginRouter);
// }

module.exports = routerAPI;