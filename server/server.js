const express = require('express');
require('dotenv').config();
const http = require('http');
const socketio = require('socket.io');
const connectDB = require('./db/db');
const { userJoin, userLeaves, formatMessage, getCurrentUser, getRoomUsers } = require('./helpers/chat');

const PORT = process.env.PORT || 8080;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Connect Databse
connectDB();

app.use(express.json({extended: false}));

app.get("/", (req, res) => {
    res.status(200).json({ msg: "Server up and running" })
});

// Routes
app.use("/api/rooms", require("./routes/rooms"));

// Video Chat Room
const  botName = "ChatBot";

io.on('connection', socket => {
    socket.on('joinRoom', ({username, room}) => {
        const user = userJoin(socket.id, username, room)

        socket.join(user.room)

        socket.emit("message", formatMessage(botName, "Welcome!"))

        socket.broadcast.to(user.room).emit('message', formatMessage(botName, `${username} has joined`));

        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        });
    });

    socket.on('disconnect', () => {
        const user = userLeaves(socket.id);

        if (user) {
           io.to(user.room).emit('message', formatMessage(botName, `${user.username} has left`)) 

           io.to(user.room).emit('roomUsers', {
                room: user.room,
                users: getRoomUsers(user.room)
            });
        }
    });

    socket.on('chatMessage', msg => {
        const user = getCurrentUser(socket.id);

        io.to(user.room).emit('message', formatMessage(user.username, msg))
    })
});


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));