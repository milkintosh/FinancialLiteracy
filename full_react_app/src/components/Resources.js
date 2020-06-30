import React from 'react';
import swal from 'sweetalert2';

import List from './List';
import Header from './Header';
import Footer from './Footer';

import {firestore, storageRef} from './Firebase/firebase';

if(localStorage.getItem("userId") != null) {
  var docRef = firestore.collection('users').doc(localStorage.getItem("userId"));
}

var resourceRef = storageRef.child('resources.jpg');

function RenderImage(props) {
      return (<div className="image"><img src={props.url} alt = {props.alt}/>
      </div>);
}

function Header1(props) {
  return (
    <div className="title"><h1>{props.name}</h1></div>
  )
}

class resource extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      admin:false,
      resourceImg:null,
      url:null,
      picture:null
    }
  }

  handleChange = (e) => {
    this.setState({url:e.target.value});
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
    return resourceRef.getDownloadURL().then(url => {
      // Insert url into an <img> tag to "download"
      this.setState({resourceImg:url});    
    }).catch(function(error) {
          console.log("error occurred");
      });
  }

  onChange = (e) => {
    this.setState({picture : e.target.files});
  }

  uploadHandler = () => {
    console.log(this.state.picture[0]);
    var file = new File(this.state.picture, "resources.jpg");
    resourceRef.put(file).then(function(snapshot) {
      swal.fire({
        type: 'success',
        title: 'File successfully uploaded', 
        text: 'refresh the page to see your changes',
      });
    });
  }

  componentDidMount(){
    this.setState({isLoading:true});
    if(localStorage.getItem("userId") != null) {
      this.getData().then(() => {
      this.getAdmin().then(() => {
      this.setState({isLoading:false});
      });});
    }
    else {
      this.getData().then(() => {
      this.setState({isLoading:false});
      });
    }
  }

  render() {
    if(!this.state.isLoading && !this.state.admin){
      return (
        <div>
          <Header/>
          <RenderImage class = "resourceImg" url={this.state.resourceImg}/>
          <Header1 name = "resources"/>
          <List page = "resources"/>
          <Footer/>
        </div>
      );
    }
    else if(!this.state.isLoading && this.state.admin) {
      if(this.state.picture) {
        return (
          <div>
            <Header/>
            <RenderImage class = "resourceImg" url={this.state.picture} alt = {this.state.picture}/>
            <Header1 name = "resources"/>
            <List page = "resources"/>
    
            <input type = "file" onChange = {this.onChange}/>
            <button onClick={this.uploadHandler}>Upload!</button>
          </div>
          );
      }
      return (
      <div>
        <Header/>
        <RenderImage class = "resourceImg" url={this.state.resourceImg}/>
        <Header1 name = "resources"/>
        <List page = "resources"/>

        <input type = "file" onChange = {this.onChange}/>
        <button onClick={this.uploadHandler}>Upload!</button>
        <Footer/>
      </div>
      );
    }
  else {
    return (<p>loading</p>);
  }
}
} 

export default resource;     