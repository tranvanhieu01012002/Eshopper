import React, { Component } from 'react'
import Title from '../Content/Title';
import FormResign from './FormResign';
import RightForm from './RightForm';

export default class FormArea extends Component {
  render() {
    return (
      renderAreaForm()
    )
  }
}
var renderAreaForm = ()=>{
    return(
        <>
            <div className="container-fluid pt-5">
            {/* area to call title component */}
                <Title title ={"Chỗ này để mà gửi form á bạn"}></Title>
                <div className="row px-xl-5">     
                    <FormResign></FormResign>
                    <RightForm></RightForm>
                </div>
            </div>
        </>
    );
}
