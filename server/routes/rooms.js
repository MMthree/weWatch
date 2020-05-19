const express = require('express');
const router = express.Router();
const crypto = require('crypto');

const Room = require('../models/Room');

// Create new room
router.post("/", (req, res) => {
    const id = crypto.randomBytes(10).toString('hex');

    let newRoom = new Room({
        room_id: id
    });

    newRoom
    .save()
    .then(room => {
        res.status(200).json(room);
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({ error: "Server error"});
    })
});

module.exports = router;