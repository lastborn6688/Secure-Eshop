import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import hero from "../images/hero image.png";
import Join from "../components/Join";

const Home = () => {
  return (
    <div>
      <motion.div
        id="home"
        className="bg-[ur] h-[100vh] lg:h-[100vh] w-full flex items-center flex-col"
        style={{ backgroundImage: `url(${hero})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Navbar />
        <div className="w-[80vw] mt-none lg:pt-20 flex flex-col md:flex-row lg:h-[80vh] justify-end items-center lg:gap-10 gap-5 lg:p-8 p-2 rounded-xl lg:mt-10 mx-auto">
          <motion.div
            className="flex-col flex items-center justify-center lg:w-[70%]"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <h1
              className="text-white text-5xl bg-clip-text font-semibold mt-5 text-center lg:text-left"
              style={{ fontFamily: "Libertinus Sans, sans-serif" }}
            >
              More than accessories—Secure & J delivers trust, innovation, and
              lasting value
            </h1>
            <p className="text-gray-400 text-2xl bg-gradient-to-l  font-medium mt-5 text-center lg:text-left">
              Stay charged, connected, and stress-free. Whether it’s fast and
              durable chargers, power banks, solar gear, consoles, or
              headphones—we’ve got the right tools to keep your gadgets working
              for you
            </p>
            {/* <button style={{ fontFamily: "Libertinus Sans, sans-serif" }} className="bg-[rgb(72,117,160)] h-10 w-[200px] mt-5 rounded-xl text-2xl font-bold">Reach Us</button> */}
          </motion.div>
        </div>
      </motion.div>
      <Join />
    </div>
  );
};

export default Home;
