const NoteController = {};

NoteController.getNotes = ( req, res ) => {
    res.send('Get notes')
}

NoteController.newNote = ( req, res ) => {
    res.send('New note')
}

NoteController.updateNote = ( req, res ) => {
    res.send('Update note')
}

NoteController.deleteNote = ( req, res ) => {
    res.send('Delete note')
}

module.exports = NoteController;