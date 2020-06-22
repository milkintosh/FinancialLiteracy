import React from 'react';

import List from './List';
import Header from './Header';
import Footer from './Footer';

import {storageRef} from './Firebase/firebase';

var webinarsRef = storageRef.child('webinars.jpg');

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
      webinarsImg:null
    }
  }
  getData = () => {
    return webinarsRef.getDownloadURL().then(url => {
      // Insert url into an <img> tag to "download"
      this.setState({webinarsImg:url});    
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
        <RenderImage class = "webinarsImg" url={this.state.webinarsImg}/>
        <Header1 name = "webinars"/>
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