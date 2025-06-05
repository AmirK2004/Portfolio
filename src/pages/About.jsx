import { motion } from 'framer-motion';
import './Home.css';
import Photo from '../assets/Photo.jpg';

const About = () => {
    const skills = [
      { category: 'Languages', items: ['Java', 'Python', 'SQL', 'C/C++', 'JavaScript'] },
      { category: 'Frameworks & Libraries', items: ['React', 'Node.js', 'Express.js', 'Spring Boot'] },
      { category: 'Tools & Technologies', items: ['Git', 'VS Code', 'IntelliJ', 'MongoDB', 'MySQL'] },
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
          duration: 0.6
        }
      }
    };
  
    return (
      <div className="animated-dots-bg">
        <div className="container mx-auto px-4 py-12">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-8 text-center text-white"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            About Me
          </motion.h1>
          
          <motion.div 
            className="flex flex-col md:flex-row gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="md:w-1/3 flex justify-center" variants={itemVariants}>
              <div className="w-64 h-64 rounded-lg overflow-hidden border-2 border-primary">
                <img 
                  src={Photo} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div className="md:w-2/3" variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4 text-white">Who I Am</h2>
              <p className="mb-4 text-gray-300">
                I’m a Computer Science student based in Toronto with a passion for building clean, 
                practical tools. Whether it’s a full-stack app to solve a real problem or a quick script 
                to make life easier. Outside of coding, I teach guitar, run youth programs, and explore 
                creative projects that blend tech with my passions. I'm currently looking for opportunities 
                where I can sharpen my skills, contribute meaningfully, and grow alongside a team that 
                values curiosity, initiative, and real-world impact.
              </p>
              
              <h2 className="text-2xl font-bold mb-4 text-white">My Skills</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {skills.map((skillGroup) => (
                  <motion.div 
                    key={skillGroup.category} 
                    className="bg-black/30 p-4 rounded-lg shadow border border-white/20"
                    variants={itemVariants}
                  >
                    <h3 className="font-bold mb-2 text-primary">{skillGroup.category}</h3>
                    <ul>
                      {skillGroup.items.map((skill) => (
                        <li key={skill} className="mb-1 flex items-center text-gray-300">
                          <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          
        </div>
      </div>
    );
  };
  
  export default About;
