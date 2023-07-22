const bycrypt = require('bcrypt');
const UserRepository = require('../repository/User');
const JwtService = require('../services/JwtService');
const loginController = async (req, res) => {
  const {email, password} = req.body
  if(!email || !password) return res.status(400).send('email and password are required')
  //login with email and password with sequelize 
  const user = await new UserRepository().findByEmail(email);
  if(!user) return res.status(404).send('user not found');
  const isMatch = await bycrypt.compare(password, user.password);
  if(!isMatch) return res.status(401).send('password not match');
  const jwt = JwtService.generateToken({id: user.id, email: user.email});
  res.status(200).send(jwt)
}

module.exports = loginController;