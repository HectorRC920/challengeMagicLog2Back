const BaseRepository = require('./BaseRepository');

const { User } = require('../db/models');
class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }
  async findByEmail(email) { // this is a custom method
    return await this.model.findOne({ where: { email } });
  }
}

module.exports = UserRepository;