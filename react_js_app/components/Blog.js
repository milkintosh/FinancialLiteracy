import React from 'react';

import Post from './Forum'
import blogImg from '../blog.jpg'
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

function Link(props) {
  return (
    <div className="links"><a href="#url/props.name??">{props.name}</a></div>
  )
}
// we can use this to display the information onto the screen or something...
const blog = () => {
    return (
      <div>
        <Header/>
        <RenderImage class = "blogImg" url={blogImg}/>
        <Header1 name = "Blog"/>
        <Post/>
        <Footer/>
      </div>
    );
} 

export default blog;     