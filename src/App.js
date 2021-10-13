import React from 'react'
import "./App.css";
import Navbar from './components/Header/Navbar'
import Home from './components/Home'
import Login from './Login'
import {BrowserRouter, Route } from "react-router-dom"
import SignUp from './SignUp'


function App() {
  


 
  
  




  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main className="form-signin">
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={SignUp} />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App
