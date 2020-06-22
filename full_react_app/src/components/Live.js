import React from 'react';


import liveImg from '../home.jpg'
import Header from './Header';
import Footer from './Footer';

import {storageRef} from './Firebase/firebase';

var liveRef = storageRef.child('live_stream.jpg');

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

class live extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      liveImg:null
    }
  }
  getData = () => {
    return liveRef.getDownloadURL().then(url => {
      // Insert url into an <img> tag to "download"
      this.setState({liveImg:url});    
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
        <RenderImage class = "liveImg" url={this.state.liveImg}/>
        <Header1 name = "Live Stream - Chat"/>
        <Header1 name = "Come Join Us!"/>
        <video src="https://www.youtube.com/watch?v=5yx6BWlEVcY" width="320" height="240" controls>
          Your browser does not support the video tag.
        </video> 
        <Footer/>
      </div>
    );}
    else {
      return (<p>loading</p>);
    }
  }
} 

export default live;     