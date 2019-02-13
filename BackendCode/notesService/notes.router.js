let express = require("express");
let notesController = require("./notes.controller");

const notesRouter = express.Router();

notesRouter.route("/postNotes").post(notesController.createNotes);
notesRouter.route("/allNotes").get(notesController.getNotes);
notesRouter.route("/deleteNotes").delete(notesController.deleteNotes);
notesRouter.route("/getNotesById").get(notesController.getNotesById);

module.exports = { notesRouter };
