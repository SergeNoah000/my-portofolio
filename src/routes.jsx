import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import HomePage from './pages/Home';
import BiographyPage from './pages/Biographie';
import FormationPage from './pages/Formation';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/" element={<Welcome />} />
         <Route path="/home" element={<HomePage />} />
         <Route path="/biography" element={<BiographyPage />} />
        <Route path="/blog" element={"Bonjout"} />
        <Route path="/formation" element={<FormationPage />} />
        {/*<Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
