import React from 'react';

import List from './List';
import resourceImg from '../resources.jpg';
import Header from './Header';
import Footer from './Footer';

import {storageRef} from './Firebase/firebase';

var resourceRef = storageRef.child('resources.jpg');

function RenderImage(props) {
      return (<div className="image"><img src={props.url} alt="picture"/>
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
      resourceImg:null
    }
  }
  getData = () => {
    return resourceRef.getDownloadURL().then(url => {
      // Insert url into an <img> tag to "download"
      this.setState({resourceImg:url});    
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
        <RenderImage class = "resourceImg" url={this.state.resourceImg}/>
        <Header1 name = "resources"/>
        <List page = "resources"/>
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