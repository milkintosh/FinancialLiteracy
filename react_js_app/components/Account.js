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
            <h2 class="h2 text-center text-dark mb-3">Edit Profile</h2>
              <div class="form-group">
                <label for="userFullName">Name<span class="text-danger ml-1">*</span></label>
                <input type="text" class="form-control" id="userFullName" onblur="checkUserFullName()" placeholder="Firma Adı"/>
              </div>
              <div class="form-group">
                <label for="userSurname">Lastname<span class="text-danger ml-1">*</span></label>
                <input type="text" class="form-control" id="userSurname" onblur="checkUserSurname()" placeholder="Firma Faliyet Alanı"/>
                <small id="userSurnameError" class="form-text text-danger">Please fill the field.</small>
              </div>
              <div class="form-group">
                <label for="userFacebook">Facebook</label>
                <input type="text" class="form-control" id="userFacebook" placeholder="https://www.facebook.com/"/>
              </div>
              <div class="form-group">
                <label for="userTwitter">Twitter</label>
                <input type="text" class="form-control" id="userTwitter" placeholder="https://www.twitter.com/"/>
              </div>
              <div class="form-group">
                  <label for="userGooglePlus">Google Plus</label>
                  <input type="text" class="form-control" id="userGooglePlus" placeholder="https://plus.google.com/"/>
              </div>
              <div class="form-group">
                  <label for="userBio">Biography<span class="text-danger ml-1">*</span></label>
                  <textarea class="form-control" id="userBio" rows="4" onblur="checkUserBio()"></textarea>
              </div>
              <button type="button" class="btn btn-outline-primary btn-block text-uppercase mb-3" onclick="saveProfile()">Save</button>
              <button type="button" class="btn btn-outline-secondary btn-block text-uppercase" onclick="hideEditProfileForm()">Cancel</button>
        </div>
        <br></br>
        <Footer/>
      </div>
    );
} 

export default account;