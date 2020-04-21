import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

// Pages
import Home from './pages/home';
import WatchRoom from './pages/watchRoom';

function App() {
  return (
    <BrowserRouter>
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={WatchRoom} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
