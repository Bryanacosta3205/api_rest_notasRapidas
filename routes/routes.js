const { Router } = require("express");
const router = Router();
const NoteController = require("../controller/NoteController");

router.get("/getNotes",NoteController.getNotes);

router.post("/newNote",NoteController.newNote);

router.put("/updateNote/:id",NoteController.updateNote);

router.delete("/deleteNote/:id",NoteController.deleteNote);

module.exports = router;
