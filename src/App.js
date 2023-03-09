import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import News from './pages/News';
import Quotes from './pages/Quotes';
import Weather from './pages/Weather';
import Login from './pages/Login';
import Register from './pages/Register';
import { useEffect, useState } from 'react';
import AuthContext from "./auth-context";
import { auth } from './db';

function App() {
  let [authstatus, setauthstatus] = useState(false);
  let login = () => {
    setauthstatus(true);
  };

  let logout = () => {
    setauthstatus(false)
  }


  return (
    <div className="App">

    <AuthContext.Provider value={{ status: authstatus, login: login ,logout:logout}}>

      { authstatus && <Sidebar />  }
        
        
        <Routes>  
          <Route path="home" element={ <Home/> } />
          <Route path="news" element={ <News /> } />
          <Route path="quotes" element={ <Quotes /> } />
          <Route path="weather" element={ <Weather /> } />
          <Route path="login" element={ <Login /> } />
          <Route path="register" element={ <Register /> } />
        </Routes>

        {/* <Home /> */}
        {/* <News /> */}

        {/* <Quotes /> */}

        </AuthContext.Provider>
     </div>
  );
}

export default App;
