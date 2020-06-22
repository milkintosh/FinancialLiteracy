import React from 'react';

import List from './List';
import Header from './Header';
import Footer from './Footer';

import {storageRef} from './Firebase/firebase';

var moduleRef = storageRef.child('Modules.jpg');

function RenderImage(props) {
      return (<div className="image"><img src={props.url} alt="picture"/>
      </div>);
}

function Header1(props) {
  return (
    <div className="title"><h1>{props.name}</h1></div>
  )
}
class modules extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      modulesImg:null
    }
  }
  getData = () => {
    return moduleRef.getDownloadURL().then(url => {
      // Insert url into an <img> tag to "download"
      this.setState({modulesImg:url});    
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
        <RenderImage class = "modulesImg" url={this.state.modulesImg}/>
        <Header1 name = "modules"/>
        <List page="modules"/>
        <Footer/>
      </div>
    );
    }
    else {
      return (<p>loading</p>);
    }
  }
} 

export default modules;