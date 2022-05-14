import React, { Component } from 'react'

export default class Radio extends Component {
  render() {
    return (
        renderRadio(this.props.name,this.props.value,this.props.text,this.props.number,this.props.change)
    )
  }
}
var renderRadio = (name,value,text,number,fuction)=>{
    return (
        <>
            <div className="custom-control custom-radio custom-control-inline">
                <input value={value} onChange={fuction} type="radio" className="custom-control-input" id={"size-"+number} name={name} />
                <label className="custom-control-label" htmlFor={"size-"+number}>{text}</label>
            </div>
        </>
    )
}