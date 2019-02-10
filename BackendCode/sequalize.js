const Sequelize = require("sequelize");
let psql;
function psqlconnection() {
  return new Promise((resolve, reject) => {
    psql = new Sequelize(
      "postgres://kvugnoqn:Iy7V6qx6g6MA6eBLSedADGQats5GE3V6@elmer.db.elephantsql.com:5432/kvugnoqn"
      // "postgres://postgres:admin@localhost:5432/postgres"
    );
    psql
      .authenticate()
      .then(() => {
        // console.log(psql);
        resolve("Connection has been established successfully.");
      })
      .catch(err => {
        reject("Unable to connect to the database:", err);
      });
  });
}
function getDb() {
  return psql;
}

module.exports = { getDb, psqlconnection };
