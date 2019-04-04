let express = require("express");
let notesController = require("./notes.controller");
let passport = require("passport");

const notesRouter = express.Router();

notesRouter.route("/postNotes").post(passport.authenticate("jwt", { session: "false" }), notesController.createNotes);
notesRouter.route("/allNotes").get(passport.authenticate("jwt", { session: "false" }), notesController.getNotes);
notesRouter.route("/deleteNotes").delete(passport.authenticate("jwt", { session: "false" }), notesController.deleteNotes);
notesRouter.route("/getNotesById").get(passport.authenticate("jwt", { session: "false" }), notesController.getNotesById);

module.exports = { notesRouter };
