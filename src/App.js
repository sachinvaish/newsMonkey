import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import React, { Component } from 'react'

export class App extends Component {
  pageSize = 9;
  apiKey = process.env.REACT_APP_NEWAPI_KEY ;
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<News apiKey={this.apiKey} key="general" country='in' category='general' pageSize={this.pageSize} />} />
            <Route path="/business" element={<News apiKey={this.apiKey} key="business" country='in' category='business' pageSize={this.pageSize} />} />
            <Route path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment" country='in' category='entertainment' pageSize={this.pageSize} />} />
            <Route path="/health" element={<News apiKey={this.apiKey} key="health" country='in' category='health' pageSize={this.pageSize} />} />
            <Route path="/science" element={<News apiKey={this.apiKey} key="science" country='in' category='science' pageSize={this.pageSize} />} />
            <Route path="/sports" element={<News apiKey={this.apiKey} key="sports" country='in' category='sports' pageSize={this.pageSize} />} />
            <Route path="/technology" element={<News apiKey={this.apiKey} key="technology" country='in' category='technology' pageSize={this.pageSize} />} />
          </Routes>
        </Router>

      </div>
    )
  }
}

export default App
