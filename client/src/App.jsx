import React from "react";
import DataComp from "./DataComp";
import Disease from "./Disease";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(){
    return (
    <Router>
     <Navbar />
     <Routes>
      <Route path='/disease' element={<Disease />} />
      <Route path='/ndata' element= {<DataComp/>} />
     </Routes>
    </Router>
    )
}

export default App;
