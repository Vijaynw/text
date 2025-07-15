import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Work from './Component/Work';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;