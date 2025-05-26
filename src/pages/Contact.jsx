import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Home.css';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('76wgfo--UIDxp714qY');
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      // Create template parameters object
      const templateParams = {
        from_name: form.from_name,
        from_email: form.from_email,
        subject: form.subject,
        message: form.message,
      };

      console.log('Sending template params:', templateParams);

      const result = await emailjs.send(
        'service_9xtg1xg',
        'template_rb2fk3f',
        templateParams,
        '76wgfo--UIDxp714qY'
      );

      console.log('EmailJS result:', result);
      
      if (result.status === 200) {
        setSubmitStatus('success');
        setForm({
          from_name: '',
          from_email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error(`Failed to send email: ${result.text}`);
      }
    } catch (error) {
      console.error('Detailed error:', error);
      setErrorMessage(error.message || 'Failed to send message. Please try again.');
      setSubmitStatus('error');
    } finally {
      setLoading(false);
    }
  };

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
          Contact Me
        </motion.h1>
        
        <motion.div 
          className="max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p 
            className="text-center mb-8 text-gray-300"
            variants={itemVariants}
          >
            Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </motion.p>
          
          {submitStatus === 'success' && (
            <motion.div 
              className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Thank you for your message! I'll get back to you soon.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div 
              className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errorMessage || 'Oops! Something went wrong. Please try again later.'}
            </motion.div>
          )}
          
          <motion.form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={itemVariants}
          >
            <div>
              <label htmlFor="from_name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-black/30 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="from_email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={form.from_email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-black/30 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-black/30 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="What's this about?"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-2 rounded-lg bg-black/30 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              disabled={loading}
              className={`w-full bg-primary text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${
                loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90'
              }`}
              whileHover={!loading ? { scale: 1.02 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
          
          <motion.div 
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <h2 className="text-xl font-bold mb-4 text-white">Other Ways to Reach Me</h2>
            <div className="flex justify-center space-x-6">
              <a 
                href="mailto:amir.kallushi@outlook.com"
                className="text-gray-300 hover:text-primary transition-colors duration-200"
              >
                amir.kallushi@outlook.com
              </a>
              <a 
                href="https://linkedin.com/in/amirkallushi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/AmirK2004"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;