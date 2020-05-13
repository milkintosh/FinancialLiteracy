import swal from 'sweetalert2';
import React from 'react';
import home from '../home2.jpg'
import {auth} from './Firebase/firebase'

// xxxxxxxxxx Working For Sign Up Form xxxxxxxxxx
// xxxxxxxxxx Full Name Validation xxxxxxxxxx

// xxxxxxxxxx Check user bio characters. It'll use later xxxxxxxxxx
function checkUserBio(){
    var userBio = document.getElementById("userBio").value;
    var flag = false;
    if(flag){
        document.getElementById("userBioError").style.display = "block";
    }else{
        document.getElementById("userBioError").style.display = "none";
    }
}

// xxxxxxxxxx Working For Sign In Form xxxxxxxxxx
// xxxxxxxxxx Sign In Email Validation xxxxxxxxxx
function checkUserSIEmail(){
    
    var userSIEmail = document.getElementById("userSIEmail");
    var userSIEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flag;
    if(userSIEmail != null) {
    if(userSIEmail.value.match(userSIEmailFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("userSIEmailError").style.display = "block";
    }else{
        document.getElementById("userSIEmailError").style.display = "none";
    }
    }
}
// xxxxxxxxxx Sign In Password Validation xxxxxxxxxx
function checkUserSIPassword(){
    var userSIPassword = document.getElementById("userSIPassword");
    var userSIPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;      
    var flag;
    if(userSIPassword != null) {
    if(userSIPassword.value.match(userSIPasswordFormate)){
        flag = false;
    }else{
        flag = true;
    }    
    if(flag){
        document.getElementById("userSIPasswordError").style.display = "block";
    }else{
        document.getElementById("userSIPasswordError").style.display = "none";
    }
}
}
// xxxxxxxxxx Check email or password exsist in firebase authentication xxxxxxxxxx    
function signIn(){
    var userSIEmail = document.getElementById("userSIEmail");
    var userSIPassword = document.getElementById("userSIPassword");
    var userSIEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var userSIPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;   

    if(userSIEmail != null && userSIEmail != null) {
    userSIEmail = document.getElementById("userSIEmail").value;
    userSIPassword = document.getElementById("userSIPassword").value;

    var checkUserEmailValid = userSIEmail.match(userSIEmailFormate);
    var checkUserPasswordValid = userSIPassword.match(userSIPasswordFormate);

    if(checkUserEmailValid == null){
        return checkUserSIEmail();
    }else if(checkUserPasswordValid == null){
        return checkUserSIPassword();
    }else{
        
        auth.signInWithEmailAndPassword(userSIEmail, userSIPassword).then((success) => {
            swal.fire({
                type: 'successfull',
                title: 'Succesfully signed in', 
            }).then((value) => {
                setTimeout(function(){
                    window.location.replace('/home');
                }, 1000)
            });
        }).catch((error) => {
            // Handle Errors
            var errorCode = error.code;
            var errorMessage = error.message;
            swal.fire({
                type: 'error',
                title: 'Error',
                text: "sign in",
            })
        });
    }
}
}
// xxxxxxxxxx Working For Profile Page xxxxxxxxxx
// xxxxxxxxxx Get data from server and show in the page xxxxxxxxxx
auth.onAuthStateChanged((user)=>{
    if (user) {
    //   User is signed in.
        let user = auth.currentUser;
        let uid
        if(user != null){
            uid = user.uid;
        }
        let firebaseRefKey = auth.database().ref().child(uid);
        firebaseRefKey.on('value', (dataSnapShot)=>{
            if(document.getElementById("userPfFullName") != null && document.getElementById("userPfSurname") != null && document.getElementById("userPfBio") != null) {
                document.getElementById("userPfFullName").innerHTML = dataSnapShot.val().userFullName;
                document.getElementById("userPfSurname").innerHTML = dataSnapShot.val().userSurname;
                // userEmail = dataSnapShot.val().userEmail;
                // userPassword = dataSnapShot.val().userPassword;
                document.getElementById("userPfFb").setAttribute('href', dataSnapShot.val().userFb);
                document.getElementById("userPfTw").setAttribute('href', dataSnapShot.val().userTw);
                document.getElementById("userPfGp").setAttribute('href', dataSnapShot.val().userGp);
                document.getElementById("userPfBio").innerHTML = dataSnapShot.val().userBio;
            }
        })
    } else {
    //   user is not signed in
    }
    
});
// xxxxxxxxxx Show edit profile form with detail xxxxxxxxxx
function showEditProfileForm(){
    document.getElementById("profileSection").style.display = "none"
    document.getElementById("editProfileForm").style.display = "block"
    var userPfFullName = document.getElementById("userPfFullName").innerHTML;
    var userPfSurname = document.getElementById("userPfSurname").innerHTML;
    var userPfFb = document.getElementById("userPfFb").getAttribute("href");
    var userPfTw = document.getElementById("userPfTw").getAttribute("href");
    var userPfGp = document.getElementById("userPfGp").getAttribute("href");
    var userPfBio = document.getElementById("userPfBio").innerHTML;
    document.getElementById("userFullName").value = userPfFullName; 
    document.getElementById("userSurname").value = userPfSurname; 
    document.getElementById("userFacebook").value = userPfFb; 
    document.getElementById("userTwitter").value = userPfTw; 
    document.getElementById("userGooglePlus").value = userPfGp; 
    document.getElementById("userBio").value = userPfBio; 
}
// xxxxxxxxxx Hide edit profile form xxxxxxxxxx
function hideEditProfileForm(){
    document.getElementById("profileSection").style.display = "block";
    document.getElementById("editProfileForm").style.display = "none";
}
// xxxxxxxxxx Save profile and update database xxxxxxxxxx
// function saveProfile(){
//     let userFullName = document.getElementById("userFullName").value 
//     let userSurname = document.getElementById("userSurname").value 
//     let userFacebook = document.getElementById("userFacebook").value 
//     let userTwitter = document.getElementById("userTwitter").value 
//     let userGooglePlus = document.getElementById("userGooglePlus").value 
//     let userBio = document.getElementById("userBio").value
//     var userFullNameFormate = /^([A-Za-z.\s_-])/; 
//     var checkUserFullNameValid = userFullName.match(userFullNameFormate);
//     if(checkUserFullNameValid == null){
//         return checkUserFullName();
//     }else if(userSurname === ""){
//         return checkUserSurname();
//     }else{
//         let user = firebase.auth().currentUser;
//         let uid;
//         if(user != null){
//             uid = user.uid;
//         }
//         var firebaseRef = firebase.database().ref();
//         var userData = {
//             userFullName: userFullName,
//             userSurname: userSurname,
//             userFb: userFacebook,
//             userTw: userTwitter,
//             userGp: userGooglePlus,
//             userBio: userBio,
//         }
//         firebaseRef.child(uid).set(userData);
//         swal({
//             type: 'successfull',
//             title: 'Update successfull',
//             text: 'Profile updated.', 
//         }).then((value) => {
//             setTimeout(function(){
//                 document.getElementById("profileSection").style.display = "block";

//                 document.getElementById("editProfileForm").style.display = "none";
//             }, 1000)
//         });
//     }
// }
// xxxxxxxxxx Working For Sign Out xxxxxxxxxx
function signOut(){
    auth.signOut().then(function() {
        // Sign-out successful.
        swal.fire({
            type: 'successfull',
            title: 'Signed Out', 
        }).then((value) => {
            setTimeout(function(){
                window.location.replace("../index.html");
            }, 1000)
        });
    }).catch(function(error) {
        // An error happened.
        let errorMessage = error.message;
        swal.fire({
            type: 'error',
            title: 'Error',
            text: "Error",
        })
    });
}

class login extends React.Component {
constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }
handleChange = ({target})=>  {
    this.setState({[target.name]: target.value});
};
  render() {
    return(
<body class="bg-light">
    <div class="container-fluid">
        <div class="row mx-1">
            <div class="col-lg-10 col-md-10 offset-lg-1 offset-md-1 text-center mt-5 pb-4 text-primary">
            <h1 class="h1">welcome to up-RIGHT</h1>
            </div>
            <div class="col-lg-10 col-md-10 offset-lg-1 offset-md-1 bg-white shadow mb-5 border border-primary">
                <div class="row">
                    <div class="col-lg-6 col-md-6 p-4 bg-primary divCover">
                    <img src= {home} alt="Firebase cover image"/>
                    </div>
                    <div class="col-lg-6 col-md-6 p-lg-5 p-md-5 px-3 py-4">
                        <h2 class="h2 text-center text-dark mb-3">Sign In</h2>
                        <div class="form-group">
                            <label for="userSIEmail">Email address<span class="text-danger ml-1">*</span></label>
                            <input name = "email" value = {this.state.email} type="email" class="form-control" id="userSIEmail" onBlur = {checkUserSIEmail()} placeholder="mail@mail.com" onChange = {this.handleChange}/>
                            <small id="userSIEmailError" class="form-text text-danger">Please check your login information.</small>
                        </div>
                        <div class="form-group">
                            <label for="userSIPassword">Password<span class="text-danger ml-1">*</span></label>
                            <input name = "password" value = {this.state.password} type="password" class="form-control" id="userSIPassword" onBlur = {checkUserSIPassword()} placeholder="password" onChange = {this.handleChange}/>
                            <small id="userSIPasswordError" class="form-text text-danger">Please check your password.</small>
                        </div>
                        <button class="btn btn-outline-primary text-uppercase mb-3" onClick = { () => {signIn()}}>Sign In</button>
                        <p>Not a member? Let's get started: <a href="/signup"><strong class="text-primary text-uppercase showSignUpForm">Sign Up</strong></a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>       
</body>
    );
  }
}

export default login;