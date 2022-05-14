import axios from 'axios';
import React, { Component } from 'react'

export default class Option extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data:[]   
    }
  }
  async componentDidMount() {
    const response = await axios(`https://provinces.open-api.vn/api/?depth=1`);
    const json = await response.data;
    this.setState({ data: json });
  }
  render() {
    return (
        <> 
          <label>Tình thành</label>
          <select onChange={this.props.change} name="option" className="custom-select">
            {this.state.data.map(el => (
              <option value={el.name} >{el.name}</option>
            ))}
          </select>           
        </>
    );
  }
}
