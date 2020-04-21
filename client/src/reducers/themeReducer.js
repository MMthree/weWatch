import { LIGHT_THEME, DARK_THEME } from '../types';
import { light, dark } from '../theme';

const initialState = {
    theme: light,
    isDark: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LIGHT_THEME:
            return {
                theme: light,
                isDark: false
            }
        case DARK_THEME: 
            return {
                theme: dark,
                isDark: true
            }
        default:
            return state
    }
}