import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ReviewPage from "./pages/ReviewPage";
import AuthorPage from "./pages/AuthorPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review/:id" element={<ReviewPage />} />
        <Route path="/author/:authorName" element={<AuthorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
