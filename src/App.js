import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';

// Redux.
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
// Pages.
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop-page.component';
import CheckoutPage from './pages/checkout/checkout.component.jsx';
// Components
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

// Firebase related.

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
   
  }

  componentWillUnmount() {
    // Cancel the subscription.
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact={true} path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={()=> this.props.currentUser ?  (<Redirect to="/" />): (<SignInAndSignUp/>)}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});



// We don't need state for
export default connect(mapStateToProps)(App);
