import swal from 'sweetalert2';
import React from 'react';
import home from '../home2.jpg'
import {auth} from './Firebase/firebase'


function checkUserFullName(){
    var userSurname = document.getElementById("userFullName");
    if(userSurname != null) {
        userSurname = document.getElementById("userFullName").value;
        var flag = false;
        if(userSurname === ""){
            flag = true;
        }
        if(flag){
            document.getElementById("userFullNameError").style.display = "block";
        }else{
            document.getElementById("userFullNameError").style.display = "none";
        }
    }
}
// xxxxxxxxxx User Surname Validation xxxxxxxxxx
function checkUserSurname(){
    var userSurname = document.getElementById("userSurname");
    if(userSurname != null) {
        userSurname = document.getElementById("userSurname").value;
        var flag = false;
        if(userSurname === ""){
            flag = true;
        }
        if(flag){
            document.getElementById("userSurnameError").style.display = "block";
        }else{
            document.getElementById("userSurnameError").style.display = "none";
        }
    }
}
// xxxxxxxxxx Email Validation xxxxxxxxxx
function checkUserEmail(){
    var userEmail = document.getElementById("userEmail");
    var userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flag;
    if(userEmail != null) {
        if(userEmail.value.match(userEmailFormate)){
            flag = false;
        }else{
            flag = true;
        }
        if(flag){
            document.getElementById("userEmailError").style.display = "block";
        }else{
            document.getElementById("userEmailError").style.display = "none";
        }
    }
}
// xxxxxxxxxx Password Validation xxxxxxxxxx
function checkUserPassword() {
    var userPassword = document.getElementById("userPassword");
    var userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;      
    var flag;
    if(userPassword != null) {
        if(userPassword.value.match(userPasswordFormate)){
            flag = false;
        }else{
            flag = true;
        }    
        if(flag){
            document.getElementById("userPasswordError").style.display = "block";
        }else{
            document.getElementById("userPasswordError").style.display = "none";
        }
    }
}

// xxxxxxxxxx Submitting and Creating new user in firebase authentication xxxxxxxxxx
function signUp(){
    var userFullName = document.getElementById("userFullName");
    var userSurname = document.getElementById("userSurname");
    var userEmail = document.getElementById("userEmail");
    var userPassword = document.getElementById("userPassword");
    var userFullNameFormate = /^([A-Za-z.\s_-])/;    
    var userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;      
    if(userFullName != null && userSurname != null && userEmail != null && userPassword != null) {
        userFullName = document.getElementById("userFullName").value;
        userSurname = document.getElementById("userSurname").value;
        userEmail = document.getElementById("userEmail").value;
        userPassword = document.getElementById("userPassword").value;

        var checkUserFullNameValid = userFullName.match(userFullNameFormate);
        var checkUserEmailValid = userEmail.match(userEmailFormate);
        var checkUserPasswordValid = userPassword.match(userPasswordFormate);

        if(checkUserFullNameValid == null){
            return checkUserFullName();
        }else if(userSurname === ""){
            return checkUserSurname();
        }else if(checkUserEmailValid == null){
            return checkUserEmail();
        }else if(checkUserPasswordValid == null){
            return checkUserPassword();
        }else{
            
            auth.createUserWithEmailAndPassword(userEmail, userPassword).then((success) => {
                //  ask Ariana what this part is used for
                // var user = auth.currentUser;
                //     var uid;
                //     if (user != null) {
                //         uid = user.uid;
                //     }
                //     var firebaseRef = auth.database().ref();
                //     var userData = {
                //         userFullName: userFullName,
                //         userSurname: userSurname,
                //         userEmail: userEmail,
                //         userPassword: userPassword,
                //         userFb: "https://www.facebook.com/",
                //         userTw: "https://twitter.com/",
                //         userGp: "https://plus.google.com/",
                //         userBio: "User biography",
                //     }
                //firebaseRef.child(uid).set(userData);
                swal.fire('Your Account Created','Your account was created successfully, you can log in now.',
                ).then((value) => {
                    setTimeout(function(){
                        window.location.replace("/login");
                    }, 1000)
                });
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                swal.fire({
                    type: 'error',
                    title: errorCode,
                    text: errorCode,
                })
            });
        }
    }
}

class signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', surname: '' };
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
                        <h1 class="h1">welcome to upright</h1>
                    </div>
                    <div class="col-lg-10 col-md-10 offset-lg-1 offset-md-1 bg-white shadow mb-5 border border-primary">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 p-4 bg-primary divCover">
                                <img src= {home} alt="picture of kids"/>
                            </div>
                            <div class="col-lg-6 col-md-6 p-lg-5 p-md-5 px-3 py-4">
                                <div id="signUpForm">
                                    <h2 class="h2 text-center text-dark mb-3">Sign Up</h2>
                                    <div class="form-group">
                                        <label for="userFullName">Name<span class="text-danger ml-1">*</span></label>
                                        <input type="text" name = "name" value = {this.state.name} class="form-control" id="userFullName" onblur={checkUserFullName()} placeholder="name" onChange = {this.handleChange}/>
                                        <small id="userFullNameError" class="form-text text-danger">This Field must be filled.</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="userSurname">Lastname<span class="text-danger ml-1">*</span></label>
                                        <input type="text" name = "surname" value = {this.state.surname} class="form-control" id="userSurname" onblur={checkUserSurname()} placeholder="lastname" onChange = {this.handleChange}/>
                                        <small id="userSurnameError" class="form-text text-danger">This Field must be filled.</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="userEmail">Email address<span class="text-danger ml-1">*</span></label>
                                        <input type="email" name = "email" value = {this.state.email} class="form-control" id="userEmail" onblur={checkUserEmail()} placeholder="mail@mail.com" onChange = {this.handleChange}/>
                                        <small id="userEmailError" class="form-text text-danger">Please check your email address.</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="userPassword">Password<span class="text-danger ml-1">*</span></label>
                                        <input type="password" name = "password" value = {this.state.password} class="form-control" id="userPassword" onblur={checkUserPassword()} placeholder="**********" onChange = {this.handleChange}/>
                                        <small id="userPasswordError" class="form-text text-danger">Your password must be uppercase, lowercase and more than 10 characters.</small>
                                    </div>
                                    <button class="btn btn-outline-primary text-uppercase mb-3" onClick = {() => {signUp()}}> Sign Up </button>
                                    <p>Already a member? Sign in: <a href="/login"><strong class="text-primary text-uppercase showSignInForm">Sign In</strong></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </body>
            );
        }
}

export default signup;