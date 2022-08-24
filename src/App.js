import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<News country='in' category='general' />} />
        <Route path="/business" element={<News country='in' category='business' />} />
        <Route path="/entertainment" element={<News country='in' category='entertainment' />} />
        <Route path="/health" element={<News country='in' category='health' />} />
        <Route path="/science" element={<News country='in' category='science' />} />
        <Route path="/sports" element={<News country='in' category='sports' />} />
        <Route path="/technology" element={<News country='in' category='technology' />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;