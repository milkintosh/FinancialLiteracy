import React from 'react';

import '../App.css';
import webinarImg from '../john-schnobrich-2FPjlAyMQTA-unsplash.jpg'
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

const webinars = () => {
    return (
      <div>
        <Header/>
        <RenderImage class = "webinarImg" url={webinarImg}/>
        <Header1 name = "webinars"/>
        <Link name = "Title that links to ??"/>
      </div>
    );
} 

export default webinars;