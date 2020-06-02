import React, {PureComponent}  from 'react';

class Element extends PureComponent {
  render() {
    return (
      <div class = "element">
        <a href = {this.props.link}>{this.props.item}</a><br></br>{this.props.desc}
      </div>
  );}
}

export default Element;