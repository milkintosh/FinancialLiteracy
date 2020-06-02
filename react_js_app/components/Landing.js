import React from 'react';


import homeImg from '../home.jpg'
import LandingHeader from './LandingHeader';
import Logo from '../Logo.png';

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
        <LandingHeader/>
        <hr></hr>
        <br/>
        <Header1 name = "Let’s lift our knowledge up-RIGHT"/>
        <p>“An investment in knowledge, pays the best interest” – Benjamin Franklin"</p>
        <br/>
        <table style = {{"width":"100%", "height":"600px"}} class = "LandingTable">
            <tr>
              <td style = {{"width":"33%"}} class = "login"><a style = {{"display":"block", "height":"600px"}} href = "/login" title = "sign up">Reach IN</a></td>
                <td style = {{"width":"33%"}}class = "about"><a style = {{"display":"block", "height":"600px"}} href = "/about" title = "about us">Reach UP</a></td>
                <td style = {{"width":"33%"}}class = "contact"><a style = {{"display":"block", "height":"600px"}} href = "/contact" title = "contact us">Reach OUT</a></td>
            </tr>
        </table>
      </div>
    );
} 

export default landing;