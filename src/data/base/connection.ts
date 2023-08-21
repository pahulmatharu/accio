import { Pool } from 'pg';

let pool: Pool;
export const setupPool = () => {
  pool = new Pool({
    user: 'bitbot',
    host: 'localhost',
    database: 'Bitbot',
    password: 'bitbot',
    port: 5432,
  });
  return pool;
}
export const GetPool = () => {
  return pool;
}