import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { Button } from '../shared'
import styled from 'styled-components';
import ChatContainer from '../components/chat/ChatContainer';

const Container = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    padding: 10px;
`;

const WatchRoom = ({ match }) => {
    const roomId = match.params.id;
    let socket = useRef();

    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        socket.current = io("localhost:8080");
        joinRoom("mario", roomId)

        return () => {
            socket.current.emit('exit');
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
            setUsers([...users, u]);
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
            <div>
                <Button>hello</Button>
            </div>
            <ChatContainer 
                sendMessage={sendMessage}
                messages={messages}
            />
        </Container>
    )
}


export default WatchRoom
