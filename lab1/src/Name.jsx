import React, { Component } from 'react';
import './App.css';

export default class Name extends Component {
  render(){
    return(
    <div>
      <label>Фамилия, имя, отчество</label>
      <input type='text'/>
    </div>)
  }
}