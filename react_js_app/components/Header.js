import React from 'react';
import { NavLink } from 'react-router-dom';

import '../App.css';
import 'font-awesome/css/font-awesome.min.css';
import Logo from '../Logo.png';


class Header extends React.Component {
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
  
    render() {
      if(this.state.visibility) {
    return (
      <div class = "Menu">
        <button class="closebutton" onClick={this.toggleVisibility}><i class="fa fa-times" aria-hidden="true"></i></button>
        <header className="Header">
          <img class = "logoImg" src={Logo} alt = "Logo image"></img>
          <a href="#home">reach up</a>
          <a href="#resources">reach out</a>
          <a href="#webinars">reach in</a>
          </header>
          <header className="RightHeader">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/resources">resources</NavLink>
            <NavLink to="/webinars">webinars</NavLink>
            <NavLink to="/modules">modules</NavLink>
            <NavLink to="/partners">partners</NavLink>
            <NavLink to="/budget">your budget</NavLink>
            <NavLink to="/account">your account</NavLink>
          </header>
        </div>
      ); }
  
      else {
        return (
          <header className="VisibleHeader">
            <button class="threebars" onClick={this.toggleVisibility}>
              <i class="fa fa-bars" aria-hidden="true"></i></button>
              <h1 class="Site">up-RIGHT</h1>
              <div class="search-container">
                <form action="/search">
                  <input type="text" placeholder="search..." name="search"/>
                  <button type="submit"><i class="fa fa-search" aria-hidden="false"></i></button>
                </form>
              </div>
          </header>
        );
      }
    }
  }

  export default Header;