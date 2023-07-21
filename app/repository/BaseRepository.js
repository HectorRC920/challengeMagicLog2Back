
class BaseRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        return await this.model.create(data);
    }

    async update(id, data){
        return await this.model.update(data, {where: {id}});
    }

    async delete(id){
        return await this.model.destroy({where: {id}});
    }

    async findAll(){
        return await this.model.findAll();
    }

    async findById(id){
        return await this.model.findByPk(id);
    }
}

module.exports = BaseRepository;