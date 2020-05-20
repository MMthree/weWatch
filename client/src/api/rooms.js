import axios from 'axios';

export const createRoom = () => {
    return axios.post("/api/rooms");
};