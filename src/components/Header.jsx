import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import './ProjectsButton.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <header className="fixed left-0 top-0 h-full bg-dark text-white shadow-md w-20 md:w-24">
      <motion.div 
        className="flex flex-col h-full items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Mobile menu button */}
        <motion.button 
          className="md:hidden p-2 mt-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          variants={itemVariants}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </motion.button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex flex-col items-center justify-center flex-grow space-y-12">
          {navItems.map((item) => (
            item.name === 'Home' ? (
              <motion.div key={item.name} variants={itemVariants}>
                <Link 
                  to={item.path} 
                  className="flex flex-col items-center text-white hover:text-primary transition-colors"
                >
                  <div className="house-icon mb-2"></div>
                  {item.name}
                </Link>
              </motion.div>
            ) : item.name === 'About' ? (
              <motion.div key={item.name} variants={itemVariants}>
                <Link 
                  to={item.path} 
                  className="flex flex-col items-center text-white hover:text-primary transition-colors"
                >
                  <div className="person-icon mb-2"></div>
                  {item.name}
                </Link>
              </motion.div>
            ) : item.name === 'Projects' ? (
              <motion.div key={item.name} variants={itemVariants}>
                <Link 
                  to={item.path} 
                  className="flex flex-col items-center text-white hover:text-primary transition-colors"
                >
                  <div className="book-stack-icon mb-2">
                    <span></span>
                  </div>
                  {item.name}
                </Link>
              </motion.div>
            ) : null
          ))}
        </nav>

        {/* Contact link at bottom */}
        <motion.div variants={itemVariants}>
          <Link 
            to="/contact" 
            className="hidden md:block text-white hover:text-primary transition-colors mb-8"
          >
            Contact
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-dark absolute top-20 left-0 w-48 shadow-lg">
          <ul className="py-2">
            {[...navItems, { name: 'Contact', path: '/contact' }].map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path} 
                  className={`block px-4 py-2 hover:text-primary transition-colors ${
                    location.pathname === item.path ? 'text-primary font-medium' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;