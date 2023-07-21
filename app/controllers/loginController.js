const bycrypt = require('bcrypt');
const UserRepository = require('../repository/User');
const loginController = async (req, res) => {
  const {email, password} = req.body
  //login with email and password with sequelize 
  const user = await new UserRepository().findByEmail(email);
  if(!user) return res.status(404).send('user not found');
  const isMatch = await bycrypt.compare(password, user.password);
  if(!isMatch) return res.status(401).send('password not match');
  res.status(200).send('login success')
}

module.exports = loginController;