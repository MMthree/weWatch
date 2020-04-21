import { SUBMIT_MESSAGE } from '../types';

export const submitMessage = message => dispatch => {
    dispatch({
        type: SUBMIT_MESSAGE,
        payload: message
    })
};