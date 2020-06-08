import React from 'react';
import {firestore} from './Firebase/firebase';
import Element from './Element'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      modules:[],
      docRef: firestore.collection(props.page)
  }
}
getData = () => {
    return this.state.docRef.get().then(querySnap => {
      const data = querySnap.docs.map(doc => doc.data());
      data.forEach(entry => {
        this.setState({modules:[...this.state.modules,{item:entry["item"], desc:entry["desc"], link:entry["link"]}]});
      });
    });
  }

  componentDidMount(){
    this.setState({isLoading:true});
    this.getData().then(() => {
    this.setState({isLoading:false});
    });
  }

  render = () => {
    const children = [];
    this.state.modules.forEach(item => {
      children.push(<div class="col-lg-10 col-md-10 offset-lg-1 offset-md-1 bg-white shadow mb-5 border border-primary">
        <Element key = {item["link"]} item = {item["item"]} link = {item["link"]} desc = {item["desc"]}/></div>);
    });

    return (
      <div>
        {children}
        <br></br>
      </div>
    );}
} 

export default List;