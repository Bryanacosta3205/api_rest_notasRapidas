const { Router } = require("express");
const router = Router();
const NoteController = require("../controller/NoteController");

router.get("/getTasks",NoteController.getNotes);

router.post("/newNote",NoteController.newNote);

router.put("/updateNote/:idTarea",NoteController.updateNote);

router.delete("/deleteNote/:idTarea",NoteController.deleteNote);

module.exports = router;
