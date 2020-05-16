import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Account from './components/Account';
import Budget from './components/Budget';
import Home from './components/Home';
import Modules from './components/Modules';
import Partners from './components/Partners';
import Resource from './components/Resources';
import Webinar from './components/Webinars';
import Search from './components/Search';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact/>   
            <Route path="/account" component={Account}/> 
            <Route path="/budget" component={Budget}/>
            <Route path="/modules" component={Modules}/>
            <Route path="/partners" component={Partners}/>
            <Route path="/resources" component={Resource}/>
            <Route path="/webinars" component={Webinar}/>
            <Route path="/search" component={Search}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
