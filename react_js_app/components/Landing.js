import React from 'react';

import '../App.css';
import homeImg from '../home.jpeg'
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

const landing = () => {
    return (
      <div>
        <h1 className="LandingHeader">up-RIGHT</h1>
        <RenderImage class = "homeImg" url={homeImg}/>
        <Header1 name = "TAGLINE"/>
        <Link name = "Second tagline"/>
        <table border class = "table">
            <tr>
                <td><a href = "/about">Reach UP</a></td>
                <td><a href = "/login">Reach IN</a></td>
                <td><a href = "/contact">Reach OUT</a></td>
            </tr>
        </table>
      </div>
    );
} 

export default landing;