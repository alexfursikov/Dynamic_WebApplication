import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Student from './Student';

ReactDOM.render(
  <Student Languages={['EN', 'FR', 'DE', 'SP']} Speciality={['ИСиТ','ПОИТ','ПОИБМС','ДЭВИ']}/>, document.getElementById('root'));