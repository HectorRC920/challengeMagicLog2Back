const BaseRepository  = require('./BaseRepository');
const { Role } = require('../db/models');
class RoleRepository extends BaseRepository {
  constructor() {
    super(Role);
  }
  async findByName(name) { 
    return await this.model.findOne({ where: { name } });
  }
}
module.exports = RoleRepository;