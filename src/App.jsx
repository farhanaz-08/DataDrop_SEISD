import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Navbar always visible */}
        <Navbar />

        {/* Routes */}
        <div className="flex flex-1">
          <Routes>
            {/* Dashboard (default route) */}
            <Route
              path="/"
              element={
                <div className="flex flex-1">
                  <Sidebar />
                  <Dashboard />
                </div>
              }
            />

            {/* Login Page */}
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
