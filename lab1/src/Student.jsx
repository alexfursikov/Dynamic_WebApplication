import React, { Component } from 'react';
import './App.css';
import Languages from './Languages';
import Speciality from './Speciality';
import Name from './Name';
import Gender from './Gender';

export default class Student extends Component {
  render(){
    return(
    <div>
      <h2>Студент</h2>
      <Name/>
      <Gender/>
      <Languages data = {this.props.Languages}/>
      <Speciality data = {this.props.Speciality}/>
    </div>
    )
  }
}