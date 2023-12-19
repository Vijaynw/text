// import logo from './logo.svg';
import './App.scss';
import './App2.scss';
import * as React from 'react';
import Home from './Component/Home';
import Footer from './Component/Footer';


const date = new Date()
const year=date.getFullYear()

function App() {
  return (
    <>
      {/* <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='resume' element={<Resume/>}></Route>
        <Route path='*' element={<Home/>}></Route>
      </Routes> */}
     {/* <h1>Hello </h1> */}
     {/* <Footer year={year}/> */}
      
      <Home />
     <Footer year={year}/>
    </>
  );
}

export default App;
