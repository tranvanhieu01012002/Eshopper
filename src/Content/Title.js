import React, { Component } from 'react'

export default class Title extends Component {
  render() {
    return (
        renderTitle(this.props.title)
    )
  }
}
var renderTitle = (title)=>{
    return(
        <>
           <div className="text-center mb-4">
                    <h2 className="section-title px-5"><span className="px-2">{title}</span></h2>
            </div>
        </>
    )
}
