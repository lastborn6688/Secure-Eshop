import { motion } from "framer-motion";
import aboutHero from "../images/aboutHero.png";
import integrity from "../images/integrity.png";
import costumerfirst from "../images/costumer-First.png";
import inovation from "../images/inovation.png";
import Footer from "./Footer";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
      className="mt-0 bg-[rgb(3,16,20)] text-white min-h-screen flex flex-col"
    >
      {/* Hero Image */}
      <div className="w-full h-[50vh] md:h-[70vh] lg:h-[90vh]">
        <img
          src={aboutHero}
          alt="About Secure & J"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 md:p-12 lg:px-24 flex flex-col">
        {/* Who We Are */}
        <section className="mb-8 mt-5">
          <p className="text-base md:text-lg leading-relaxed text-gray-100">
            <span className="font-semibold">
              Secure & J IT Resources Limited
            </span>{" "}
            is a trusted provider of high-quality tech accessories, clean energy
            solutions, and IT resources. We are passionate about powering the
            future with reliable products while ensuring excellent customer
            service.
            <br />
            <br />
            Through partnerships with leading manufacturers and a dedicated
            team, we deliver innovative products such as fast chargers, durable
            power banks, solar devices, and IT tools that meet global standards.
            Our mission is simple — to keep people connected, productive, and
            empowered through technology they can trust.
          </p>
        </section>

        {/* Mission */}
        <section className="mb-8 flex flex-col w-full items-center text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
            Our Mission
          </h2>
          <p className="text-base md:text-lg text-gray-100 leading-relaxed max-w-3xl">
            To deliver innovative, secure, and affordable IT and energy
            solutions that improve the everyday lives of our customers and
            support the growth of businesses across Africa.
          </p>
        </section>

        {/* Values */}
        <section className="flex flex-col w-full items-center mb-8 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-6">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            <div className="p-4 bg-white/5 rounded-xl shadow-md">
              <h3 className="font-semibold">Integrity</h3>
              <p className="text-gray-300 text-sm">
                We are transparent and trustworthy in all our dealings.
              </p>
              <img src={integrity} alt="" />
            </div>
            <div className="p-4 bg-white/5 rounded-xl shadow-md">
              <h3 className="font-semibold">Customer-first</h3>
              <p className="text-gray-300 text-sm">
                We always put customer satisfaction above everything else.
              </p>
              <img src={costumerfirst} alt="" />
            </div>
            <div className="p-4 bg-white/5 rounded-xl shadow-md">
              <h3 className="font-semibold">Innovation</h3>
              <p className="text-gray-300 text-sm">
                We consistently seek smarter solutions and better products.
              </p>
              <img src={inovation} alt="" />
            </div>
            <div className="p-4 bg-white/5 rounded-xl shadow-md">
              <h3 className="font-semibold">Reliability</h3>
              <p className="text-gray-300 text-sm">
                We deliver what we promise, on time and every time.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="mb-8 flex flex-col items-center text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
            Our Story
          </h2>
          <p className="text-base md:text-lg text-gray-100 max-w-3xl">
            Secure & J IT Resources was founded out of a need to provide genuine
            gadgets and clean energy solutions in a market flooded with
            counterfeits. From our humble beginnings in Computer Village, Ikeja,
            we have grown into a brand trusted by thousands of customers across
            Nigeria. Our journey is fueled by passion, partnerships, and a drive
            to redefine customer experience in the IT industry.
          </p>
        </section>

        {/* Team */}
        <section className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
            Meet Our Team
          </h2>
          <p className="text-base md:text-lg text-gray-100 leading-relaxed max-w-3xl">
            Behind Secure & J is a team of dedicated professionals with deep
            experience in Marketing, customer service, and business management.
            Our people are our strength, working tirelessly to ensure you
            receive reliable products and world-class support.
          </p>
        </section>
      </div>

      <Footer />
    </motion.div>
  );
};

export default About;
