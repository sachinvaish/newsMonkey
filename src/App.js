import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import React, { Component } from 'react'

export class App extends Component {
  pageSize=18;
  render() {
    return (
      <div>
        <Navbar/>      
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<News country='in' category='general' pageSize={this.pageSize} />} />
          <Route path="/business" element={<News country='in' category='business' pageSize={this.pageSize} />} />
          <Route path="/entertainment" element={<News country='in' category='entertainment' pageSize={this.pageSize} />} />
          <Route path="/health" element={<News country='in' category='health' pageSize={this.pageSize} />} />
          <Route path="/science" element={<News country='in' category='science' pageSize={this.pageSize} />} />
          <Route path="/sports" element={<News country='in' category='sports' pageSize={this.pageSize} />} />
          <Route path="/technology" element={<News country='in' category='technology' pageSize={this.pageSize} />} />
        </Routes>
        </BrowserRouter>
      
      </div>
    )
  }
}

export default App
