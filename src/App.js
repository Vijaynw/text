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
      <Home />
     {/* <Footer year={year}/> */}
    </>
  );
}

export default App;
