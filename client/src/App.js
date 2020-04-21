import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import './App.css';
import { Container } from './shared/container';

// Pages
import Home from './pages/home';
import WatchRoom from './pages/watchRoom';

function App({ theme }) {
  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
            
          <Container>
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
  theme: state.theme.theme
});

export default connect(mapStateToProps)(App);
