import React from 'react';

import Header from './Header';
import Footer from './Footer';

import {storageRef} from './Firebase/firebase';

var searchRef = storageRef.child('search.jpg');

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

class search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      searchImg:null
    }
  }
  getData = () => {
    return searchRef.getDownloadURL().then(url => {
      // Insert url into an <img> tag to "download"
      this.setState({searchImg:url});    
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
        <RenderImage class = "searchImg" url={this.state.searchImg}/>
        <Header1 name = "your account"/>
        <Link name = "Title that links to ??"/>
        <Footer/>
      </div>
    );
    }
    else {
      return (<p>loading</p>);
    }
  }
} 

export default search;