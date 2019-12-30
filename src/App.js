import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import ShopPage from'./pages/shop/shop.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path ='/' component = {HomePage}/>
        <Route exact path ='/shop' component = {ShopPage}/>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
