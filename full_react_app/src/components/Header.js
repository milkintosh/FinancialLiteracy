import React from 'react';
import { NavLink } from 'react-router-dom';


import 'font-awesome/css/font-awesome.min.css';
import Signout from './Signout';

import {firestore, storageRef} from './Firebase/firebase';

if(localStorage.getItem("userId") != null) {
  var docRef = firestore.collection('users').doc(localStorage.getItem("userId"));
}

var logoRef = storageRef.child('Logo.png');

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false,
        isLoading:true,
        admin:false,
        Logo:null,
        modules:true,
        webinars:true,
        budget:true,
        resources:true,
        partners:true,
        live:true,
        book:true,
        blog:true,
        rewards:true,
        account:true
      };
    }

    getAdmin = () => {
      return docRef.get().then(doc => {
        if (doc.exists) {
          let item = doc.data();
          if(item["admin"] == null) {
            this.setState({admin:false});
          }
          else {
            this.setState({admin:true});
          }
        }
      });
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
  
    toggleItem = (e) => {
      if(e.target.checked) {
        this.setState({[e.target.name]:true});
        localStorage.setItem([e.target.name], true);
      }
      else {
        this.setState({[e.target.name]:false});
        localStorage.setItem([e.target.name], false);
      }
    }

    componentDidMount(){
      this.setState({isLoading:true});
      this.getData().then(() => {
      this.getAdmin().then(() => {
      this.setState({isLoading:false});
      });});
    }
  
    render() {
      if(this.state.visibility && this.state.admin) {
    return (
      <div class = "Menu">
        <button class="closebutton" onClick={this.toggleVisibility}><i class="fa fa-times" aria-hidden="true"></i></button>
        <header className="Header">
          <NavLink to="/home"><img class = "logoImg" src={this.state.Logo}/></NavLink>
            {JSON.parse(localStorage.getItem("modules")) ?        
                    <div><NavLink to="/modules">modules</NavLink> <input type = "checkbox" name = "modules" onChange={this.toggleItem} checked="true"></input></div> :
                    <div><p>modules off (check to turn on)</p><input type = "checkbox" name = "modules" onChange={this.toggleItem}></input></div>
            }
            {JSON.parse(localStorage.getItem("webinars")) ?        
                    <div><NavLink to="/webinars">webinars</NavLink> <input type = "checkbox" name = "webinars" onChange={this.toggleItem} checked="true"></input></div> :
                    <div><p>webinars off (check to turn on)</p><input type = "checkbox" name = "webinars" onChange={this.toggleItem}></input></div>
            }
            {JSON.parse(localStorage.getItem("budget")) ?        
                    <div><NavLink to="/budget">budget</NavLink> <input type = "checkbox" name = "budget" onChange={this.toggleItem} checked="true"></input></div> :
                    <div><p>budget off (check to turn on)</p><input type = "checkbox" name = "budget" onChange={this.toggleItem}></input></div>
            }
            {JSON.parse(localStorage.getItem("resources")) ?        
                    <div><NavLink to="/resources">resources</NavLink> <input type = "checkbox" name = "resources" onChange={this.toggleItem} checked="true"></input></div> :
                    <div><p>resources off (check to turn on)</p><input type = "checkbox" name = "resources" onChange={this.toggleItem}></input></div>
            }
            {JSON.parse(localStorage.getItem("partners")) ?        
                    <div><NavLink to="/partners">partners</NavLink> <input type = "checkbox" name = "partners" onChange={this.toggleItem} checked="true"></input></div> :
                    <div><p>partners off (check to turn on)</p><input type = "checkbox" name = "partners" onChange={this.toggleItem}></input></div>
            }
            {JSON.parse(localStorage.getItem("live")) ?        
                    <div><NavLink to="/live">live</NavLink> <input type = "checkbox" name = "live" onChange={this.toggleItem} checked="true"></input></div> :
                    <div><p>live stream off (check to turn on)</p><input type = "checkbox" name = "live" onChange={this.toggleItem}></input></div>
            }
            {JSON.parse(localStorage.getItem("book")) ?        
                    <div><NavLink to="/book">book</NavLink> <input type = "checkbox" name = "book" onChange={this.toggleItem} checked="true"></input></div> :
                    <div><p>book club off (check to turn on)</p><input type = "checkbox" name = "book" onChange={this.toggleItem}></input></div>
            }
            {JSON.parse(localStorage.getItem("blog")) ?        
                    <div><NavLink to="/blog">blog</NavLink> <input type = "checkbox" name = "blog" onChange={this.toggleItem} checked="true"></input></div> :
                    <div><p>blog off (check to turn on)</p><input type = "checkbox" name = "blog" onChange={this.toggleItem}></input></div>
            }
            {JSON.parse(localStorage.getItem("rewards")) ?        
                    <div><NavLink to="/rewards">rewards</NavLink> <input type = "checkbox" name = "rewards" onChange={this.toggleItem} checked="true"></input></div> :
                    <div><p>rewards off (check to turn on)</p><input type = "checkbox" name = "rewards" onChange={this.toggleItem}></input></div>
            }
            {JSON.parse(localStorage.getItem("account")) ?        
                    <div><NavLink to="/account">account</NavLink> <input type = "checkbox" name = "account" onChange={this.toggleItem} checked="true"></input></div> :
                    <div><p>manage account off (check to turn on)</p><input type = "checkbox" name = "account" onChange={this.toggleItem}></input></div>
            }
            <Signout/>
          </header>
        </div>
      ); }
      else if(this.state.visibility && !this.state.admin) {
        return (
          <div class = "Menu">
            <button class="closebutton" onClick={this.toggleVisibility}><i class="fa fa-times" aria-hidden="true"></i></button>
            <header className="Header">
              <NavLink to="/home"><img class = "logoImg" src={this.state.Logo}/></NavLink>
        {/*eventually have to fix localstorage to cloud storage to persist through all users on different machines*/}
              { JSON.parse(localStorage.getItem("modules")) && 
              <NavLink to="/modules">modules</NavLink> }
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
          );
      }
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