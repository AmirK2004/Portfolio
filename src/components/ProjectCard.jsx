import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, imageUrl, technologies, demoLink, codeLink }) => {
    return (
      <motion.div 
        className="bg-black/30 rounded-lg shadow-md overflow-hidden border border-white/20"
        whileHover={{ 
          y: -5,
          transition: { duration: 0.2 }
        }}
      >
        <div className="w-full h-48 relative">
          <img 
            src={imageUrl || '/api/placeholder/400/250'} 
            alt={title} 
            className="w-full h-full object-cover"
            loading="lazy"
            width="400"
            height="250"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
          <p className="text-gray-300 text-sm mb-4 line-clamp-3">{description}</p>
          
          <div className="flex flex-wrap gap-1.5 mb-4">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="bg-white/10 text-white rounded-full px-2 py-0.5 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-2">
            {demoLink && (
              <a 
                href={demoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary text-white px-3 py-1.5 rounded text-sm hover:bg-blue-600 transition-colors"
              >
                View Project
              </a>
            )}
            {codeLink && (
              <a 
                href={codeLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 text-white px-3 py-1.5 rounded text-sm hover:bg-white/20 transition-colors"
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    );
  };
  
  export default ProjectCard;
