import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import OurServices from './components/OurServices'
import Blogs from './components/Blogs'
import Contact from './components/Contact';
import About from './components/About'

function App() {

  
  return (
    <div className="app-container">

      <Navbar/>
      <Routes>
        <Route
          path = '/'
          element = {<Home/>}
        />
        <Route
          path = '/our-services'
          element = {<OurServices/>}
        />
        <Route
          path = '/Blogs'
          element = {<Blogs/>}
        />
        <Route
          path = '/Contact'
          element = {<Contact/>}
        />
        <Route
          path = '/about-us'
          element = {<About/>}
        />
      </Routes>
    </div>
  );
}

export default App;
