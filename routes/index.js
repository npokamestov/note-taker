const path = require('path');
const router = require('express').Router();
let { notes } = require("../data/db.json");
const {addNote, validateNote} = require("../lib/notes.js");
const shortid = require('shortid');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get("/api/notes", (req, res) => {
    res.json(notes);
});

router.post("/api/notes", (req, res) => {
    req.body.id = shortid.generate();
    if (!validateNote(req.body)) {
        res.status(400).send("You must enter a note in all text-inputs");
    } else {
        const note = addNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;