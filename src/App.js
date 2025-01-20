import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import CardPage from "./components/CardPage";
import Thankyoupage from './components/ThankYouPage';
import './index.css';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-light flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cards" element={<CardPage />} />
            <Route path="/thank-you" element={<Thankyoupage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

