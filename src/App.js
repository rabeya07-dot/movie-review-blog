import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
import Home from "./pages/Home";
import ReviewPage from "./pages/ReviewPage";
import AuthorPage from "./pages/AuthorPage";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review/:id" element={<ReviewPage />} />
        <Route path="/author/:author" element={<AuthorPage />} />
      </Routes>
      
    </div>
  );
};

export default App;
