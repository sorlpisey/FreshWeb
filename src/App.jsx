import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage";
// import BlogLayout from "./page/Test";
// import BlogPosts from "./page/BlogPage";
import Navbar from "./components/Navbar";
import About from "./pages/AboutPage";
import Footer from "./components/Footer";
import ServicePage from "./pages/ServicePage";
import ServiceDetail from "./pages/ServiceDetail";
import BlogPage from "./pages/BlogPage";
import BookingPage from "./pages/BookingPage";
import CartPage from "./pages/CartPage";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service/:slug" element={<ServicePage />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/blog" element={<BlogPage/>} />
         <Route path="/contact" element={<Contact/>} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
