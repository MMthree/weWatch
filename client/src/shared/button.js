import styled from 'styled-components';

export const Button = styled.button`
    background-color: ${props => props.secondary ? props.theme.colors.secondary : props.theme.colors.primary};
    border-radius: 3px;
    color: ${props => props.theme.colors.text};
    padding: 10px 10px;
    margin: 10px;
    text-align: center;
    cursor: pointer;
    border: none;
    font-family: ${props => props.theme.fonts.primary};
    text-transform: uppercase;
    font-weight: 700;
`