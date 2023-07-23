const express = require('express');
const loginRouter = require('./login');
const registerRouter = require('./register');
// const productRouter = require('./product');
const JwtMiddleware = require('../middleware/JwtMiddleware');
const RoleMiddleware = require('../middleware/RoleMiddleware');
class routerAPI {
    constructor(app) {
        this.app = app;
        this.router = express.Router();
        this.app.use('/api/v1', this.router);
        this.router.use('/login', loginRouter);
        this.router.use('/register', registerRouter);
        this.router.use('/products', JwtMiddleware.verifyToken, RoleMiddleware.verifyRole);
    }
}

module.exports = routerAPI;