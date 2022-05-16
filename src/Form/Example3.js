import React, { Component } from 'react'

export default class Example3 extends Component {
    constructor(props) {
      super(props)  
      this.state = {
         data: "infin" 
      }
      this.updatestate = this.updatestate.bind(this);
    }
    updatestate(e){
        this.setState({data: e.target.value});
    }   
    render(){
    return(
       <div>
          <Content myDataProp={this.state.data}
             updatestateProp={this.updatestate}></Content>
       </div>
    );
}
}
class Content extends Component{
    render(){
       return(
          <div>
             <input type="text" value={this.props.myDataProp}
                onChange={this.props.updatestateProp} />
             <h3>{this.props.myDataProp}</h3>
          </div>
       );
       }
}

