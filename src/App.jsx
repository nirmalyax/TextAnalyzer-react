
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light'); //Shows wheather dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message , type) =>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 
    1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Router>
          <Navbar home="Home" about="About" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert} />
          <div className="container ">
            <Routes>
              <Route path='/About' element={<About mode={mode}/>}/>
              <Route path='/' element={
                <Hero showAlert={showAlert} heading="Enter your text to analyse....." mode={mode}/>
              }/>
            </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
