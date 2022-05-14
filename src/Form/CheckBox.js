import React, { Component } from 'react'

export default class CheckBox extends Component {
    constructor(props) {
      super(props)
      this.state = {
        age: false
      }; 
      this.handleChange = this.handleChange.bind(this)
    };
    handleChange = (event)=>{
        this.setState({age: event.target.checked});
        if(event.target.checked){
            console.log(this.props.change);
        }
    }
  render() {
    return (
        <>
        <div className="custom-control custom-checkbox">
            <input type="checkbox" defaultChecked={this.state.age} value="16" name='checkbox' onChange={this.handleChange} className="custom-control-input" id="newaccount" />
            <label className="custom-control-label" htmlFor="newaccount">Are you 18+ ?</label>
        </div>
    </>
    )
  }
}
