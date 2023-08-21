import { Kit } from "../data/entities/kit";
import KitRepository from "../data/kits-repository";
import { FilterType } from "../models/filter-type";
import { StandardPayloadResponse } from "../models/standard-response";

class KitsService {
  kitRepository: KitRepository;
  constructor (kitRepository: KitRepository) {
    this.kitRepository = kitRepository
  }

  async search (value: string, filterType: FilterType) {
    try {
      // I am not focusing time here. this can be better with a switch and default with error. this can also be prevented by having validation on api level
      let response: StandardPayloadResponse<Kit[]>;
      if(filterType === FilterType.LABEL_ID) {
        response =  await this.kitRepository.filterLabelId(value);
      } else {
        response =  await this.kitRepository.filterShippingCode(value);
      }
      if(response?.isSuccessful) {
        return response.payload;
      }
      return [];
    } catch (err: any) {
      throw new Error(err)
    }
  }

  async getById (id: string) {
    try {
      const response =  await this.kitRepository.get(id);
      if(response.isSuccessful) {
        return response.payload
      }
      return undefined;
    } catch (err: any) {
      throw new Error(err)
    }
  }
}

export default KitsService;