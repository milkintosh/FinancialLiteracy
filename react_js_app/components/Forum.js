import React from 'react';

class Post extends React.Component {
  state = {
    numChildren: 0,
    message:''
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
      children.push(<tr><td>{this.state.message}</td></tr>);
    };

    return (
      <div>
        <table id="forum">
            <tr>
                <td>
                    Entry that someone has written
                </td>
            </tr>
        {children}
        </table>
        <br/><br/>
        <div class = "input-form">
        <label>Message: </label>
        <input style = {{"width":"40%", "height":"200px", "margin-left": "auto", "margin-right": "auto"}} class="form-control" name = "message" type = "text" onChange = {this.handleChange}/> <br/>
        <button class="btn btn-outline-primary text-uppercase mb-3" onClick = { () => {this.AddElement()}} >add something</button>
        </div>
        <br></br>
      </div>
    );}
} 

export default Post;