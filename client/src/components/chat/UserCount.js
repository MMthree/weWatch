import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 5px;
`;

const Text = styled.p`
    color: ${props => props.theme.colors.light};
    margin: 0;
    font-size: 20px;
`;

const UserCount = ({ users }) => {
    return (
        <Container>
            <Text>
                <i className="fas fa-user"></i>
                {" "}
                {users.length}
            </Text>
        </Container>
    )
}

export default UserCount
