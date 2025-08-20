import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
      className='mt-0 p-6 bg-[rgb(217,224,231)] h-screen '
    >
        <h1 className='text-3xl font-bold text-left'>About SECURE& J IT RESOURCES </h1>
        <div>
          <p className='text-xl font-semibold text-left'>Secure & J IT Resources Limited is growing a measurably successful business through partnerships and the
          provision of innovative products and services. Our strategic partnership with major phone accessories
          manufacturers and clean energy providers, coupled with a highly skilled and motivated workforce, allows us to
          provide holistic products and customer service experience.
          </p>
          <img src="" alt="" />
        </div>
    </motion.div>
  )
}

export default About
