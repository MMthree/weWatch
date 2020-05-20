import React from 'react'
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
    0%, 100% { transform: scale(0.0); }
    50% { transform: scale(1.0); }
`;

const Loader = styled.div`
    width: ${props => props.size ? props.size : "40px"};
    height: ${props => props.size ? props.size : "40px"};
    position: relative;
    display: inline-block;
`;

const Ball1 = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${props => {
            if (props.primary) {
                return props.theme.colors.primary
            } else if (props.secondary) {
                return props.theme.colors.secondary
            } else if (props.light) {
                return props.theme.colors.light
            } else if (props.dark) {
                return props.theme.colors.dark
            } else {
                return props.theme.colors.fg
            }
        }};
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${bounce} 2.0s infinite ease-in-out;
`;
const Ball2 = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${props => {
        if (props.primary) {
            return props.theme.colors.primary
        } else if (props.secondary) {
            return props.theme.colors.secondary
        } else if (props.light) {
            return props.theme.colors.light
        } else if (props.dark) {
            return props.theme.colors.dark
        } else {
            return props.theme.colors.fg
        }
    }};
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${bounce} 2.0s infinite ease-in-out;
    animation-delay: -1.0s;
`;

const Loading = ({ size, primary, secondary, light, dark }) => {
    return (
        <Loader size={size}>
            <Ball1 
                primary={primary} 
                secondary={secondary} 
                dark={dark} 
                light={light} 
            />
            <Ball2 
                primary={primary} 
                secondary={secondary} 
                dark={dark} 
                light={light} 
            />
        </Loader>
    )
}

export default Loading
