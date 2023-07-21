const BaseRepository = require('./BaseRepository');

const { User } = require('../db/models');
class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }
}

module.exports = UserRepository;