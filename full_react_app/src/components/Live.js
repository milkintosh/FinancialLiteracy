import React from 'react';


import liveImg from '../home.jpg'
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

const live = () => {
    return (
      <div>
        <Header/>
        <RenderImage class = "liveImg" url={liveImg}/>
        <Header1 name = "Live Stream - Chat"/>
        <Header1 name = "Come Join Us!"/>
        <video src="https://www.youtube.com/watch?v=5yx6BWlEVcY" width="320" height="240" controls>
          Your browser does not support the video tag.
        </video> 
        <Footer/>
      </div>
    );
} 

export default live;     