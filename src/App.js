// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  const [mode, setMode] = useState('dark');

  const [alert, setalert] = useState(null);

  const showalert = (message ,type)=>{
    setalert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },1500)
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'red';
      showalert("Dark mode has been enabled","success");
      document.title ="Dark Mode";
     }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled","success");
      document.title ="Light Mode";
     }

  }
    return ( 
      <>
       <Router>
      
       
      <Navbar title="Navbar"  home="Home" about="About Us" gallery="Gallery" contact="Contact Us"  mode={mode}  toggleMode={toggleMode}/>
{/* <Navbar></Navbar> */}
     <br></br>
     <div className="container">
      <Alert   alert={alert} />
      </div>
     <div className="container">
     
        
    
              
               <Switch>
          <Route exact path="/about">
            <About />
          </Route>
            <Route exact path="/">
          <TextForm heading ="Enter The  Text"  showalert={showalert}/>
          </Route>

          <Route exact path="/Gallery">
            <Gallery   />
          </Route>

          <Route exact path="/contact">
          <Contact />
          </Route>
        </Switch>
          </div>
      {/* <About   showalert={showalert}  /> */}
      
      </Router>
     
      </>


    );
}

export default App;
