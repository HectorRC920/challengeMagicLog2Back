const bycrypt = require('bcrypt');
const UserRepository = require('../repository/User');
const ROLES = require('../consts/ROLES');
const RoleRepository = require('../repository/Role');
const registerController = async (req, res) => {
  const {email, password, role} = req.body
  if(!email || !password, !role) return res.status(400).send('email, password and role are required')
  
  if(!['admin', 'customer', 'seller'].includes(role)) return res.status(400).send('role not valid')
  
  //get id role from database 
  const DBRole = await new RoleRepository().findByName(role);
  bycrypt.hash(password, 10, async (err, hash) => {
    try {
      await new UserRepository().create({ email, password: hash, roleId: DBRole.id});
      res.status(201).send('register success')
    } catch (error) {
      res.status(409).send(error.message)
    }
  })

}

module.exports = registerController;