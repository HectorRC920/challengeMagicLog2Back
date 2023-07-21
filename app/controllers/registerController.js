const axios = require('axios');
const bycrypt = require('bcrypt');
const UserRepository = require('../repository/User');
const registerController = async (req, res) => {
  const {email, password} = req.body
  if(!email || !password) return res.status(400).send('email and password are required')
  //login with email and password with sequelize 
  bycrypt.hash(password, 10, async (err, hash) => {
    try {
      await new UserRepository().create({ email, password: hash });
      res.status(201).send('register success')
    } catch (error) {
      res.status(409).send(error.message)
    }
  })

}

module.exports = registerController;