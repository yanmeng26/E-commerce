import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import ShopPage from'./pages/shop/shop.jsx';
import './App.css';
import Header from './components/header/header.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.jsx';
import {auth} from './firebase/firebase.utils';
import {analytics} from 'firebase';

class App extends React.Component {

  constructor(){
    super();

    this.state ={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount()
  {
    this.unsubscribeFromAuth =auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user})
    })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render()
  {
  return (
    <div className="App">
      <BrowserRouter>
      <Header currentUser = {this.state.currentUser}/>
      <Switch>
        <Route exact path ='/' component = {HomePage}/>
        <Route path ='/shop' component = {ShopPage}/>
        <Route path = '/signin' component = {SignInAndSignUpPage}/>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}
}

export default App;
