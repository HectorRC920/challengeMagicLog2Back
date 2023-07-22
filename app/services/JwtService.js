const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
class JwtServices {
    static generateToken(payload) {
        return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    }
}
module.exports = JwtServices