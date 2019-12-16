const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./config/swagger.json");
let passport = require("passport");
const logger = require("morgan");
const cors = require("cors");
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
app.use(cors());
//passport

psql.psqlconnection().then(
  mes => {
    console.log("success:", mes);
    let { User } = require("./notesService/notes.model");
    const { notesRouter } = require("./notesService/notes.router");
    const { userRouter } = require("./user/user.router");
    let { configureJWTStrategy } = require("./passport.jwt.js");
    app.use(passport.initialize());
    configureJWTStrategy();
    app.use(passport.session());
    //save user into session
    passport.serializeUser(function (user, done) {
      console.log("serialize", user.username);
      done(null, user.id);
    });
    //extract userid from session
    passport.deserializeUser(function (user, done) {
      console.log("deserialize", user);
      User.findById(user.id).then((result) => {
        done(null, result);
      });
    });

    app.use("/api", notesRouter);
    app.use("/api/user", userRouter);

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
