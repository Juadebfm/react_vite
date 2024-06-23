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

// STEPS FOR REACT ROUTER DOM:
// 1. npm install react-router-dom
// 2. import BrowserRouter as Router, Routes, Route from 'react-router-dom';
// 3. Wrap the entire app with Router
// 4. Define routes using Route component
// - Route as a component as 2 attributes 1. path="/my-path", 2. element={<mypage/>}
// 5. Create a nav / header component
// 6. Use Link component from react-router-dom to create links between pages
