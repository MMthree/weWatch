import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { switchTheme } from './actions/themeActions';
import NavBar from './components/navbar/NavBar';


import './App.css';
import { ThemeProvider } from 'styled-components';
import { Container } from './shared/container';

// Pages
import Home from './pages/home';
import WatchRoom from './pages/watchRoom';

function App({ theme, isDark, switchTheme }) {

  useEffect(() => {
    if (localStorage.isDark) {
      const mode = JSON.parse(localStorage.isDark);
      switchTheme(mode ? "dark" : "light");
    }
    //eslint-disable-next-line
  }, []);

  

  return (
      <ThemeProvider theme={theme} >
        <BrowserRouter>
            
          <Container>

            <NavBar />
            
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/:id" component={WatchRoom} />
            </Switch>
          </Container>

        </BrowserRouter>
      </ThemeProvider>
  );
}

const mapStateToProps = state => ({
  theme: state.theme.theme,
  isDark: state.theme.isDark
});

export default connect(mapStateToProps, { switchTheme })(App);
