let express = require("express");
let userController = require("./user.controller");

const userRouter = express.Router();

userRouter.route("/postUser").post(userController.createUser);

module.exports = { userRouter };
