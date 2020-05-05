import React, { useState } from 'react';
import styled from 'styled-components';
import EnterRoom from '../components/enterRoomPrompt/EnterRoom';
import VideoRoom from '../components/rooms/VideoRoom';

const Container = styled.div`
    padding: 10px;

    @media screen and (max-width: ${props => props.theme.breakPoints.sm}px) {
        padding: 10px 2px; 
    }
`;

const WatchRoom = ({ match }) => {
    const roomId = match.params.id;

    const [username, setUsername] = useState("");

    return (
        <Container>

            {!username  
                ? <EnterRoom
                    setUsername={setUsername}
                  />
                
                : <VideoRoom
                    roomId={roomId}
                    username={username}
                  />
            }

            
        </Container>
    )
}


export default WatchRoom
