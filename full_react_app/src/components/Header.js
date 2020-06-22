import React from 'react';
import { NavLink } from 'react-router-dom';


import 'font-awesome/css/font-awesome.min.css';
import Signout from './Signout';

import {storageRef} from './Firebase/firebase';

var logoRef = storageRef.child('Logo.png');

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false,
        isLoading:true,
        Logo:null
      };
    }

    toggleVisibility = () => {
      if (this.state.visibility){
        this.setState ({ 
          visibility: false });
      } else {
          this.setState ({ 
            visibility: true});
        }
    }

    getData = () => {
      return logoRef.getDownloadURL().then(url => {
        // Insert url into an <img> tag to "download"
        this.setState({Logo:url});    
      }).catch(function(error) {
            console.log("error occurred");
        });
    }
  
    componentDidMount(){
      this.setState({isLoading:true});
      this.getData().then(() => {
      this.setState({isLoading:false});
      });
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
          <NavLink to="/home"><img class = "logoImg" src={this.state.Logo}/></NavLink>
            <NavLink to="/modules">modules</NavLink>
            <NavLink to="/webinars">webinars</NavLink>
            <NavLink to="/budget">your budget</NavLink>
            <NavLink to="/resources">resources</NavLink>
            <NavLink to="/partners">partners</NavLink>
            <NavLink to="/live">catch us live</NavLink>
            <NavLink to="/book">book club</NavLink>
            <NavLink to="/blog">blog</NavLink>
            <NavLink to="/rewards">your rewards</NavLink>
            <NavLink to="/account">your account</NavLink>
            <Signout/>
          </header>
        </div>
      ); }
  
      else {
        return (
          <div>
          <header className="VisibleHeader">
            <p style={{color:"transparent"}}>buffertocenter</p>
            <button className="threebars" onClick={this.toggleVisibility}>
              <i className="fa fa-bars" aria-hidden="true"></i></button>
              <img style = {{"margin-top":".5%"}} className = "logoImg" src={this.state.Logo}/>
              <div>
              <h1 style = {{"margin-top":"2%"}} className="Site">up-RIGHT</h1>
              </div>
              <div className="search-container">
                <form action="/search">
                  <input style = {{"margin-top":"10%"}} type="text" placeholder="search..." name="search"/>
                  <button style = {{"margin-top":"10%"}} type="submit"><i className="fa fa-search" aria-hidden="false"></i></button>
                </form>  
              </div>
              <Signout/>
          </header>
          <hr></hr>
          </div>
        );
      }
    }
  }

  export default Header;