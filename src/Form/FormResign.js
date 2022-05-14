import React, { Component } from 'react'
import { clickNe } from '../Content/Process'
// import CheckBox from './CheckBox'
import Option from './Option'
import RadioArea from './RadioArea'

export default class FormResign extends Component {
  constructor(props) {
    super(props)
    this.state = {
       text1:"",
       option:"",
       checkbox:false,
       radio:"",
       text2:""
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.handleChange = this.handleChange.bind(this)
  };
  changeHandler = (event)=>{
      this.setState({[event.target.name]: event.target.value})
  }
  handleChange= (event)=>{
    this.setState({ checkbox: event.target.checked })
  }
  submitHandler = (event)=>{
    event.preventDefault();
    this.setState( {[event.target.name]: event.target.value})
    clickNe("Chào mừng:"+this.state.text1+"<br>"+"Nơi chốn: "+
    this.state.option+"<br>"+ "Job: "+this.state.radio+"<br>"+"Bạn đã 18:"+this.state.checkbox+"<br>"+"ghi chú:"+this.state.text2)
  }
  render() {
    return (
      <>
      <div className="col-lg-7 mb-5">
            <div className="contact-form">
            <div id="success" />
            <form onSubmit={this.submitHandler} name="sentMessage" id="contactForm" noValidate="novalidate">
                <div className="control-group">
                  <input onChange={this.changeHandler} name="text1" type="text" className="form-control"  placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                  <p className="help-block text-danger" />
                </div> 
                <div  className="control-group">
                  <RadioArea change={this.changeHandler} ></RadioArea>
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" defaultChecked={this.state.checkbox} value="16" name='checkbox' onChange={this.handleChange} className="custom-control-input" id="newaccount" />
                      <label className="custom-control-label" htmlFor="newaccount">Are you 18+ ?</label>
                  </div>
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <Option change={this.changeHandler} ></Option>
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <textarea onChange={this.changeHandler} name='text2'  className="form-control" rows={6} id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
                <p className="help-block text-danger" />
                </div>
                <div>
                <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send
                    Message</button>
                </div>
            </form>
            </div>
        </div>
    </>
    )
  }
}


