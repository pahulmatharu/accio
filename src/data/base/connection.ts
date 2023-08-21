import pg from 'pg';
const { Pool } = pg;
let pool: pg.Pool;
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