import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const VideoShell = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`;

const Controls = styled.div`
    z-index: 1;
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 40px;
    background-color: red;
`;

const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <Container>

            <Controls>
                <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? "Pause" : "Play"}</button>
            </Controls>

            <VideoShell />
            
            <ReactPlayer
                url="https://www.youtube.com/watch?v=3cC5rRH2e4k"
                playing={isPlaying}
                width="100%"
                height="100%"
            />
        </Container>
    )
}

export default Player
