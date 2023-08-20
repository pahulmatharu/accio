import KitRepository from "../data/kits-repository";

class KitsService {
  kitRepository: KitRepository;
  constructor (kitRepository: KitRepository) {
    this.kitRepository = kitRepository
  }

  async search (value: string) {
    try {
      return await this.kitRepository.find(value);
    } catch (err: any) {
      throw new Error(err)
    }
  }

  async getById (id: string) {
    try {
      return await this.kitRepository.get(id);
    } catch (err: any) {
      throw new Error(err)
    }
  }
}

export default KitsService;