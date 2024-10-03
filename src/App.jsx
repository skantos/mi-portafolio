import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Index from './index'; 
import Habilidades from './section/habilidades';
import Contacto from './section/contacto';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Habilidades" element={<Habilidades />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
