const ROLES = require("../consts/ROLES");
const UserRepository = require("../repository/User");

class RoleMiddleware {
  static verifyRole = (req, res, next) => {
    const userRole = UserRepository.findByEmailWithRole(req.user.email);
    if (ROLES[userRole]) {
      next();
    } else {
      res.status(403).json({ error: 'Access denied. Only sellers can store products.' });
    }
  };
}
module.exports = RoleMiddleware;