import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <HomePage />
      <Footer />
    </Router>
  );
}

export default App;