import React from 'react';

import '../App.css';
import resourceImg from '../resources.jpg';
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

const resource = () => {
    return (
      <div>
        <Header/>
        <RenderImage class = "resourceImg" url={resourceImg}/>
        <Header1 name = "resources"/>
        <Link name = "Title that links to resource"/>
      </div>
    );
} 

export default resource;     