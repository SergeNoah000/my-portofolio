import React from 'react';
// import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes';

function App() {
  // const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      { window.location.pathname !== '/' && <Navbar />}
      <main className="flex-grow">
        <AppRoutes />
      </main>
      {window.location.pathname !== '/' &&  <Footer />}
    </div>
  );
}

export default App;
