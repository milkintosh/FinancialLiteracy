import React from 'react';


import homeImg from '../home2.jpg'
import Header from './LandingHeader';
import Footer from './Footer';

function RenderImage(props) {
      return (<div className="image"><img src={props.url} alt="picture"/>
      </div>);
}

function Header1(props) {
  return (
    <div className="title"><h1>{props.name}</h1></div>
  )
}

function Link(props) {
  return (
    <div className="links"><a href="#url/props.name??">{props.name}</a></div>
  )
}

const home = () => {
    return (
      <div>
        <Header/>
        <hr></hr>
        <Header1 name = "Contact Us"/>
        <p>email: leila@email.com<br></br>
           phone: 555-0151</p>
        <Footer/>
      </div>
    );
} 

export default home;