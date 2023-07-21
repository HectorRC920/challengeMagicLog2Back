const axios = require('axios');
const { writeFile } = require('fs/promises');


const loginController = async (req, res) => {
  const {email, password} = req.body
  //login with email and password with sequelize 


}

module.exports = loginController;