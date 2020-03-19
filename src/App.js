import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div>
      {/* <HomePage></HomePage> */}

      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>

    </div>
  );
}

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

export default App;
