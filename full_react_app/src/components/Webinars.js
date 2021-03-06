import React from 'react';

import List from './List';
import Header from './Header';
import Footer from './Footer';

import {firestore, storageRef} from './Firebase/firebase';

if(localStorage.getItem("userId") != null) {
  var docRef = firestore.collection('users').doc(localStorage.getItem("userId"));
}

var webinarsRef = storageRef.child('webinars.jpg');

var cloud = firestore.collection('webinars');

function RenderImage(props) {
      return (<div className="image"><img src={props.url} alt="picture"/>
      </div>);
}

function Header1(props) {
  return (
    <div className="title"><h1>{props.name}</h1></div>
  )
}

class webinars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      admin:false,
      webinarsImg:null,
      url:null,
      picture:null,
      desc:null,
      item:null,
      link:null,
    }
  }

  getAdmin = () => {
    return docRef.get().then(doc => {
      if (doc.exists) {
        let item = doc.data();
        if(item["admin"] == null) {
          this.setState({admin:false});
        }
        else {
          this.setState({admin:true});
        }
      }
    });
  }

  getData = () => {
    return webinarsRef.getDownloadURL().then(url => {
      // Insert url into an <img> tag to "download"
      this.setState({webinarsImg:url});    
    }).catch(function(error) {
          console.log("error occurred");
      });
  }

  onChange = (e) => {
    this.setState({picture : e.target.files});
  }

  uploadHandler = () => {
    console.log(this.state.picture[0]);
    var file = new File(this.state.picture, "webinars.jpg");
    webinarsRef.put(file).then(function(snapshot) {
      window.location.reload();
    });
  }

  onTextChange = (e) => {
    this.setState({[e.target.name] : e.target.value});
  }

  uploadTextHandler = () => {
    console.log("hello");
    cloud.doc(String(this.state.item)).set({
    desc: String(this.state.desc),
    item: String(this.state.item),
    link: String(this.state.link),
    }).then(() => {
      window.location.reload();
    });
  }

  componentDidMount(){
    this.setState({isLoading:true});
    this.getData().then(() => {
    this.getAdmin().then(() => {
    this.setState({isLoading:false});
    });});
  }

  render() {
    if(!this.state.isLoading && !this.state.admin){
      return (
        <div>
        <Header/>
        <RenderImage class = "webinarsImg" url={this.state.webinarsImg}/>
        <Header1 name = "webinars"/>
        <List page="webinars"/>
        <Footer/>
      </div>
      );
    }
    else if(!this.state.isLoading && this.state.admin) {
      return (
        <div>
        <Header/>
        
        <div class = "imageinput">
        <label>Edit "Webinars" Picture: </label><br/>
        <input type = "file" onChange = {this.onChange}/>
        <button class="btn text-uppercase mb-3" style = {{"color":"#2dd2f4", "border-color":"#2dd2f4"}} onClick={this.uploadHandler}>Upload!</button>
        </div>

        <RenderImage class = "webinarsImg" url={this.state.webinarsImg}/>
        <Header1 name = "webinars"/>

        <div class = "listinput">
          <label>Add a Webinar: </label><br/>
          <label>item</label>
          <input class="form-control" name = "item" type = "text" onChange = {this.onTextChange}/>
          <br/>

          <label>description</label>
          <input class="form-control" name = "desc" type = "text" onChange = {this.onTextChange}/>
          <br/>
          
          <label>link</label>
          <input class="form-control" name = "link" type = "textarea" onChange = {this.onTextChange}/>
          <br/>
          <button class="btn text-uppercase mb-3" style = {{"color":"#2dd2f4", "border-color":"#2dd2f4"}} onClick={this.uploadTextHandler}>Upload!</button>
        </div>

        <List page="webinars"/>
        <Footer/>
      </div>
      );
    }
  else {
    return (<p>loading</p>);
  }
}
} 

export default webinars;