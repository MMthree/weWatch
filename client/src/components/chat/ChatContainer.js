import React, { Fragment, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ChatBubble from './ChatBubble';
import ChatAlert from './ChatAlert';
import ChatForm from './ChatForm';

const Container = styled.div`
    padding: 6px 6px 0 6px;
    background-color: ${props => {
        if (props.theme.isDark) {
            return props.theme.colors.bg
        } else {
            return props.theme.colors.primary
        }
    }};
    border: ${props => {
        if (props.theme.isDark) {
            return `2px solid ${props.theme.colors.primary}`
        } else {
            return "none"
        }
    }};
    border-radius: 5px;
`;

const BubbleContainer = styled.div`
    width: 100%;
    height: 500px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 6px;
        margin: 20px 0;
    }

    ::-webkit-scrollbar-track {
        opacity: 0;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => {
            if (props.theme.isDark) {
                return props.theme.colors.primary
            } else {
                return props.theme.colors.light
            }
        }};
        border-radius: 3px;
    }
`;

const ChatContainer = ({ messages, sendMessage }) => {

    const chatMessages = useRef();

    useEffect(() => {
        chatMessages.current.scrollTop = chatMessages.current.scrollHeight;
    }, [messages])
    return (
        <Container>
            <BubbleContainer ref={chatMessages}>

                {messages.map((m, i) => (
                    m.username === "ChatBot" 
                        ? <Fragment key={i}>
                            <ChatAlert text={m.text} />
                        </Fragment>

                        : <Fragment key={i}>
                            <ChatBubble message={m.text} username={m.username} />
                        </Fragment>
                ))}
                
            </BubbleContainer>
            
            <ChatForm 
                sendMessage={sendMessage}
            />
        </Container>
    )
}

export default ChatContainer
