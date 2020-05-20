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
        res.status(400).json({ error: "Unable to create new room"});
    })
});

// check if room id exists
router.get("/:id" , (req, res) => {
    let roomId = req.params.id;
    if (!roomId) {
        res.status(400).json({ error: "Missing Room ID"})
    };

    Room.findOne({
        room_id: roomId
    })
    .then(room => {
        if (!room) {
            res.status(400).json({ error: `Room ${roomId} does not exist` });
        } else {
            res.status(200).json(room)
        }
    })
    .catch(err => {
        console.log(err)
        res.status(400).json({ error: "Unable to get room" });
    });
});

module.exports = router;