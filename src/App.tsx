import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DealsSection } from './components/DealsSection';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';
import { DealPage } from './pages/DealPage';

function HomePage() {
  return (
    <>
      <Hero />
      <DealsSection />
      <HowItWorks />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/deal/:id" element={<DealPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;