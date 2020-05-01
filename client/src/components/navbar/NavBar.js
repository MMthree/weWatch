import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DarkModeToggle from '../darkMode/DarkModeToggle';
import { ReactComponent as LogoFull } from '../../assets/logos/wewatch_logo_full.svg';
import { ReactComponent as LogoMin } from '../../assets/logos/wewatch_logo_min.svg';

const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

const StyledFullLogo = styled(LogoFull)`
    transition: transform .5s;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: ${props => props.theme.breakPoints.sm}px) {
        opacity: 0;
    }
`;

const StyledMinLogo = styled(LogoMin)`
    height: 70px;
    width: 70px;
    transition: transform .5s;
    opacity: 0;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: ${props => props.theme.breakPoints.sm}px) {
        opacity: 1;
    }
`;

const NavBar = () => {
    return (
        <FlexWrapper>
            <Link to="/">
                <StyledMinLogo />
            </Link>

            <Link to="/">
                <StyledFullLogo />
            </Link>
            
            <DarkModeToggle />
        </FlexWrapper>
    )
}

export default NavBar
