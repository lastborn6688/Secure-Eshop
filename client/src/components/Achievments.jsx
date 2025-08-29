import { motion } from "framer-motion";
import location from "../images/locations.png";
import trust from "../images/trust.png";
import supermarket from "../images/supermarket.png";

const Achievements = () => {
  return (
    <div className="min-h-[80%] flex flex-col items-center justify-center bg-[rgb(3,16,20)] text-gray-600 px-4 py-10">
      <motion.h1
        className="text-4xl text-gray-100 font-bold text-center my-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Achievements
      </motion.h1>

      <div className="flex w-[75%] flex-col md:flex-row">
        {/* Card 1 */}
        <motion.div
          className="flex-1 bg-white p-6 rounded-lg shadow-md m-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4">Trusted by Major Brands</h2>
          <p className="text-gray-600">
            We have partnered with leading brands to ensure quality and
            authenticity in every product.
          </p>
          <img src={trust} alt="trust" className="h-[120px] w-[150px]" />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="flex-1 bg-white p-6 rounded-lg shadow-md m-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4">Nationwide Reach</h2>
          <p className="text-gray-600">
            Our products are available in supermarkets across the country,
            making us a household name.
          </p>
          <img src={location} alt="nation wide" className="h-[40%] w-[50%]" />
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="flex-1 bg-white p-6 rounded-lg shadow-md m-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4">Channel Partner</h2>
          <p className="text-gray-600">
            We are an authorized distributor and reliable supplier, bridging
            reputable manufacturers with resellers through verified,
            high-quality products.
          </p>
          <img src={supermarket} alt="supermarket" className="h-[40%] w-[50%]" />
        </motion.div>
      </div>
    </div>
  );
};

export default Achievements;
