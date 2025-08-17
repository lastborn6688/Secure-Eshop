import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/Home';
import Brands from './components/Brands';
import Products from './components/Products';
import Joyroom from './assets/JoyroomPage';
import BavinPage from './assets/BavinPage';
import Ldnio from './assets/LdnioPage';
import Usams from './assets/UsamsPage';
import Wakome from './assets/WakomePage';
import Wiwu from './assets/WiwuPage';
import Oraimo from './assets/OraimoPage';
import Remax from './assets/RemaxPage';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Layout keeps Navbar visible everywhere */}
        <Route path="/" element={<Layout />}>
          {/* Main pages */}
          <Route index element={<Home />} />
          <Route path="brands" element={<Brands />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* Product brand pages */}
          <Route path="bavinProductPage" element={<BavinPage />} />
          <Route path="joyroomProductPage" element={<Joyroom />} />
          <Route path="ldnioProductPage" element={<Ldnio />} />
          <Route path="usamsProductPage" element={<Usams />} />
          <Route path="wakomeProductPage" element={<Wakome />} />
          <Route path="wiwuProductPage" element={<Wiwu />} />
          <Route path="oraimoProductPage" element={<Oraimo />} />
          <Route path="remaxProductPage" element={<Remax />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
