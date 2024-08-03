import { useState } from 'react'
import {Routes, Route,Link} from "react-router-dom";
import Home from "./front pages/Home.jsx"
import About from './about/About.jsx';
import Nav from './Navbar/Nav.jsx';

function App() {

  return (
    <>
    <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home  key="1"></Home>}></Route>
        <Route path="/about" element={<About  key="1"></About>}></Route>
      </Routes>
    </>
  )
}

export default App
