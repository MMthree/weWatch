import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0 6px 0;
`;

const Input = styled.input`
    border-radius: 3px;
    border: none;
    height: 30px;
    padding: 0 6px;
    margin-right: 6px; 
    width: 100%;
    font-weight: bold;
    color: ${props => {
        if (props.theme.isDark) {
            return props.theme.colors.light
        } else {
            return props.theme.colors.dark
        }
    }};
    background-color: ${props => {
        if (props.theme.isDark) {
            return props.theme.colors.dark
        } else {
            return props.theme.colors.light
        }
    }};
    border: ${props => {
        if (props.theme.isDark) {
            return `2px solid ${props.theme.colors.primary}`
        } else {
            return `2px solid ${props.theme.colors.light}`
        }
    }};

    &::placeholder {
        font-weight: 600 !important;
        opacity: .6;
        color: ${props => {
        if (props.theme.isDark) {
            return props.theme.colors.light
        } else {
            return props.theme.colors.dark
        }
    }};
    }
`;

const Button = styled.button`
    height: 30px;
    border-radius: 3px;
    font-weight: bold;
    color: ${props => {
        if (props.theme.isDark) {
            return props.theme.colors.light
        } else {
            return props.theme.colors.dark
        }
    }};
    background-color: ${props => {
        if (!props.theme.isDark) {
            return props.theme.colors.light;
        } else {
            return props.theme.colors.primary
        }
    }};
    border: none;
    cursor: pointer;
`;

const ChatForm = ({ sendMessage }) => {

    const inputRef = useRef();

    const [message, setMessage] = useState("");
    
    const handleSubmit = e => {
        e.preventDefault();
        
        if (!message) {
            return
        } else {
            sendMessage(message);
            setMessage("");
            inputRef.current.focus();
        }
    };

    const handleChange = e => {
        setMessage(e.target.value);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input 
                ref={inputRef}
                type="text"
                name="message"
                onChange={handleChange}
                value={message}
                placeholder="Send a message"
            />          
            <Button type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default ChatForm
