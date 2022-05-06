import React, { Component } from 'react'
import { getData } from '../data/data'
import Item from './Item'

export default class Product extends Component {
  render() {
    return (
    renderProduct()
    )
  }
}
var renderProduct = ()=>{
  let data = getData();
    return (
        <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5"><span className="px-2">Trandy Products</span></h2>
        </div>
        <div className="row px-xl-5 pb-3">
        {data.map((product)=>{
            return <Item img = {product.img} name = {product.name} price = {product.price}></Item>
        })}
        {data.map((product)=>{
            return <Item img = {product.img} name = {product.name} price = {product.price}></Item>
        })}
        </div>
      </div>
    )
}
