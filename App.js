// to rename this from app to header, because this is the header element
import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
this.toggleVisibility=this.toggleVisibility.bind(this);
  }
toggleVisibility () {
    if (this.state.visibility){
      this.setState ({ 
        visibility: false });
    } else {
        this.setState ({ 
          visibility: true});
      }
}
  render() {
    if(this.state.visibility) {
  return (
      <header className="Header">
        <button class="closebutton" onClick={this.toggleVisibility}><i class="fa fa-times" aria-hidden="true"></i></button>
        <a href="#home">HOME</a>
        <a href="#resources">RESOURCES</a>
        <a href="#webinars">WEBINARS</a>
        <a href="#modules">MODULES</a>
        <a href="#partners">PARTNERS</a>
        <a href="#budget">YOUR BUDGET</a>
        <a href="#account">YOUR ACCOUNT</a>
        </header>
      
    ); }
    else {
      return (
        <header className="VisibleHeader">
          <button class="threebars" onClick={this.toggleVisibility}>
            <i class="fa fa-bars" aria-hidden="true"></i></button>
            <h1 class="Site">upright</h1>
            <div class="search-container">
              <form action="form">
                <input type="text" placeholder="search..." name="search"/>
                <button type="submit"><i class="fa fa-search" aria-hidden="false"></i></button>
              </form>
            </div>
        </header>
      );
    }
  }
}

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

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <RenderImage url="https://images.squarespace-cdn.com/content/v1/5d7671e5faead41de755dc62/1570133636570-23QWEWKPU1ZTRBQKN7XX/ke17ZwdGBToddI8pDm48kE1vR9GeFvLGaR9pIrP50dl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0qCSqOyuz_it4gynG9SI8gevSOSiNRETxoQmWNqtf_9-DDXxOAkrx6svryTEyBUMtA/william-iven-jrh5lAq-mIs-unsplash.jpg?format=1500w"/>
        <Header1 name = "Resources"/>
        <Link name = "Title that links to resource"/>
      </div>
    );
  }
}





export default App;
