import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Chat from './components/Chat';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/chat' component={Chat} />
    </Switch>
  );
}

export default App;
