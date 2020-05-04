import React from 'react';
import styled from 'styled-components';

const Bubble = styled.div`
    padding: 6px 10px;
    margin: 6px 6px 6px 0;
    border-radius: 3px;
    font-size: 14px;
    width: fit-content;
    word-break: break-all;  
    color: ${props => props.theme.colors.dark};
    background-color: ${props => {
        if (props.theme.isDark) {
            return props.theme.colors.primary
        } else {
            return props.theme.colors.light
        }
    }};
`;

const Text = styled.p`
    font-size: ${props => props.small ? "13px" : "14px"};
    font-weight: 500;
    margin-bottom: ${props => props.accent ? "6px" : 0};
    opacity: 1;
    
    color: ${props => {
        if (props.accent && props.theme.isDark) {
            return props.theme.colors.dark
        } else if (props.accent && !props.theme.isDark) {
            return props.theme.colors.primary
        } else if (props.theme.isDark) {
            return props.theme.colors.light
        } else {
            return props.theme.colors.dark
        }
    }};
`;

const ChatBubble = ({ username, message }) => {
    return (
        <Bubble>
            <Text small accent>
                {username}
            </Text>
            <Text>
                {message}
            </Text>
        </Bubble>
    )
}

export default ChatBubble
