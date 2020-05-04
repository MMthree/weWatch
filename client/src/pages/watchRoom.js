import React, { Fragment, useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { Button } from '../shared'
import styled from 'styled-components';
import ChatContainer from '../components/chat/ChatContainer';
import VideoPlayer from '../components/videoPlayer/Player';
import EnterRoom from '../components/enterRoomPrompt/EnterRoom';
import VideoRoom from '../components/rooms/VideoRoom';

const Container = styled.div`
    padding: 10px;
`;

const WatchRoom = ({ match }) => {
    const roomId = match.params.id;
    // let socket = useRef();

    // const [messages, setMessages] = useState([]);
    // const [users, setUsers] = useState([]);
    const [username, setUsername] = useState("");

    // useEffect(() => {
    //     socket.current = io("localhost:8080");
    //     joinRoom(username, roomId)

    //     return () => {
    //         socket.current.disconnect();
    //     }
    //     //eslint-disable-next-line
    // }, [roomId]);

    // useEffect(() => {
    //     socket.current.on('message', message => {
    //         const msgs = messages;
    //         msgs.push(message)
    //         setMessages([...msgs]);
            
    //     });

    //     socket.current.on('roomUsers', u => {
    //         console.log(u.users)
    //         setUsers(u.users);
    //     })
    //     //eslint-disable-next-line
    // }, []);

    // const joinRoom = (username, room) => {
    //     socket.current.emit('joinRoom', {username, room})
    // };

    // const sendMessage = msg => {
    //     socket.current.emit("chatMessage", msg)
    // };

    return (
        <Container>

            {!username  
                ? <EnterRoom
                    setUsername={setUsername}
                  />
                
                : <VideoRoom
                    roomId={roomId}
                    username={username}
                  />
            }

            
        </Container>
    )
}


export default WatchRoom
