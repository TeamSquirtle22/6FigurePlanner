const {Pool} = require('pg');

const URI =
  'postgres://jpapyemk:3md8Bif3U0bmEVdS2wOxHwx0b61s3h4M@ziggy.db.elephantsql.com:5432/jpapyemk';
const pool = new Pool({connectionString: URI});

module.exports = pool;
