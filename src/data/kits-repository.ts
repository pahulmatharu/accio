import { Pool } from "pg";
import { BaseRepository } from "./base/repository";
import { Kit } from "./entities/kit";

class KitRepository extends BaseRepository<Kit> {
  constructor(dbConnection: Pool) {
    super();
  }

  get(id: string): Promise<Kit> {
    throw new Error("Method not implemented");
  }
  find(value: string): Promise<Kit[]> {
    throw new Error("Method not implemented");
  }
}

export default KitRepository;