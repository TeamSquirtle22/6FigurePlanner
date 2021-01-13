const pool = require('../dbModel.js');

module.exports = {
  addInterview: async (req, res, next) => {
    try {
      const {stage, interview_date, user_id, app_id} = req.body;
      await pool.query(
        'INSERT INTO Interviews (stage, interview_date, user_id, app_id) VALUES($1, $2, $3, $4)',
        [stage, interview_date, user_id, app_id]
      );
      return next();
    } catch (err) {
      next(err);
    }
  },
  getInterview: async (req, res, next) => {
    try {
      const {id} = req.body;
      const users = await pool.query(
        'SELECT * FROM Interviews WHERE user_id = $1',
        [id]
      );
      res.locals.data = users.rows;
      return next();
    } catch (err) {
      next(err);
    }
  },
};
