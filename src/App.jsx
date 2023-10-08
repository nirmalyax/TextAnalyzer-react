
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Hero from './components/hero';
import Navbar from './components/navbar';


function App() {

  const [mode, setMode] = useState('light'); //Shows wheather dark mode is enabled or not

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar home="Home" about="About" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <Hero heading="Enter the text to analyse....." mode={mode}/> 
      </div>
      
    </>
  );
}

export default App;
