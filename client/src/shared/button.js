import styled from 'styled-components';

export const Button = styled.button`
    
    background-color: ${props => {
        if(props.secondary) {
            return props.theme.colors.secondary
        } else if (props.dark) {
            return props.theme.colors.text
        } else {
            return props.theme.colors.primary
        }
    }};

    color: ${(props) => {
        if(props.dark && !props.isDark) {
            return props.theme.colors.bg
        } else {
            return props.theme.colors.light
        }
    }};

    border-radius: 3px;
    font-size: 14px;
    padding: 10px 16px;
    margin: 10px;
    cursor: pointer;
    border: none;
    text-transform: uppercase;
    font-weight: 500;
    transition: filter 300ms;

    &:hover {
        filter: brightness(120%);
    }

    &:focus {
        outline: none;
    }
`