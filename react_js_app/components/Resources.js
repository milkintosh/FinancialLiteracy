import React from 'react';

import List from './List';
import resourceImg from '../resources.jpg';
import Header from './Header';
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

const resource = () => {
    return (
      <div>
        <Header/>
        <RenderImage class = "resourceImg" url={resourceImg}/>
        <Header1 name = "resources"/>
        <List/>
        <Footer/>
      </div>
    );
} 

export default resource;     