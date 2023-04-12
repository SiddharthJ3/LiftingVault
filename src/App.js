import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Landingpage from "./Components/LandingPage";
import About from "./Components/About";
import Carousel from "./Components/Carousel";
import PPL from "./Programs/PPL";
import PHAT from "./Programs/PHAT"
import Fourday from "./Programs/4day";
import Arnold from './Programs/Arnold';


function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={ <Landingpage /> }></Route>
        <Route path="/Vault" element={ <Carousel /> }></Route>
        <Route path="/About" element={ <About />}></Route>
        <Route path="/PPL" element={<PPL />}></Route>
        <Route path="/4day" element={<Fourday />}></Route>
        <Route path="/PHAT" element={<PHAT />}></Route>
        <Route path="/Arnold" element={<Arnold />}></Route>
      </Routes>
      
    </>
  );
}

export default App;

