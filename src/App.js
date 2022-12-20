import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Navbar from './container/Navbar';
import Student from "./container/Student";
import Teacher from "./container/Teacher";
import Home from "./container/Home";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  

  return (
    <>
      

            <BrowserRouter><Navbar />
              <Routes>
                
                <Route path="/" element={ <Home />} />
                <Route path="/Student" element={ <Student />} />
                <Route path="/Teacher" element={ <Teacher />} />
              </Routes>
            </BrowserRouter>
    </>      
  );
}

export default App;
