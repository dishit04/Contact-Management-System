import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DataTable from './Pages/Contact';
import Login from './Pages/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/contacts" element={isLoggedIn ? <DataTable /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
export default App;

