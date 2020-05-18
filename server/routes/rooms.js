const express = require('express');
const router = express.Router();

const Room = require('../models/Room');

// Create new room
router.post("/", (req, res) => {
    let newRoom = new Room();

    newRoom.save()
    .then(room => {
        res.status(200).json(room);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({ error: "Server error"});
    })
});

module.exports = router;