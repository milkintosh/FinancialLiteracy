import React from 'react';

import Header from './Header';
import Footer from './Footer';

import {storageRef} from './Firebase/firebase';

var partnerRef = storageRef.child('partners.jpg');

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

class partners extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      partnersImg:null
    }
  }
  getData = () => {
    return partnerRef.getDownloadURL().then(url => {
      // Insert url into an <img> tag to "download"
      this.setState({partnersImg:url});    
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
        
        <RenderImage class = "partnersImg" url={this.state.partnersImg}/>
        <Header1 name = "partners"/>
        <div class="container-fluid">
        <div class="row mx-1">
        <div class="col-lg-10 col-md-10 offset-lg-1 offset-md-1 shadow mb-5 border">
                <div class="row">
                    <div class="col-lg-6 col-md-6 p-4 divCover" style = {{"background-color":"#d8f3fa"}}>
                    <img src= {this.state.partnersImg} alt="Firebase cover image"/>
                    </div>
                    <div class="col-lg-6 col-md-6 p-lg-5 p-md-5 px-3 py-4"  style = {{"background-color":"#f5fcff"}}>
                    <Link name = "One of our partners(with link to their website)"/>
                    <p>Description of our partner</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
        <Footer/>
      </div>
    );
    }
    else {
      return (<p>loading</p>);
    }
  }
} 

export default partners;