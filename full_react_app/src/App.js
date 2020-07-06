import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './App.css';
import Account from './components/Account';
import Budget from './components/Budget';
import Home from './components/Home';
import Modules from './components/Modules';
import Partners from './components/Partners';
import Resource from './components/Resources';
import Webinar from './components/Webinars';
import Search from './components/Search';
import Login from './components/Login';
import Signup from './components/SignUp';
import Landing from './components/Landing';
import About from './components/About';
import Contact from './components/Contact';
import Book from './components/Book';
import Blog from './components/Blog';
import Live from './components/Live';
import Rewards from './components/Rewards';

import PrivateRoute from './components/PrivateRoute';

class App extends React.Component {
  render() {
      return (
        <BrowserRouter>
          <div>
            <Switch>
            <Route path="/" component={Landing} exact/> 
              <Route path="/login" component={Login}/> 
              <Route path="/signup" component={Signup}/> 
              <Route path="/landing" component={Landing}/> 
              <Route path="/about" component={About}/> 
              <Route path="/contact" component={Contact}/>      
              <PrivateRoute path="/home" component={Home}/>     
              <PrivateRoute path="/account" component={Account}/> 
              <PrivateRoute path="/budget" component={Budget}/>
              <PrivateRoute path="/modules" component={Modules}/>
              <PrivateRoute path="/partners" component={Partners}/>
              <PrivateRoute path="/resources" component={Resource}/>
              <PrivateRoute path="/webinars" component={Webinar}/>
              <PrivateRoute path="/search" component={Search}/>
              <PrivateRoute path="/blog" component={Blog}/>
              <PrivateRoute path="/live" component={Live}/>
              <PrivateRoute path="/book" component={Book}/>
              <PrivateRoute path="/rewards" component={Rewards}/>
            </Switch>
          </div>
        </BrowserRouter>
      );
  }
}

export default App;
