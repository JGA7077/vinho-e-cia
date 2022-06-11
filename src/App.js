import React from "react"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { GlobalStyle } from './components/GlobalStyle';
import Home from './pages/Home';
import Products from './pages/Products';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Events from './pages/Events';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
