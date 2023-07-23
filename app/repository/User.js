const BaseRepository = require('./BaseRepository');

const { User } = require('../db/models');
class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }
  async findByEmail(email) { // this is a custom method
    return await this.model.findOne({ where: { email } });
  }
  async findByEmailWithRole(email) { 
    return await this.model.findOne({
      where: { email },
      include: {
        association: 'role',
        attributes: ['name'],
      }
    });
  }
}

module.exports = UserRepository;