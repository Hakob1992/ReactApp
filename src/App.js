import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import {BrowserRouter, Route, Link} from "react-router-dom";
import Skills from "./Components/Skills/Skills";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";


function App() {
  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <Header/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/skills" component={Skills}/>
        <Route path="/my-works" component={MyWork}/>
        <Route path="/contact" component={Contact}/>

      </div>
    </BrowserRouter>
  );
}

export default App;
