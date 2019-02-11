import React, { Component } from 'react';
import './App.css';

export default class Languages extends Component {
    constructor(props) {
      super(props);
      this.state={
        languages:[]

      }
      this.onChange = this.onChange.bind(this);
    } 
  onChange(e){
    let m = this.state.languages;
    let k = m.indexOf(e.currentTarget.value);
    if (k >= 0) {
      m.splice(k,1);
    }
    else {
      m.unshift(e.currentTarget.value);
    }
    this.setState({
      languages: m
    });
    console.log(this.state.languages);
  }
  render() {
    let tmp = this.props.data.map((item,index) => {
      return <label key={item}>
      <input key={item} id={item} onChange={this.onChange} type='checkbox' value={item}/>{item}
      </label>
    })
    return tmp;
  }
}