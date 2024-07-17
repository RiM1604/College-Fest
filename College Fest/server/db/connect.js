import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  host: '127.0.0.1',
  user: '21CS30042',
  password: '21CS30042',
  database: '21CS30042',
  port: 5432
});

export default pool;
