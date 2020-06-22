import React from 'react';

import Post from './Forum'
import Header from './Header';
import Footer from './Footer';

import {storageRef} from './Firebase/firebase';

var blogRef = storageRef.child('blog.jpg');

function RenderImage(props) {
      return (<div className="image"><img src={props.url} alt="picture"/>
      </div>);
}

function Header1(props) {
  return (
    <div className="title"><h1>{props.name}</h1></div>
  )
}

class blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      blogImg:null
    }
  }
  getData = () => {
    return blogRef.getDownloadURL().then(url => {
      // Insert url into an <img> tag to "download"
      this.setState({blogImg:url});    
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
        <RenderImage class = "blogImg" url={this.state.blogImg}/>
        <Header1 name = "Blog"/>
        <Post page="blog"/>
        <Footer/>
      </div>
    );}
    else {
      return (<p>loading</p>);
    }
  }
} 

export default blog;     