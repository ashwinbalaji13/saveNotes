let { User } = require("./notes.model");
const psql = require("../sequalize").getDb();
const Sequelize = require("sequelize");

// import HttpServerCodes from "http-status-codes";

module.exports = {
  async createNotes(req, res) {
    // force: true will drop the table if it already exists
    let { notes, user } = req.query;
    console.log(req.query);
    try {
      User.sync({ force: false }).then(async () => {
        //   // Table created
        let result = await User.create({
          user: user,
          notes: notes
        });
        console.log("notes added", result.dataValues);
        res.send(result.dataValues);
      });
    } catch (err) {
      res.send(err);
    }
  },
  async getNotes(req, res) {
    User.findAll({ where: {}, raw: true }).then(users => {
      res.json(users);
    });
  }
};
