import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/style.css'; // Import CSS -> ADDED IN THIS STEP

import Seasons from './components/iplSeasons'
const renderChart = require('./components/renderChart')

export default class App extends Component {
  
  render() {
    return (<div onClick={renderChart(2017, "batting")}>
      hii
    </div>);
  }
}

render( <App /> , document.getElementById('app'));