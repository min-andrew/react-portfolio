import React, { useState } from 'react';
import Header from './Header';
import AboutMe from './pages/Aboutme';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div class='body'>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      {/* <Footer /> */}
    </div>
  );
}
