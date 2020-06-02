import React from 'react';

import Post from './Forum'
import bookImg from '../book_club.jpg'
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

const book = () => {
    return (
      <div>
        <Header/>
        <RenderImage class = "bookImg" url={bookImg}/>
        <Header1 name = "Book Club"/>
        <Post/>
        <Footer/>
      </div>
    );
} 

export default book;     