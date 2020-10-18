const fs = require("fs");
const path = require("path");

function addNote(body, notesArray) {
    const newNote = body;
    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, "../data/db.json"),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return newNote;
};

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    if (!note.id || typeof note.id !== 'string') {
        return false;
    }
    return true;
};

module.exports = {
    addNote,
    validateNote
};