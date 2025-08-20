import { motion } from 'framer-motion';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

// Brand Images
import bavin from "../images/bavin.png";
import joyroom from "../images/joyroom.webp";
import ldnio from "../images/ldnio.png";
import oraimo from "../images/oraimo.png";
import remax from "../images/remax.webp";
import usams from "../images/usams.webp";
import wiwu from "../images/wiwu.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [brandsOpen, setBrandsOpen] = React.useState(false);
  const navigate = useNavigate();

  const goToSection = (id) => {
    navigate("/");
    setTimeout(() => {
      const section = document.querySelector(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    setMenuOpen(false);
  };

  const brandLinks = [
    { name: "Bavin", path: "/bavinProductPage", img: bavin },
    { name: "Joyroom", path: "/joyroomProductPage", img: joyroom },
    { name: "LDNIO", path: "/ldnioProductPage", img: ldnio },
    { name: "Oraimo", path: "/oraimoProductPage", img: oraimo },
    { name: "Remax", path: "/remaxProductPage", img: remax },
    { name: "Usams", path: "/usamsProductPage", img: usams },
    { name: "Wiwu", path: "/wiwuProductPage", img: wiwu }
  ];

  return (
    <motion.div
      id="brands"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col items-center justify-center bg-[hsl(210,23%,88%)] py-10 overflow-hidden"
    >
      
      {/* Logo */}
      <div className="h-full flex justify-center items-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?q=80&w=735&auto=format&fit=crop"
          alt="Logo"
          className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 object-cover rounded-full"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-gray-500 text-lg font-medium relative">
        <Link to="/" className="hover:text-blue-600">Home</Link>

        {/* Brands with hover dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setBrandsOpen(true)}
          onMouseLeave={() => setBrandsOpen(false)}
        >
          <button className="hover:text-blue-600">Brands</button>
          {brandsOpen && (
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-md w-56 z-50 py-2">
              {brandLinks.map((brand, idx) => (
                <Link
                  key={idx}
                  to={brand.path}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  <img src={brand.img} alt={brand.name} className="w-6 h-6 object-contain" />
                  {brand.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <button onClick={() => goToSection("#products")} className="hover:text-blue-600">Product</button>
        <button onClick={() => goToSection("#clients")} className="hover:text-blue-600">Clients</button>
        <Link to="/about" className="hover:text-blue-600">About</Link>
      </div>

      {/* Contact Button (Desktop) */}
      <div className="hidden md:flex items-center">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        {menuOpen ? (
          <FaTimes size={28} onClick={() => setMenuOpen(false)} />
        ) : (
          <FaBars size={28} onClick={() => setMenuOpen(true)} />
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-8 z-50">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

          {/* Brands in mobile view */}
          <div>
            <p className="font-semibold mb-2">Brands</p>
            <div className="flex flex-col gap-2">
              {brandLinks.map((brand, idx) => (
                <Link
                  key={idx}
                  to={brand.path}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 text-blue-600"
                >
                  <img src={brand.img} alt={brand.name} className="w-6 h-6 object-contain" />
                  {brand.name}
                </Link>
              ))}
            </div>
          </div>

          <button onClick={() => goToSection("#products")}>Product</button>
          <button onClick={() => goToSection("#clients")}>Clients</button>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Contact Us
          </button>
        </div>
      )}
  </motion.div>
  );
};

export default Navbar;
