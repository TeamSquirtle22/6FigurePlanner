const pool = require("../dbModel.js");

module.exports = {
  addApp: async (req, res, next) => {
    try {
      const {
        company,
        position,
        applied_on,
        company_email,
        company_number,
        double_down,
        interview_status,
        offer_received,
        id,
      } = req.body;
      await pool.query(
        "INSERT INTO Applications (company,position,applied_on,company_email,company_number,double_down,offer_received,interview_status,user_id) VALUES($1, $2, $3, $4, $5, $6, $7,$8,$9)",
        [
          company,
          position,
          applied_on,
          company_email,
          company_number,
          double_down,
          offer_received,
          interview_status,
          id,
        ],
      );
      return next();
    } catch (err) {
      return next(err);
    }
  },
  getApp: async (req, res, next) => {
    try {
      const { id } = req.params;
      const users = await pool.query(
        "SELECT * FROM Applications WHERE user_id = $1",
        [id],
      );
      res.locals.data = users.rows;
      return next();
    } catch (err) {
      next(err);
    }
  },

  deleteApp: async (req, res, next) => {
    try {
      const { id } = req.params;
      await pool.query("DELETE FROM Applications WHERE _id = $1", [id]);
      return next();
    } catch (err) {
      return next(err);
    }
  },

  updateApp: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { interviewStatus, offerReceived, doubleDown } = req.body;
      await pool.query(
        "UPDATE Applications SET interview_status=$1, offer_received=$2, double_down=$3 WHERE _id= $4",
        [interviewStatus, offerReceived, doubleDown, id],
      );
      return next();
    } catch (err) {
      return next(err);
    }
  },
};
