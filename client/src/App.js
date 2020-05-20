import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { switchTheme } from './actions/themeActions';
import NavBar from './components/navbar/NavBar';


import './App.css';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

// Pages
import Home from './pages/home';
import WatchRoom from './pages/watchRoom';

function App({ theme, switchTheme }) {

  useEffect(() => {
    if (localStorage.isDark) {
      const mode = JSON.parse(localStorage.isDark);
      switchTheme(mode ? "dark" : "light");
    }
    //eslint-disable-next-line
  }, []);

  const GlobalStyle = createGlobalStyle`
    body {
      background-color: ${props => props.theme.colors.bg};
      color: ${props => props.theme.colors.text};
    }
  `;

  return (
      <ThemeProvider theme={theme} >
        <BrowserRouter>
            
          <GlobalStyle />

            <NavBar />
            
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/room/:id" component={WatchRoom} />
            </Switch>

        </BrowserRouter>
      </ThemeProvider>
  );
}

const mapStateToProps = state => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps, { switchTheme })(App);
