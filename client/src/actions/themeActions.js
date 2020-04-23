import { LIGHT_THEME, DARK_THEME } from '../types';

export const toggleTheme = () => (dispatch, getState) => {
    const themeType = getState().theme.isDark ? LIGHT_THEME : DARK_THEME;

    dispatch({
        type: themeType
    })
};


export const enableLightTheme = () => dispatch => {
    dispatch({
        type: LIGHT_THEME,
    })
};

export const enableDarkTheme = () => dispatch => {
    dispatch({
        type: DARK_THEME,
    })
};