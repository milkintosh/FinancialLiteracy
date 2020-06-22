import React from 'react';

import Header from './Header';
import Footer from './Footer';
import {storageRef} from './Firebase/firebase';

var accountRef = storageRef.child('account.jpg');

function RenderImage(props) {
      return (<div className="image"><img src={props.url} alt="picture"/>
      </div>);
}

function Header1(props) {
  return (
    <div className="title"><h1>{props.name}</h1></div>
  )
}

class account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      accountImg:null
    }
  }

  getData = () => {
    return accountRef.getDownloadURL().then(url => {
      // Insert url into an <img> tag to "download"
      this.setState({accountImg:url});    
    }).catch(function(error) {
          console.log("error occurred");
      });
  }

  componentDidMount(){
    this.setState({isLoading:true});
    this.getData().then(() => {
    this.setState({isLoading:false});
    });
  }

  render() {
    if(!this.state.isLoading) {
      return (
        <div>
          <Header/>
          <RenderImage class = "accountImg" url={this.state.accountImg}/>
          <Header1 name = "manage account"/>
          <div class="editProfileForm">
                <div class="form-group">
                  <label for="userFullName">Name<span class="text-danger ml-1"></span></label>
                  <input type="text" class="form-control" id="userFullName" onBlur="checkUserFullName()" placeholder="Firma Adı"/>
                </div>
                <div class="form-group">
                  <label for="userSurname">Lastname<span class="text-danger ml-1"></span></label>
                  <input type="text" class="form-control" id="userSurname" onBlur="checkUserSurname()" placeholder="Firma Faliyet Alanı"/>
                  <small id="userSurnameError" class="form-text text-danger">Please fill the field.</small>
                </div>
                <div class="form-group">
                    <label for="userBio">Password<span class="text-danger ml-1"></span></label>
                    <input type="password" class="form-control" id="userSurname" onBlur="checkUserSurname()" placeholder="*********"/>
                </div>
                <br/>
                <button type="button" class="btn btn-block text-uppercase mb-3" onClick="saveProfile()" style = {{"color":"#2dd2f4", "border-color":"#2dd2f4"}}>Save</button>
                <button type="button" class="btn btn-outline-secondary btn-block text-uppercase" onClick="hideEditProfileForm()">Cancel</button>
          </div>
          <br></br>
          <Footer/>
        </div>
      );
    }
    else {
      return (<p>loading</p>);
    }
  } 
}

export default account;