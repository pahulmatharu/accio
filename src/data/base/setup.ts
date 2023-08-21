// this is rough DI. it should not be done like this
import KitRepository from "../kits-repository";
import { GetPool, setupPool } from "./connection";

let kitRepository: KitRepository;
// setup singletons
export const setupSingletons = () => {
    const pool = setupPool();
    // data layer
    kitRepository = new KitRepository(pool);
}

// data layer
export const GetKitRepository = () => kitRepository;

export default setupSingletons;