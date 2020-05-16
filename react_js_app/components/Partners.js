import React from 'react';

import '../App.css';
import partnersImg from '../perry-grone-lbLgFFlADrY-unsplash.jpg'
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

const partners = () => {
    return (
      <div>
        <Header/>
        <RenderImage class = "partnersImg" url={partnersImg}/>
        <Header1 name = "partners"/>
        <Link name = "Title that links to ??"/>
      </div>
    );
} 

export default partners;