import React from 'react';
import Home from './components/Home';
import { Route, Routes } from "react-router-dom";
import Cources from './cources/Cources';


export default function App() {
  return (
    <>
      {/* <Home />
      <Cource /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cources" element={ <Cources/>} />

      </Routes>
    </>
  );
}

