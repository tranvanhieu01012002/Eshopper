import React, { Component } from 'react'
import { clickNe } from './Process'

export default class Item extends Component {
  render() {
    return (
      render(this.props)
    )
  }
}

var render = (product)=> {
    return (
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="card product-item border-0 mb-4">
            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
              <img className="img-fluid w-100" src={product.img} alt="" />
            </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
              <h6 className="text-truncate mb-3">{product.name}</h6>
              <div className="d-flex justify-content-center">
                <h6>{product.price}</h6><h6 className="text-muted ml-2"><del>{product.price}</del></h6>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
              <a  href="# " className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
              <a href="# " onClick={()=>{clickNe(product.name)}} className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
            </div>
          </div>
        </div>  
    )

}

