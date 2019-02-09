let { User } = require("./notes.model");

let HttpServerCodes = require("http-status-codes");
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
        return res.status(HttpServerCodes.OK).send(result.dataValues);
      });
    } catch (err) {
      res.status(HttpServerCodes.INTERNAL_SERVER_ERROR).send(err);
    }
  },
  async getNotes(req, res) {
    console.log("inside getnotes");
    User.findAll({ where: {}, raw: true }).then(
      users => {
        res.status(HttpServerCodes.OK).json(users);
      },
      err => {
        res.status(HttpServerCodes.INTERNAL_SERVER_ERROR).send(err);
      }
    );
  }
};
