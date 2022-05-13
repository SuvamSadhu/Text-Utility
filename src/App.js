import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <BrowserRouter>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          {/* <div className='container my-3'> */}
        <Route path="/" element={<Textform showAlert={showAlert} heading=" Try TextUtils - Word Counter | Character Counter" mode={mode}/>} />
         {/* </div> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
