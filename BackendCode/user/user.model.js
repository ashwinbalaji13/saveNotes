const Sequelize = require("sequelize");
const psql = require("../sequalize").getDb();
// console.log("psql", psql);
const User = psql.define("users", {
    username: {
        type: Sequelize.STRING
    },
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true // this converts INT to SERIAL for Postgres
    },
    // createdAt: {
    //     type: 'TIMESTAMP',
    //     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    //     // type: Sequelize.STRING
    // },
    // updatedAt: {
    //     type: 'TIMESTAMP',
    //     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    //     // type: Sequelize.STRING
    // }
}
// , {
//         timestamps: false
//     }
);
module.exports = { User };