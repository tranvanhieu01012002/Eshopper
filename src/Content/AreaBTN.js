import React, { Component } from 'react'
import { getData } from '../data/data'
import Btn from './Btn'

export default class AreaBTN extends Component {
    constructor(props) {
      super(props)
      this.state = {
         btn: getData("fff")
      }
    }
  render() {
    return (
      <>
      {this.state.btn.map(ele =>{
          return <Btn name={ele.name} data= {this.props.data} categories = {this.props.categories} ></Btn>
      })}
      </>
    )
  }
}


