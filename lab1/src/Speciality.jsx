import React, { Component } from 'react';
import './App.css';

export default class Speciality extends Component {
  render() {
    let tmp = this.props.data.map((item,index)=>{
      return <option key={item} value={item}>{item}</option>
    })
    return <div>
      <select className='Speciality' onChange={this.onChange} defaultValue={this.props.data[0]}>{tmp}</select>
      </div>
  }
}