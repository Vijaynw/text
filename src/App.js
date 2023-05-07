// import logo from './logo.svg';
import './App.scss';
import './App2.scss';
import * as React from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer';
import About from './Component/About';
import { Routes,Route } from 'react-router-dom';
import Contact from './Component/Contact';
import Resume from './Component/Resume';


const date = new Date()
const year=date.getFullYear()

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        {/* <Route path='resume' element={<Resume}></Route> */}
        <Route path='*' element={<Home/>}></Route>
      </Routes>
     {/* <h1>Hello </h1> */}
     
     
     <Footer year={year}/>
    </>
  );
}

export default App;
