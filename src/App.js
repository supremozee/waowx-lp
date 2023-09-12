import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
//componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;