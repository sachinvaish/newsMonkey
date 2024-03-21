import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import React from 'react';

const pageSize = 9;
const apiKey = '90d07a0194994afb81b25f2807eb4937' ;

const App =()=> {

    return (
      <div>
        <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<News apiKey={apiKey} key="general" country='in' category='general' pageSize={pageSize} />} />
            <Route path="/business" element={<News apiKey={apiKey} key="business" country='in' category='business' pageSize={pageSize} />} />
            <Route path="/entertainment" element={<News apiKey={apiKey} key="entertainment" country='in' category='entertainment' pageSize={pageSize} />} />
            <Route path="/health" element={<News apiKey={apiKey} key="health" country='in' category='health' pageSize={pageSize} />} />
            <Route path="/science" element={<News apiKey={apiKey} key="science" country='in' category='science' pageSize={pageSize} />} />
            <Route path="/sports" element={<News apiKey={apiKey} key="sports" country='in' category='sports' pageSize={pageSize} />} />
            <Route path="/technology" element={<News apiKey={apiKey} key="technology" country='in' category='technology' pageSize={pageSize} />} />
          </Routes>
        </Router>

      </div>
    )
}

export default App
