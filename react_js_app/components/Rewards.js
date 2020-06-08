import React from 'react';


import rewardsImg from '../rewards.jpg'
import Header from './Header';
import Footer from './Footer';

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

const rewards = () => {
    return (
      <div>
        <Header/>
        <RenderImage class = "rewardsImg" url={rewardsImg}/>
        <Header1 name = "my rewards"/>
        <div class="container-fluid">
        <div class="row mx-1">
        <div class="col-lg-10 col-md-10 offset-lg-1 offset-md-1 bg-white shadow mb-5 border border-primary">
                <div class="row">
                    <div class="col-lg-6 col-md-6 p-4 bg-primary divCover">
                    <p>This section tells how many points accumulated</p>
                    </div>
                    <div class="col-lg-6 col-md-6 p-lg-5 p-md-5 px-3 py-4">
                    <Link name = "One of the products you could gain from rewards? pic or link"/>
                    <p>Description of products/rewards</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
        <Footer/>
      </div>
    );
} 

export default rewards;     