import React from 'react';
import "./App.css";
import SideBar from "./components/Sidebar/sideBar";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/dashboard";
import Planner from "./pages/Planner/planner";
import Notes from "./pages/Notes/notes";
import Calendar from "./pages/Calendar/calendar";



function App() {
  return (
      <Router>
        <Navbar />
        <SideBar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="*" element={<> not found</>} />
          </Routes>
        </SideBar>
      </Router>
  );
}

export default App;
