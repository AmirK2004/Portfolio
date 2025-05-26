import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../components/Button.css';
import thumbnailImage from '../assets/Photo.jpg';
import AnimatedText from '../components/AnimatedText';
import './Home.css';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="animated-dots-bg">
      <div className="container mx-auto px-4 h-screen flex items-center">
        <motion.div 
          className="flex flex-col md:flex-row items-center w-full max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="md:w-1/2 mb-10 md:mb-0 md:ml-16" variants={itemVariants}>
            <div className="font-bold mb-4">
              <AnimatedText text="Hi, I'm Amir." className="text-white" simpleFade={true} />
              <AnimatedText 
                text="Software Engineer" 
                className="text-primary mt-2" 
                size="text-2xl md:text-3xl lg:text-4xl"
                hoverColor="text-white"
                delay={0.6}
              />
            </div>
            <motion.p 
              className="text-lg mb-8 max-w-lg text-gray-300"
              variants={itemVariants}
            >
              Third-year Computer Science student at York University.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Link 
                to="/projects" 
                className="button"
              >
                View My Work
              </Link>
              <Link 
                to="/contact" 
                className="button"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            variants={itemVariants}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <img 
                src={thumbnailImage}
                alt="Profile" 
                className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;