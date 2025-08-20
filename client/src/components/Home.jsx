import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'



const Home = () => {
  return (
    <motion.div 
      id="home"
      className='bg-[rgb(59,118,174)] h-[100vh] lg:h-[100vh] w-full flex items-center flex-col'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Navbar />
      <div className='w-[80vw] mt-none lg:pt-20 flex flex-col md:flex-row lg:[80vh] lg:flex lg:flex-row justify-center items-center lg:gap-10 gap:5 lg:p-8 p-2 rounded-xl lg:mt-10 mx-auto'>
        <motion.div
          className="lg:w-[55%] lg:ml-20 mt-3 lg:mt-0"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
        >
          <img 
            className='object-cover h-[50vh] rounded-xl' 
            src="https://plus.unsplash.com/premium_photo-1666739388750-735b21d11a4f?q=80&w=1353&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="" 
          />
        </motion.div>
        <motion.div
          className='flex-col flex items-center justify-center lg:w-[55%]'
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <h1 className='text-white text-4xl font-bold mt-5'>
            Welcome to Secure Shop
          </h1>
          <p className='text-white text-lg mt-4 gap-4 flex b'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, provident
            placeat nobis doloremque soluta tempora alias eum eos. Ut accusamus excepturi,
            harum illum id laborum ducimus earum necessitatibus sed ad maiores eveniet quo
            porro doloremque natus temporibus provident, dolor consectetur! Inventore,
            cumque praesentium ratione dolor perferendis nesciunt ullam veniam doloremque!
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Home
