const Sequelize = require("sequelize");
const psql = require("../sequalize").getDb();
// console.log("psql", psql);
const User = psql.define("notes", {
  user: {
    type: Sequelize.STRING
  },
  notes: {
    type: Sequelize.STRING
  }
});

// force: true will drop the table if it already exists
// User.sync({ force: true }).then(() => {
//   // Table created
//   return User.create({
//     firstName: "John",
//     lastName: "Hancock"
//   });
// });

module.exports = { User };
