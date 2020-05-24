import React from 'react';
import { NavLink } from 'react-router-dom';

import '../App.css';
import 'font-awesome/css/font-awesome.min.css';
import Logo from '../Logo.png';
import Signout from './Signout';

class LandingHeader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      this.toggleVisibility=this.toggleVisibility.bind(this);
    }
    toggleVisibility () {
      if (this.state.visibility){
        this.setState ({ 
          visibility: false });
      } else {
          this.setState ({ 
            visibility: true});
        }
    }
  /*<a href="#home">reach up</a>
          <a href="#resources">reach out</a>
          <a href="#webinars">reach in</a>*/ //reach up reach out reach in are on a separate home screen that the user will be sent to by default if theyre not logged in
    render() {
      if(this.state.visibility) {
    return (
      <div class = "Menu">
        <button class="closebutton" onClick={this.toggleVisibility}><i class="fa fa-times" aria-hidden="true"></i></button>
        <header className="Header">
          <NavLink to="/home"><img class = "logoImg" src={Logo} alt = "Logo image"/></NavLink>
            <NavLink to="/resources">resources</NavLink>
            <NavLink to="/webinars">webinars</NavLink>
            <NavLink to="/modules">modules</NavLink>
            <NavLink to="/partners">partners</NavLink>
            <NavLink to="/budget">your budget</NavLink>
            <NavLink to="/login">your account</NavLink>
          </header>
        </div>
      ); }
  
      else {
        return (
          <header className="VisibleHeader">
            <p style={{color:"transparent"}}>buffertocenter</p>
            <button class="threebars" onClick={this.toggleVisibility}>
              <i class="fa fa-bars" aria-hidden="true"></i></button>
              <h1 style = {{"margin-top":"0.5%"}} class="Site">up-RIGHT</h1>
              <div class="search-container">
                <form action="/search">
                  <input style = {{"margin-top":"10%"}} type="text" placeholder="search..." name="search"/>
                  <button style = {{"margin-top":"10%"}} type="submit"><i class="fa fa-search" aria-hidden="false"></i></button>
                </form>  
              </div>
          </header>
        );
      }
    }
  }

  export default LandingHeader;