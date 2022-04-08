
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Footer from './components/Footer';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('dark'); 
  const [btntext, setbtntext] = useState(
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-moon-fill" viewBox="0 0 16 16">
      <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"/>
      <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.46 5.46 0 0 1 1.055.209A3.603 3.603 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.576 3.576 0 0 1-2.241.634c.162.317.295.652.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z"/>
    </svg>
);
  const changeColorTwo = ()=> { document.body.style.backgroundColor = 'black'   }  
  const changeColor = ()=> { document.body.style.backgroundColor = '#e33e5a' } 
  const toggleMode = ()=>
  {
    if (Mode === 'dark' )
    {
       setMode('info')
       setbtntext(
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-low" viewBox="0 0 16 16">
        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm.5-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z"/>
      </svg>  
       )
       document.body.style.backgroundColor =  '#162447';   document.body.style.transition  = '.7s'
       document.body.style.color  = 'white'
    }
    else{
      setMode('dark')
      setbtntext(
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-moon-fill" viewBox="0 0 16 16">
      <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z"/>
      <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.46 5.46 0 0 1 1.055.209A3.603 3.603 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.576 3.576 0 0 1-2.241.634c.162.317.295.652.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z"/>
    </svg>
      )
      document.body.style.transition  = '.7s';  document.body.style.backgroundColor = '#effbff'; 
      document.body.style.color = 'black';         
    }   
  }
  return (
    <>
    <Router>  
    <div className="fullbody">    
    <Navbar changeColor={changeColor} changeColorTwo={changeColorTwo} toggleMode = {toggleMode}  mode = {Mode} btntext = {btntext} title="TextWaliSite" />
    <div className="container"> <br /> 
       <Routes>
          <Route exact path="/about" element={<About/>} >
          </Route>
          <Route path="" element={ <TextArea mode={Mode} textHeading='Enter you Text'/>}>
          </Route>
        </Routes>

    </div>
    <Footer/> 
    </div>
    </Router>
    </>
  );
}

export default App;
 