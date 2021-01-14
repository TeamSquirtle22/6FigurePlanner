const pool = require('../dbModel.js');

module.exports = {
  addUser: async (req, res, next) => {
    console.log('USER', req.body);
    try {
      const {username, password, firstName, lastName, email} = req.body;
      await pool.query(
        'INSERT INTO Users (username, password, firstname, lastname, email) VALUES($1, $2, $3, $4, $5) RETURNING *',
        [username, password, firstName, lastName, email]
      );
      return next();
    } catch (err) {
      next(err);
    }
  },
  getUser: async (req, res, next) => {
    try {
      const users = await pool.query('SELECT * FROM Users');
      res.locals.data = users.rows;
      return next();
    } catch (err) {
      next(err);
    }
  },
  checkLogin: async (req, res, next) => {
    try {
      const {username} = req.body;
      const user = await pool.query(
        'SELECT password, _id FROM Users WHERE username = $1',
        [username]
      );
      res.locals.data = user.rows;
      return next();
    } catch (err) {
      next(err);
    }
  },
};
