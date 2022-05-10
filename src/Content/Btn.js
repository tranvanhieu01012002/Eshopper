
import React, { Component } from 'react'
import { Product } from './Product'
// import { Product} from './Product'

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
        <p onClick={()=>{ <Product click={1}></Product>;this.setState({click: this.state.click+=1});
      }} className="btn btn-outline-primary py-md-2 px-md-3">{this.props.name} {this.state.click}</p>
      </>
    )
  }
}


