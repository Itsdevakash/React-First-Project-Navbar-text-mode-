// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('dark');

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');

      
     }else{
      setMode('light');
     }

  }
    return ( 
      <>
      <Navbar title="Navbar"  home="Home" about="About Us" gallery="Gallery" contact="Contact Us"  mode={mode}  toggleMode={toggleMode}/>
{/* <Navbar></Navbar> */}
     <br></br>
     <div className="container">
      <TextForm heading ="Enter The  Text"/>
      </div>
      <About/>
      </>


    );
}

export default App;