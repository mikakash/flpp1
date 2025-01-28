'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaMoon, FaBars } from 'react-icons/fa';
import MenuModal from './MenuModal';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);
    const [navbarHeight, setNavbarHeight] = useState(0);


  useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50 );
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

   useEffect(()=>{
       if(navbarRef.current){
           setNavbarHeight(navbarRef.current.offsetHeight)
       }
   }, []);


  const navbarStyle = {
    transform: visible ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.3s ease-in-out',
  };


    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
      document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
    };
    const closeMenu = () => {
        setMenuOpen(false);
        document.body.style.overflow = 'auto';
    };
    const handleMenuClick = (e) => {
      closeMenu();
      if (e.target.href) {
        window.location.href = e.target.href;
      }
    };

  return (
    <>
      <nav ref={navbarRef} style={navbarStyle} className="fixed top-0 w-full z-50  py-3 md:py-6 backdrop-blur-xl bg-white/10 shadow-lg transition-transform duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center transform hover:scale-105 transition-transform font-bold">
              {/* <img
                src="""
                alt="Wild and Free Logo"
                className="h-8 md:h-12 w-auto brightness-0"
              /> */}
              LOGO
            </a>
          </div>
          <div className="flex items-center gap-2 md:gap-6">
            <button className="p-1.5 md:p-2 hover:bg-white/10 rounded-full transition-colors text-black">
              <FaMoon className="text-lg md:text-xl" aria-hidden="true" />
            </button>
            <button className="p-1.5 md:p-2 hover:bg-white/10 rounded-full transition-colors text-black" onClick={toggleMenu}>
              <FaBars className="text-lg md:text-xl transition-transform duration-300" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
      <MenuModal isOpen={menuOpen} onClose={closeMenu} handleMenuClick={handleMenuClick}/>
    </>
  );
};

export default Navbar;