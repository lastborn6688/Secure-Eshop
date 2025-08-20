import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Brands from "./components/Brands";
import Joyroom from "./pages/JoyroomPage";
import BavinPage from "./pages/BavinPage";
import Ldnio from "./pages/LdnioPage";
import Usams from "./pages/UsamsPage";
import Wakome from "./pages/WakomePage";
import Wiwu from "./pages/WiwuPage";
import Oraimo from "./pages/OraimoPage";
import Remax from "./pages/RemaxPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Beautifiers from "./pages/Beautifiers";
import Carchagers from "./pages/Carchagers";
import Chargers from "./pages/Chargers";
import Powerbank from "./pages/Powerbank";
import PowerStation from "./pages/PowerStation";
import Stands from "./pages/Stands";
import Headset from "./pages/Headset";
import Earbuds from "./pages/Earbuds";
import Cables from "./pages/Cables";
import AdminLogin from "./pages/AdminLogin";
import Client from "./components/Client";

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  // 🔑 check localStorage on first load
  useEffect(() => {
    const savedAdmin = localStorage.getItem("isAdmin");
    if (savedAdmin === "true") {
      setIsAdmin(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="brands" element={<Brands />} />
          <Route path="about" element={<About />} />
          <Route path="clients" element={<Client />} />
          <Route path="contact" element={<Contact />} />

          {/* Product brand pages */}
          <Route
            path="bavinProductPage"
            element={<BavinPage isAdmin={isAdmin} />}
          />
          <Route path="joyroomProductPage" element={<Joyroom isAdmin={isAdmin}/>} />
          <Route path="ldnioProductPage" element={<Ldnio isAdmin={isAdmin}/>} />
          <Route path="usamsProductPage" element={<Usams isAdmin={isAdmin}/>} />
          <Route path="wakomeProductPage" element={<Wakome isAdmin={isAdmin}/>} />
          <Route path="wiwuProductPage" element={<Wiwu isAdmin={isAdmin}/>} />
          <Route path="oraimoProductPage" element={<Oraimo isAdmin={isAdmin}/>} />
          <Route path="remaxProductPage" element={<Remax isAdmin={isAdmin}/>} />

          {/* Other categories */}
          <Route path="beautifiers" element={<Beautifiers isAdmin={isAdmin}/>} />
          <Route path="carchagers" element={<Carchagers isAdmin={isAdmin}/>} />
          <Route path="chargers" element={<Chargers isAdmin={isAdmin}/>} />
          <Route path="powerbank" element={<Powerbank isAdmin={isAdmin}/>} />
          <Route path="powerStation" element={<PowerStation isAdmin={isAdmin}/>} />
          <Route path="stands" element={<Stands isAdmin={isAdmin}/>} />
          <Route path="headset" element={<Headset isAdmin={isAdmin}/>} />
          <Route path="earbuds" element={<Earbuds isAdmin={isAdmin}/>} />
          <Route path="cables" element={<Cables isAdmin={isAdmin}/>} />
        </Route>

        {/* Login route */}
        <Route path="/admin" element={<AdminLogin setIsAdmin={setIsAdmin} />} />
      </Routes>
    </Router>
  );
};

export default App;
