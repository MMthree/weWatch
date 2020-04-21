import { combineReducers } from 'redux';

import chatReducer from './chatReducer';
import themeReducer from './themeReducer';

export default combineReducers({
    chat: chatReducer,
    theme: themeReducer
});