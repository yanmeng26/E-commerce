import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import ShopPage from'./pages/shop/shop.jsx';
import './App.css';
import Header from './components/header/header.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path ='/' component = {HomePage}/>
        <Route exact path ='/shop' component = {ShopPage}/>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
