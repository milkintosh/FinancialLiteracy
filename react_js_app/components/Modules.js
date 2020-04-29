import React from 'react';

import '../App.css';
import resources from '../resources.jpg';
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

const modules = () => {
    return (
      <div>
        <Header/>
        <RenderImage class = "resourceImg" url={resources}/>
        <Header1 name = "modules"/>
        <Link name = "Title that links to ??"/>
      </div>
    );
} 

export default modules;