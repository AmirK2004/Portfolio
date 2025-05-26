// README.md
# Personal Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS.

## Features

- Responsive design for mobile and desktop
- Multiple pages with React Router navigation
- Tailwind CSS for styling
- Contact form
- Project showcase

## Setup Instructions

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone this repository
   ```
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```
   The site will be available at http://localhost:3000

### Building for Production

To create a production build:
```
npm run build
```

The build files will be generated in the `build` directory.

## Project Structure

- `public/` - Static files like index.html and favicon
- `src/` - Source code
  - `assets/` - Images and other static assets
  - `components/` - Reusable React components
  - `pages/` - Page components for each route
  - `App.js` - Main application component
  - `index.js` - Entry point

## Customization

1. Update personal information in the components
2. Replace placeholder images with your own
3. Add your own projects to the Projects page
4. Customize colors in tailwind.config.js

## Deployment

This project can be deployed to various platforms:

- Netlify
- Vercel
- GitHub Pages
- AWS Amplify
- Firebase Hosting

Follow the documentation of your preferred hosting platform for deployment instructions.

## License

MIT