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

  async get(id: string): Promise<StandardPayloadResponse<Kit>> {
    try {
      const result = await this.connection.query('Select id, label_id, shipping_tracking_code FROM kits WHERE id = $1', [id]);
      // TODO: fix this nonsense;
      if(result.rowCount > 0) {
        return {
          isSuccessful: true,
          payload: result.rows[0]
        }
      }
      return {
        isSuccessful: true
      }
    } catch (e) {
      // TODO: add logging
      return {
        isSuccessful: false,
        error: [],
      }
    }
  }
  async filterShippingCode(value: string): Promise<StandardPayloadResponse<Kit[]>> {
    try {
      const result = await this.connection.query('Select id, label_id, shipping_tracking_code FROM kits WHERE shipping_tracking_code = $1', [value]);
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
      const result = await this.connection.query('Select id, label_id, shipping_tracking_code FROM kits WHERE label_id = $1', [value]);
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