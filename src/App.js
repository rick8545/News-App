import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News.js';
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}
