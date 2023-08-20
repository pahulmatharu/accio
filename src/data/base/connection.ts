import { Pool } from 'pg';

const pool = new Pool({
  user: 'bitbot',
  host: 'localhost',
  database: 'Bitbot',
  password: 'bitbot',
  port: 5432,
});

export default pool;