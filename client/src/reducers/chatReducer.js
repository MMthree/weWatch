import { SUBMIT_MESSAGE } from '../types';

const initialState = {
    messages: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SUBMIT_MESSAGE:
            return {
                ...state,
                messages: [action.payload, ...state.messages]
            }
        default:
            return state
    }
}