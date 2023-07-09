import React, { useState } from 'react';
import ContactUsModal from '../modal/ContactUsModal';
import Link from 'next/link';

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    // Toggle body scroll
    document.body.classList.toggle('overflow-hidden');
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setMobileMenuOpen(false);
  };

  const scrollToProjectSection = () => {
    const projectSection = document.getElementById('project-section');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu after clicking on "Project" button
    }
  };

  return (
    <div className="flex flex-row w-full items-center justify-between md:py-[40px] py-[20px] container">
      <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-[24px] font-bold">
        Jacob Rotich
      </Link>
      <div className="md:flex hidden flex-row md:gap-[48px] gap-4 text-[18px] font-normal">
        <button>
          <Link href="about">About</Link>
        </button>
        <button onClick={scrollToProjectSection}>Project</button>
        <button onClick={handleModalOpen}>Contact</button>
      </div>
      <div className="md:hidden" onClick={handleMobileMenuToggle}>
        {isMobileMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden fixed right-0 w-full font-bold opacity-90 top-[13%] bg-gray-100 h-screen overflow-y-auto flex flex-col gap-8 py-5 text-[20px] ">
          <button onClick={() => setMobileMenuOpen(false)}>
            <Link href="about">About</Link>
          </button>
          <button onClick={scrollToProjectSection}>Project</button>
          <button onClick={handleModalOpen}>Contact</button>
        </div>
      )}
      <ContactUsModal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
}

export default Header;
