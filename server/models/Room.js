const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("room", RoomSchema);