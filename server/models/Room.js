const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
    room_id: String,
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("room", RoomSchema);