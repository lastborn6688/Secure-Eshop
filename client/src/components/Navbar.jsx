import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../images/Logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  // Detect scroll for background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`h-16 lg:h-20 w-full flex items-center fixed top-0 left-0 z-50 justify-between px-4 sm:px-6 md:px-12 lg:px-20 transition-colors duration-500 ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-16 w-16 lg:h-20 lg:w-20 rounded-full object-contain"
        />
      </div>

      {/* Desktop Links */}
      <div
        className={`hidden md:flex gap-6 text-base lg:text-lg font-medium relative items-center ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        <Link
          to="/"
          className={`hover:underline ${
            location.pathname === "/" ? "text-[rgb(59,118,174)] font-bold" : ""
          }`}
        >
          Home
        </Link>

        {/* Brands Dropdown - Desktop */}
        <div
          className="relative"
          onMouseEnter={() => setBrandsOpen(true)}
          onMouseLeave={() => setBrandsOpen(false)}
        >
          <button
            className={`hover:underline ${
              location.pathname.includes("ProductPage")
                ? "text-[rgb(59,118,174)] font-bold"
                : ""
            } flex items-center`}
          >
            Brands
            <span className="p-1">▼</span>
          </button>
          {brandsOpen && (
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 lg:w-56 z-50">
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

        {/* Catalogue Dropdown - Desktop */}
        <div
          className="relative"
          onMouseEnter={() => setProjectsOpen(true)}
          onMouseLeave={() => setProjectsOpen(false)}
        >
          <button
            className={`hover:underline ${
              location.pathname.includes("Beautifiers") ||
              location.pathname.includes("Carchagers") ||
              location.pathname.includes("Chargers") ||
              location.pathname.includes("Powerbank") ||
              location.pathname.includes("PowerStation") ||
              location.pathname.includes("Stands")
                ? "text-[rgb(59,118,174)] font-bold"
                : ""
            } flex items-center`}
          >
            Catalogue
            <span className="p-1">▼</span>
          </button>
          {projectsOpen && (
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 lg:w-56 z-50">
              <Link to="/Chargers" className="block px-4 py-2 hover:bg-gray-100 text-black">Chargers</Link>
              <Link to="/Cables" className="block px-4 py-2 hover:bg-gray-100 text-black">Cables</Link>
              <Link to="/Earbuds" className="block px-4 py-2 hover:bg-gray-100 text-black">Earbuds/Ear piece</Link>
              <Link to="/Headset" className="block px-4 py-2 hover:bg-gray-100 text-black">Headsets</Link>
              <Link to="/Powerbank" className="block px-4 py-2 hover:bg-gray-100 text-black">Power bank</Link>
              <Link to="/PowerStation" className="block px-4 py-2 hover:bg-gray-100 text-black">Power Station</Link>
              <Link to="/Carchagers" className="block px-4 py-2 hover:bg-gray-100 text-black">Car chargers</Link>
              <Link to="/Beautifiers" className="block px-4 py-2 hover:bg-gray-100 text-black text-[15px]">Pouch / Keyholder / Charm</Link>
              <Link to="/Stands" className="block px-4 py-2 hover:bg-gray-100 text-black">Stands</Link>
              <Link to="/Bags" className="block px-4 py-2 hover:bg-gray-100 text-black">Laptop Bags</Link>
            </div>
          )}
        </div>

        <Link to="/clients" className={`hover:underline ${location.pathname === "/clients" ? "text-[rgb(59,118,174)] font-bold" : ""}`}>Clients</Link>
        <Link to="/about" className={`hover:underline ${location.pathname === "/about" ? "text-[rgb(59,118,174)] font-bold" : ""}`}>About</Link>
      </div>

      {/* Contact (Desktop) */}
      <div className="hidden md:flex">
        <Link
          to="/contact"
          className={`px-5 py-2 rounded-xl text-sm lg:text-base transition-colors ${
            scrolled
              ? "bg-[rgb(59,118,174)] text-white hover:bg-[rgb(72,117,160)]"
              : "bg-white text-[rgb(59,118,174)] hover:bg-gray-200"
          }`}
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        {menuOpen ? (
          <FaTimes
            size={24}
            className={`cursor-pointer ${scrolled ? "text-[rgb(59,118,174)]" : "text-white"}`}
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <FaBars
            size={24}
            className={`cursor-pointer ${scrolled ? "text-[rgb(59,118,174)]" : "text-white"}`}
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-6 z-50 text-black text-base">
          <Link to="/" className={`${location.pathname === "/" ? "text-[rgb(59,118,174)] font-bold" : ""}`} onClick={() => setMenuOpen(false)}>Home</Link>

          {/* Mobile Brands */}
          <div className="flex flex-col items-center">
            <button
              className="font-semibold"
              onClick={() => setMobileBrandsOpen(!mobileBrandsOpen)}
            >
              Brands {mobileBrandsOpen ? "▲" : "▼"}
            </button>
            {mobileBrandsOpen && (
              <div className="flex flex-col gap-2 mt-2 text-center">
                <Link to="/bavinProductPage" onClick={() => setMenuOpen(false)}>Bavin</Link>
                <Link to="/joyroomProductPage" onClick={() => setMenuOpen(false)}>Joyroom</Link>
                <Link to="/ldnioProductPage" onClick={() => setMenuOpen(false)}>Ldnio</Link>
                <Link to="/oraimoProductPage" onClick={() => setMenuOpen(false)}>Oraimo</Link>
                <Link to="/remaxProductPage" onClick={() => setMenuOpen(false)}>Remax</Link>
                <Link to="/usamsProductPage" onClick={() => setMenuOpen(false)}>Usams</Link>
                <Link to="/wiwuProductPage" onClick={() => setMenuOpen(false)}>Wiwu</Link>
              </div>
            )}
          </div>

          {/* Mobile Catalogue */}
          <div className="flex flex-col items-center">
            <button
              className="font-semibold"
              onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
            >
              Catalogue {mobileProjectsOpen ? "▲" : "▼"}
            </button>
            {mobileProjectsOpen && (
              <div className="flex flex-col gap-2 mt-2 text-center">
                <Link to="/Chargers" onClick={() => setMenuOpen(false)}>Chargers</Link>
                <Link to="/Cables" onClick={() => setMenuOpen(false)}>Cables</Link>
                <Link to="/Earbuds" onClick={() => setMenuOpen(false)}>Earbuds</Link>
                <Link to="/Headset" onClick={() => setMenuOpen(false)}>Headset</Link>
                <Link to="/Powerbank" onClick={() => setMenuOpen(false)}>Powerbank</Link>
                <Link to="/PowerStation" onClick={() => setMenuOpen(false)}>PowerStation</Link>
                <Link to="/Carchagers" onClick={() => setMenuOpen(false)}>Carchagers</Link>
                <Link to="/Beautifiers" onClick={() => setMenuOpen(false)}>Beautifiers</Link>
                <Link to="/Stands" onClick={() => setMenuOpen(false)}>Stands</Link>
                <Link to="/Bags" onClick={() => setMenuOpen(false)}>Laptop Bags</Link>
              </div>
            )}
          </div>

          <Link to="/clients" onClick={() => setMenuOpen(false)}>Clients</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="px-5 py-2 bg-[rgb(59,118,174)] text-white rounded-xl mt-2" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
