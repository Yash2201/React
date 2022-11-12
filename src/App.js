import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from "./Components/TextForm";
import React, {useState} from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);
  //const [themeColor, setThemeColor] = useState(null)
  
  const toggleMode = () =>{
    if(mode === 'light')
    {
        setMode('dark');
        document.body.style.background = '#79838d'; //'#6f89a0';
        //document.body.classList.add(`bg-${mode}`);
        showAlert("Dark Mode Enabled Successfully","success");
    }
    else if(mode === 'dark')
    {
        setMode('light');
        document.body.style.background = 'white';
        //document.body.classList.add(`bg-${mode}`);
        showAlert("Light Mode Enabled Successfully","success");
    }
    // else
    // {
    //     document.body.classList.add(`bg-${mode}`);
    //     showAlert("Theme Updated Successfully","success");
    // }
  }

  const showAlert = (message,type)=>{
    setAlert({
      type:type,
      message:message
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const updateTheme = (themeColor)=>{
    //document.body.classList.add(`bg-${themeColor}`); //'#6f89a0';
    setMode(themeColor);
    showAlert("Theme Updated Successfully","success");
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode} updateTheme={updateTheme} />
      <Alert alert={alert} />
      <div className="container my-5">
          <Routes>
            <Route path="about" element={<About />} />
            <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />            
          </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
