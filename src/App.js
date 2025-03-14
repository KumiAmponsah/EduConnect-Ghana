import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './pages/Navigation';
import Home from './pages/Home';
import EducationalResourcesPage from './pages/EducationalResourcesPage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import openBookIcon from './components/open-bookicon.png'; // Import the icon

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<EducationalResourcesPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        {/* Example usage of the icon in a component */}
        <img src={openBookIcon} alt="Open Book Icon" />
      </div>
    </Router>
  );
}

export default App;