const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

class JwtMiddleware{
  static verifyToken(req, res, next) {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: 'Invalid token' });
      }
  
      req.user = decoded;
      next();
    })
  };
}
module.exports = JwtMiddleware;