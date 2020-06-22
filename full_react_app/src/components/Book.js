import React from 'react';

import Post from './Forum'
import Header from './Header';
import Footer from './Footer';

import {storageRef} from './Firebase/firebase';

var bookRef = storageRef.child('book_club.jpg');

function RenderImage(props) {
      return (<div className="image"><img src={props.url} alt="picture"/>
      </div>);
}

function Header1(props) {
  return (
    <div className="title"><h1>{props.name}</h1></div>
  )
}

class book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      bookImg:null
    }
  }
  getData = () => {
    return bookRef.getDownloadURL().then(url => {
      // Insert url into an <img> tag to "download"
      this.setState({bookImg:url});    
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
          <RenderImage class = "bookImg" url={this.state.bookImg}/>
          <Header1 name = "Book Club"/>
          <Post page="bookClub"/>
          <Footer/>
        </div>
      );}
    else {
      return (<p>loading</p>);
    }
  }
} 

export default book;     
