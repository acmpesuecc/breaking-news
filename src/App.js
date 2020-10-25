import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Homepage from './Homepage';
import News from './News';

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component = {Homepage}/>
        <Route path='/:id' component = {News}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
