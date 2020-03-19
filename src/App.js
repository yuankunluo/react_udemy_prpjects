import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop-page.component';

function App() {
  return (
    <div>
      {/* <HomePage></HomePage> */}

      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
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
