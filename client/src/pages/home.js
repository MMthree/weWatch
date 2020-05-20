import React, { useState } from 'react';
import { createRoom } from '../api/rooms';
import { Button, Loading } from '../shared'

const Home = ({ history }) => {

    const [loading, setLoading] = useState(false);

    const newRoom = async () => {
        setLoading(true);
        try {
            const res = await createRoom();
            setLoading(false);
            history.push(`/room/${res.data.room_id}`);
        } catch (err) {
            setLoading(false);
            console.log(err.response)
        }
    };

    return (
        <div>
            <Button 
                secondary 
                onClick={newRoom}
            >
                Create New Room
                {loading    
                    ? <Loading size={"20px"} />
                    : ""
                }
            </Button>
        </div>
    )
}

export default Home
