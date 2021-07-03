const note = require("../models/NoteModel")
const NoteController = {};

NoteController.getNotes = ( req, res ) => {
  note.getAll ((data) => {
    res.status(200).json(data);
  });
}

NoteController.newNote = ( req, res ) => {
    note.newNote(req.body,(data) => {
        if (data.status=='Ok') {
            res.status(201).json(data);
          }else{
            res.status(500).json(data)
          }
      });
}

NoteController.updateNote = ( req, res ) => {
    const params={
        id:req.params.id,
        data:req.body
      }
    note.updateNote(params,(data) => {
        if (data.status=='Ok') {
            res.status(201).json(data);
          }else{
            res.status(500).json(data)
          }
      });
}

NoteController.deleteNote = ( req, res ) => {
    const params=req.params.id

    note.deleteNote(params,(data)=>{
    if (data.status=='Ok') {
      res.status(201).json(data);
    }else{
      res.status(500).json(data)
    }
  })
  
}

module.exports = NoteController;