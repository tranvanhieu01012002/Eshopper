
import React, { Component } from 'react'
import { Product,renderProduct } from './Product'


export default class Btn extends Component {
  constructor(props) {
    super(props)
    this.state = {
       click:-1
    }
  }
  render() {
    return (
      <>
        {/* <p onClick={()=>{this.setState({click: this.state.click+1})}} className="btn btn-outline-primary py-md-2 px-md-3">{this.props.name} { this.state.click} </p> */}
        {/* <p onClick={()=>{click}} className="btn btn-outline-primary py-md-2 px-md-3">{this.props.name} { this.state.click} </p> */}
      </>
    )
  }
}


