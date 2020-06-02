import React from 'react';

import Element from './Element'

class List extends React.Component {
  
  state = {
    numChildren: 0,
    item:'', link:'', desc:''
  }
  AddElement = () => {
    this.setState({
      numChildren: this.state.numChildren + 1
    });
  }
  handleChange = ({target}) =>  {
    this.setState({[target.name]: target.value});
};  
  render () {
    const children = [];
    for (var i = 0; i < this.state.numChildren; i += 1) {
      var item = this.state.item;
      children.push(<div class="col-lg-10 col-md-10 offset-lg-1 offset-md-1 bg-white shadow mb-5 border border-primary">
        <Element key = {i} item = {item} link = {this.state.link} desc = {this.state.desc}/></div>);
    };

    return (
      <div>
        <div class="col-lg-10 col-md-10 offset-lg-1 offset-md-1 bg-white shadow mb-5 border border-primary">
        <Element item = "first item" link = "https://youtube.com" desc = "This item is here for a reason"/>
        </div>
        {children}
        <br/><br/>
        
        <div class = "input-form">
        <label>Title: </label>
        <input style = {{"width":"20%", "margin-left": "auto", "margin-right": "auto"}} class="form-control" name = "item" type = "text" onChange = {this.handleChange}/> <br/>
        <label>Description: </label>
        <input style = {{"width":"20%", "height":"200px", "margin-left": "auto", "margin-right": "auto"}} class="form-control" name = "desc" type = "text" onChange = {this.handleChange}/> <br/>
        <label>Link (please use https): </label>
        <input style = {{"width":"20%", "margin-left": "auto", "margin-right": "auto"}} class="form-control" name = "link" type = "text" onChange = {this.handleChange}/> <br/>
        <button class="btn btn-outline-primary text-uppercase mb-3" onClick = { () => {this.AddElement()}} >add something</button>
        </div>
        <br></br>
      </div>
    );}
} 

export default List;