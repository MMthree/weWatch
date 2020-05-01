import React from 'react';
import styled from 'styled-components';

const Alert = styled.div`
    border-radius: 1000px;
    background-color: ${props => {
        if (props.theme.isDark) {
            return props.theme.colors.light
        } else {
            return props.theme.colors.dark
        }
    }};
    height: 16px;
    width: 80%;
    text-align: center;
    margin: 10px auto;
    padding: 2px;
`;

const AlertText = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: ${props => {
        if (props.theme.isDark) {
            return props.theme.colors.dark
        } else {
            return props.theme.colors.light
        }
    }};
    margin: 0;
`;

const ChatAlert = ({ text }) => {
    return (
        <Alert>
            <AlertText>
                {text}
            </AlertText>
        </Alert>
    )
}

export default ChatAlert
