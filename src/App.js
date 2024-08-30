import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar component
import Home from './pages/Home';
import ActivationRoutine from './pages/ActivationRoutine';
import RecoveryRoutine from './pages/RecoveryRoutine';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Navbar /> {/* Include the Navbar at the top */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activation" element={<ActivationRoutine />} />
        <Route path="/recovery" element={<RecoveryRoutine />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;