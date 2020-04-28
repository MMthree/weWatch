import { LIGHT_THEME, DARK_THEME } from '../types';

export const switchTheme = mode => dispatch => {
    let theme;
    let localValue;
    
    if (mode === "dark") {
        theme = DARK_THEME
        localValue = "true"
    } 
    if (mode === "light") {
        theme = LIGHT_THEME
        localValue = "false"
    }

    localStorage.setItem("isDark", localValue);

    dispatch({
        type: theme
    });
};