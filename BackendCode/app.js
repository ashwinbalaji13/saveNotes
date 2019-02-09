const express = require("express");
const swaggerUi = require("swagger-ui-express");
let swaggerDocument = require("./config/swagger.json");

const psql = require("./sequalize.js");
require("dotenv").config();

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    explorer: true
  })
);

psql.psqlconnection().then(
  mes => {
    console.log("success:", mes);
    const { notesRouter } = require("./notesService/notes.router");
    app.use("/api", notesRouter);
  },
  err => {
    console.log(err);
  }
);

app.listen(process.env.port, () => {
  console.log(`listening on port ${process.env.port}`);
});
