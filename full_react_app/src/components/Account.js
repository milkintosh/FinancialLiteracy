import React from 'react';

import accountImg from '../account.jpg'
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
const account = () => {
    return (
      <div>
        <Header/>
        <RenderImage class = "resourceImg" url={accountImg}/>
        <Header1 name = "manage account"/>
        <div class="editProfileForm">
              <div class="form-group">
                <label for="userFullName">Name<span class="text-danger ml-1"></span></label>
                <input type="text" class="form-control" id="userFullName" onblur="checkUserFullName()" placeholder="Firma Adı"/>
              </div>
              <div class="form-group">
                <label for="userSurname">Lastname<span class="text-danger ml-1"></span></label>
                <input type="text" class="form-control" id="userSurname" onblur="checkUserSurname()" placeholder="Firma Faliyet Alanı"/>
                <small id="userSurnameError" class="form-text text-danger">Please fill the field.</small>
              </div>
              <div class="form-group">
                  <label for="userBio">Password<span class="text-danger ml-1"></span></label>
                  <input type="password" class="form-control" id="userSurname" onblur="checkUserSurname()" placeholder="*********"/>
              </div>
              <br/>
              <button type="button" class="btn btn-block text-uppercase mb-3" onclick="saveProfile()" style = {{"color":"#2dd2f4", "border-color":"#2dd2f4"}}>Save</button>
              <button type="button" class="btn btn-outline-secondary btn-block text-uppercase" onclick="hideEditProfileForm()">Cancel</button>
        </div>
        <br></br>
        <Footer/>
      </div>
    );
} 

export default account;