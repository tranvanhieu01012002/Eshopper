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
       click : this.props.click
    }
  }
  render() {
    return (
        <>
          <div className='container-fluid pt-5'> 
            <AreaBTN data= {this.state.data} categories ={this.state.categories}></AreaBTN>
            {/* <Btn name={"hello"}></Btn>
            <Btn name={"hello"}></Btn> */}
          </div>
        {
           renderProduct(this.state.data,this.state.categories,this.state.click)
        }
        
        </>
    )
  }
}
var renderProduct = (data,categories,status)=>{
  if(status === 0){
    return(
      <>
      <div className="text-center mb-4">
        <h2 className="section-title px-5"><span className="px-2">Tất cả các sản phẩm</span></h2>
      </div>
      <div className="row px-xl-5 pb-3">
      
      {data.filter(checkArr=>{return true}).map((product)=>{
          return <Item img = {product.img} name = {product.name} price = {product.price}></Item>
      })}
      </div>
    </>
    )
    
  }
  else{
    return ( 
      <div className="container-fluid pt-5">
        {categories.map(ele=>{    
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
  )
  }
   
}
export {Product,renderProduct}
