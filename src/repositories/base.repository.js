/**
 * Nos va a servir como plantilla para hacer un crud
 * de todos los repositorios, por eso van a ser heredadas
 */

class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async get(id) {
    return await this.model.findById(id);
  }

  async getAll() {
    return await this.model.find();
  }

  async create(entity) {
    return await this.model.create(entity);
  }

  async update(id, entity) {
    return await this.model.findByIdAndupdate(id, entity, { new: true });
  }

  async delete(id) {
    return await this.model.findByIdAndDelete(id);
  }
}

module.exports = BaseRepository;
