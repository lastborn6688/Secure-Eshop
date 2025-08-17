import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../images/Logo.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false); // For desktop hover dropdown
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false); // For mobile click dropdown
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    navigate("/");
    setTimeout(() => {
      const section = document.querySelector(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setMenuOpen(false);
  };

  return (
    <nav className="h-20 md:h-16 lg:h-20 w-full flex items-center fixed top-0 left-0 z-50 justify-between px-4 bg-white shadow">
      {/* Logo */}
      <div className="h-full flex justify-center items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-10 w-10 md:h-12 md:w-15 lg:h-20 lg:w-16 rounded-full object-cover"
        />
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex gap-6 text-lg font-medium text-black relative">
  <Link to="/" className={`hover:underline ${location.pathname === '/' ? 'text-[rgb(59,118,174)] font-bold' : ''}`}>Home</Link>

        {/* Brands Dropdown - Desktop */}
        <div
          className="relative"
          onMouseEnter={() => setBrandsOpen(true)}
          onMouseLeave={() => setBrandsOpen(false)}
        >
    <button className={`hover:underline ${location.pathname.includes('ProductPage') ? 'text-[rgb(59,118,174)] font-bold' : ''}`}>Brands</button>
          {brandsOpen && (
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-56 z-50">
              <Link to="/bavinProductPage" className="block px-4 py-2 hover:bg-gray-100 text-black">Bavin</Link>
              <Link to="/joyroomProductPage" className="block px-4 py-2 hover:bg-gray-100 text-black">Joyroom</Link>
              <Link to="/ldnioProductPage" className="block px-4 py-2 hover:bg-gray-100 text-black">LDNIO</Link>
              <Link to="/oraimoProductPage" className="block px-4 py-2 hover:bg-gray-100 text-black">Oraimo</Link>
              <Link to="/remaxProductPage" className="block px-4 py-2 hover:bg-gray-100 text-black">Remax</Link>
              <Link to="/usamsProductPage" className="block px-4 py-2 hover:bg-gray-100 text-black">Usams</Link>
              <Link to="/wiwuProductPage" className="block px-4 py-2 hover:bg-gray-100 text-black">Wiwu</Link>
            </div>
          )}
        </div>

  <Link to="/products" className={`hover:underline ${location.pathname === '/products' ? 'text-[rgb(59,118,174)] font-bold' : ''}`}>Product</Link>
  <Link to="/clients" className={`hover:underline ${location.pathname === '/clients' ? 'text-[rgb(59,118,174)] font-bold' : ''}`}>Clients</Link>
  <Link to="/about" className={`hover:underline ${location.pathname === '/about' ? 'text-[rgb(59,118,174)] font-bold' : ''}`}>About</Link>
      </div>

      {/* Contact Button */}
      <div className="hidden md:flex">
        <Link to="/contact" className="px-6 py-2 bg-[rgb(59,118,174)] text-white rounded-2xl hover:bg-[rgb(72,117,160)]">
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        {menuOpen ? (
          <FaTimes size={28} className="cursor-pointer text-[rgb(59,118,174)]" onClick={() => setMenuOpen(false)} />
        ) : (
          <FaBars size={28} className="cursor-pointer text-[rgb(59,118,174)]" onClick={() => setMenuOpen(true)} />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-8 z-50 text-black">
          <Link to="/" className={`${location.pathname === '/' ? 'text-[rgb(59,118,174)] font-bold' : ''}`} onClick={() => setMenuOpen(false)}>Home</Link>

          {/* Mobile Brands with toggle */}
          <div className="flex flex-col items-center">
            <button
              className={`font-semibold ${location.pathname.includes('ProductPage') ? 'text-[rgb(59,118,174)] font-bold' : ''}`}
              onClick={() => setMobileBrandsOpen(!mobileBrandsOpen)}
            >
              Brands {mobileBrandsOpen ? "▲" : "▼"}
            </button>
            {mobileBrandsOpen && (
              <div className="flex flex-col gap-2 mt-2">
                <Link to="/bavinProductPage" onClick={() => setMenuOpen(false)}>Bavin</Link>
                <Link to="/joyroomProductPage" onClick={() => setMenuOpen(false)}>Joyroom</Link>
                <Link to="/ldnioProductPage" onClick={() => setMenuOpen(false)}>LDNIO</Link>
                <Link to="/oraimoProductPage" onClick={() => setMenuOpen(false)}>Oraimo</Link>
                <Link to="/remaxProductPage" onClick={() => setMenuOpen(false)}>Remax</Link>
                <Link to="/usamsProductPage" onClick={() => setMenuOpen(false)}>Usams</Link>
                <Link to="/wiwuProductPage" onClick={() => setMenuOpen(false)}>Wiwu</Link>
              </div>
            )}
          </div>

          <Link to="/products" className={`${location.pathname === '/products' ? 'text-[rgb(59,118,174)] font-bold' : ''}`} onClick={() => setMenuOpen(false)}>Product</Link>
          <Link to="/clients" className={`${location.pathname === '/clients' ? 'text-[rgb(59,118,174)] font-bold' : ''}`} onClick={() => setMenuOpen(false)}>Clients</Link>
          <Link to="/about" className={`${location.pathname === '/about' ? 'text-[rgb(59,118,174)] font-bold' : ''}`} onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="px-6 py-2 bg-[rgb(59,118,174)] text-white rounded-2xl" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
