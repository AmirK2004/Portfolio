import { useMemo } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import './Home.css';
import PortfolioIMG from '../assets/PortfolioIMG.png';
import PrepMe from '../assets/PrepMe.png';
import RevioIMG from '../assets/RevioIMG.jpeg';

const Projects = () => {
  const projects = useMemo(() => [
    {
      id: 1,
      title: 'BackTrack (In-Progress)',
      description: 'A unique mobile app that lets users snap a photo of their receipt, detects return deadlines based on store policies, and sends reminders before expiration.',
      imageUrl: RevioIMG,
      technologies: ['React Native', 'Python', 'SQLite', 'Google Cloud Vision', 'Supabase']
    },
    {
      id: 2,
      title: 'PrepMaster',
      description: 'Web-based application that helps students prepare for exams by generating practice tests from study materials (PDF, txt).',
      imageUrl: PrepMe,
      technologies: ['Next.js', 'React', 'Node.js', 'Tailwind CSS', 'OpenAI API'],
      demoLink: 'https://prepmaster.io'
    },
    {
      id: 3,
      title: 'Guitar Chord Detection',
      description: 'Real-time guitar chord classifier using OpenCV to help beginners correct finger placement, a computer vision tool inspired by teaching experience.',
      imageUrl: 'https://i.ytimg.com/vi/HZyX2p4e_iI/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgTihEMA8=&rs=AOn4CLCbcaJSwSkfPzAj4g_HpgbWonQ5ag',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow'],
      codeLink: 'https://github.com/AmirK2004'
    },
    {
      id: 4,
      title: 'York University Parking System',
      description: '(GROUP PROJECT) Created a parking system tailored to York University’s campus, managing vehicle entry, slot assignment, and payment logic in Java Swing.',
      imageUrl: 'https://www.yorku.ca/yfile/wp-content/uploads/sites/889/2018/08/Lions-NEW-logo-FEATURED.jpg',
      technologies: ['Java', 'JUnit', 'Maven'],
      demoLink: 'https://www.youtube.com/watch?v=vG69lVxBHI8&ab_channel=AmirKallushi',
      codeLink: 'https://github.com/rohitdhall059/Parking-Management-App'
    },
    {
      id: 5,
      title: 'Personal Portfolio',
      description: 'A polished, responsive frontend built with React and Tailwind CSS, designed to cleanly present my work across all devices. Emphasizes simplicity, fast load times, and smooth user experience, with modular components that make it easy to update and scale as new projects are added.',
      imageUrl: PortfolioIMG,
      technologies: ['React.js', 'Tailwind CSS', 'CSS', 'JavaScript'],
      codeLink: 'https://github.com/AmirK2004/Portfolio'
    },
  ], []);

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
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          My Projects
        </motion.h1>
        
        <motion.div 
          className="mb-6 text-center max-w-2xl mx-auto"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <p>
            Here are some of the projects I've worked on. Each project represents different 
            skills and technologies I've used throughout my journey as a developer.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
