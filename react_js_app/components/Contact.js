import React from 'react';

import '../App.css';
import homeImg from '../home2.jpg'
import Header from './Header';

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
        <Header1 name = "Contact Us"/>
        <Link name = "A page with contact information"/>
      </div>
    );
} 

export default home;