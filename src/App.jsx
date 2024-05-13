import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import ViewCart from "./pages/ViewCart";

const App = () => {
  return (
    <div className="overflow-x-hidden font-inter text-base bg-gray-100 text-text_color">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/viewcart" element={<ViewCart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
