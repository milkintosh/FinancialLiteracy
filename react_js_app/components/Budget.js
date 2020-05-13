import React from 'react';

import '../App.css';
import budgetImg from '../tyler-franta-iusJ25iYu1c-unsplash.jpg'
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

function Income_table(props){
  return(
    <div>
      <table id="budget">
        <tr>
          <th>income</th>
          <th>estimated</th>
          <th>actual</th>
          <form name="tabledata">
            <label>
              <input type="text" name="rows" id="rows"/><br/>
            </label>
          </form>
        </tr>
      </table>
    </div>
  )
}

const budget = () => {
    return (
      <div>
        <Header/>
        <RenderImage class = "budgetImg" url={budgetImg}/>
        <Header1 name = "your budget"/>
        <Link name = "Title that links to ??"/>
        <Income_table/>
      </div>
    );
} 

export default budget;     