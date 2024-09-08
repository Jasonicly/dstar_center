import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Programs from './pages/Programs';
import Gallery from './pages/Gallery';
import JoinUs from './pages/JoinUs';
import BookTour from './pages/BookTour';
import Registration from './pages/Registration';
import Fees from './pages/Fees';
import News from './pages/News';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/book-tour" element={<BookTour />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/news" element={<News />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
