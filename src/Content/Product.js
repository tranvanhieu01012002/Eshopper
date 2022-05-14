import React, { Component } from 'react'
import { getData } from '../data/data'
import AreaBTN from './AreaBTN'
import Btn from './Btn'
import Item from './Item'
// import { checkArr } from './Process'

class Product extends Component {  
  constructor(props) {
    super(props)
    this.state = {
       data : getData("full"),
       categories: getData("categories"),
       click : 0
    }
  };
  clickBtn = (status)=>{
      this.setState({click: status})
  }
  render() {
    return (
        <>
          <div className='container-fluid pt-5'> 
            {this.state.categories.map(ele=>{
              return  <p onClick={()=>{this.setState({click: ele.id})}} className="btn btn-outline-primary py-md-2 px-md-3">{ele.name} { this.state.click} </p>
            })}
          </div>
        {
           renderProduct(this.state.data,this.state.categories,this.state.click)
        }
        
        </>
    )
  }
}

var renderProduct = (data,categories,status)=>{
  if(status === "0" || status === 0){
    return(
     listProductAll(data)
    )
  }
  else{
    return ( 
     listProduct(data,categories,status)
  )
  }
   
}

var listProductAll = (data)=>{
  return (
    <>
    <div className="text-center mb-4">
      <h2 className="section-title px-5"><span className="px-2">Tất các sản phẩm</span></h2>
    </div>
    <div className="row px-xl-5 pb-3">
    {data.map((product)=>{
        return <Item img = {product.img} name = {product.name} price = {product.price}></Item>
    })}
    </div>
  </>
  )
}
var listProduct = (data,categories,status)=>{
    return (
      <>
        <div className="container-fluid pt-5">
  {categories.filter(check=>{
    return check.id === status
  }).map(ele=>{    
   return(
    <>
    <div className="text-center mb-4">
      <h2 className="section-title px-5"><span className="px-2">{ele.name}</span></h2>
    </div>
    <div className="row px-xl-5 pb-3">
    {data.filter(checkArr=>{return checkArr.id === ele.id}).map((product)=>{
        return <Item img = {product.img} name = {product.name} price = {product.price}></Item>
    })}
    </div>
  </>
  )
  })}
  </div>
      </>
    )
}
export {Product,renderProduct}
