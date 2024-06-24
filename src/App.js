import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Archivio from './pages/Archivio';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/archivio" exact element={<Archivio />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/projects/:id" exact element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;