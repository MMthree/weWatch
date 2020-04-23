import React from 'react';
import styled from 'styled-components';
import DarkModeToggle from '../darkMode/DarkModeToggle';
import { ReactComponent as LogoFull } from '../../assets/logos/wewatch_logo_full.svg';

const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

const StyledFullLogo = styled(LogoFull)`
    &:hover {
        transform: scale(100px);
    }
`;

const NavBar = () => {
    return (
        <FlexWrapper>
            <div>lksdjaf</div>
            <StyledFullLogo />
            <DarkModeToggle />
        </FlexWrapper>
    )
}

export default NavBar
