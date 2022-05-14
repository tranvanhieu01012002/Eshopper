import React, { Component } from 'react'
import { getJobData } from '../data/data';
import Radio from './Radio'

export default class RadioArea extends Component {
  render() {
    return (
     renderRadion(this.props.change)
    )
  }
}
var renderRadion = (change)=> {
  let data = getJobData();
  return (
      <>
          <div className="d-flex mb-3">
            <p className="text-dark font-weight-medium mb-0 mr-3">Job:</p>
                  {data.map(ele=>{
                    return <Radio name="radio" change={change}  value={ele.job} text={ele.job} number = {ele.id}></Radio>
                  })}
          </div>
      </>
  )
}