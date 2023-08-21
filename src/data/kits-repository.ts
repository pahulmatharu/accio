import { Pool } from "pg";
import { BaseRepository } from "./base/repository";
import { Kit } from "./entities/kit";
import { StandardPayloadResponse } from "../models/standard-response";

class KitRepository extends BaseRepository<StandardPayloadResponse<Kit>> {
  connection: Pool;
  constructor(dbConnection: Pool) {
    super();
    this.connection = dbConnection;
  }

  async filterShippingCode(value: string): Promise<StandardPayloadResponse<Kit[]>> {
    try {
      const result = await this.connection.query(`Select id, label_id, shipping_tracking_code FROM public."Kits" where position('${value}' in shipping_tracking_code)>0`);
      return {
        isSuccessful: true,
        payload: result.rows
      }
    } catch (e) {
      // TODO: add logging
      // TODO: setup Errors. lol something went wrong
      return {
        isSuccessful: false,
        error: [{
          message: 'Something went wrong'
        }],
      }
    }
  }
  async filterLabelId(value: string): Promise<StandardPayloadResponse<Kit[]>> {
    try {
      const result = await this.connection.query(`Select id, label_id, shipping_tracking_code FROM public."Kits" where position('${value}' in label_id)>0`);
      return {
        isSuccessful: true,
        payload: result.rows
      }
    } catch(e) {
      // TODO: add logging
      return {
        isSuccessful: false,
        error: [{
          message: 'Something went wrong'
        }],
      }
    }
  }
}

export default KitRepository;