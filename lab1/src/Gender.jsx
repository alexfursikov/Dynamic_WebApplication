import React, { Component } from 'react';
import './App.css';

export default class Gender extends Component {
  constructor(props){
    super(props);
    this.state={
      gender:'М'
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange(e){
    if(e.target.value !== this.state.gender){
      this.setState({
        gender: e.target.value
      }, console.log(this.state.gender))
    }
  }
  render(){
    return(
    <div>
      <label>
      <input id='M' type='radio' onChange = {this.onChange} value='М' checked={this.state.gender === 'М'}/>М
      </label>
      <label>
      <input id='Ж' type='radio' onChange = {this.onChange} value='Ж' checked={this.state.gender === 'Ж'}/>Ж
      </label>
    </div>)
  }
}