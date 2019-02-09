const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./config/swagger.json");
const logger = require("morgan");

const psql = require("./sequalize.js");
require("dotenv").config();

let app = express();

app.use(logger("dev"));
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
    app.use((req, res, next) => {
      const error = new Error("Not found");
      error.message = "Invalid route";
      error.status = 404;
      next(error);
    });
    app.use((error, req, res, next) => {
      res.status(error.status || 500);
      return res.json({
        error: {
          message: error.message
        }
      });
    });
  },
  err => {
    console.log(err);
  }
);

app.listen(3000, () => {
  console.log(`listening on port ${process.env.port}`);
});
