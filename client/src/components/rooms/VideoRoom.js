import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import styled from 'styled-components';
import ChatContainer from '../chat/ChatContainer';
import VideoPlayer from '../videoPlayer/Player';

const Container = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    grid-column-gap: 10px;

    @media screen and (max-width: ${props => props.theme.breakPoints.md}px) {
        grid-template-columns: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 10px;
    }
`;

const WatchRoom = ({ roomId, username }) => {
    let socket = useRef();

    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        socket.current = io("localhost:8080");
        joinRoom(username, roomId)

        return () => {
            socket.current.disconnect();
        }
        //eslint-disable-next-line
    }, [roomId]);

    useEffect(() => {
        socket.current.on('message', message => {
            const msgs = messages;
            msgs.push(message)
            setMessages([...msgs]);
            
        });

        socket.current.on('roomUsers', u => {
            setUsers(u.users);
        })
        //eslint-disable-next-line
    }, []);

    const joinRoom = (username, room) => {
        socket.current.emit('joinRoom', {username, room})
    };

    const sendMessage = msg => {
        socket.current.emit("chatMessage", msg)
    };

    return (
        <Container>
            <VideoPlayer
            />

            <ChatContainer 
                sendMessage={sendMessage}
                messages={messages}
                users={users}
            />
        </Container>
    )
}


export default WatchRoom
