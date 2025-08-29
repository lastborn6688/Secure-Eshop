import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import hero from "../images/hero.jpg";
import Join from "../components/Join";
import Associates from "./Associates";
import Vists from "./Vists";
import Achievments from "./Achievments";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <motion.div
        id="home"
        className="h-screen w-full flex flex-col"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Navbar />

        {/* Hero Content */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 lg:pt-20 flex-grow gap-8">
          {/* Text */}
          <motion.div
            className="flex flex-col items-center md:items-start lg:w-2/3"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <h1 className="text-[rgb(83,164,240)] text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
              More than accessories <br />
              Secure & J delivers trust, innovation, and lasting value
            </h1>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl font-medium mt-4 max-w-2xl">
              Stay charged, connected, and stress-free. Whether it’s fast and
              durable chargers, power banks, solar gear, consoles, or
              headphones—we’ve got the right tools to keep your gadgets working
              for you.
            </p>

            {/* Optional Button */}
            {/* 
            <button className="bg-[rgb(72,117,160)] px-6 py-2 mt-6 rounded-xl text-lg font-bold text-white">
              Reach Us
            </button> 
            */}
          </motion.div>
        </div>
      </motion.div>

      {/* Join Section */}
      <Join />
      <Associates />
      <Vists />
      <Achievments />
      <Footer />
    </div>
  );
};

export default Home;
