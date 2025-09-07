import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Eye } from 'lucide-react'

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Awara-travels -- Airbnb Clone',
      description: 'Developed a full-featured Airbnb clone with capabilities including user signup and login, profile management, property listing creation and management (with images, pricing, amenities, and availability), search and filter by location, dates, and price, booking system with history and upcoming trips, reviews and ratings, real-time availability updates, secure session handling, and a responsive, user-friendly interface for both hosts and guests.',
      image: 'https://i.ibb.co/DH8yVVpd/Screenshot-2025-09-06-182454.png',
      technologies: [ 'Node.js', 'Express', 'MongoDB', 'CSS','EJS'],
      liveDemo: 'https://awara-travels.onrender.com/listings#',
      github: 'https://github.com/sahillllllllll-bit/wanderlust-remake.git',
      featured: true
    },
    {
      id: 2,
      title: 'Social Media Web - STRYM',
      description: 'Developing Strym, a social media and streaming platform featuring user signup/login, profile management, live streaming, video uploads, content discovery, and social interactions like likes, comments, and follows. Integrated Strym AI for personalized content recommendations, automated highlights, smart tagging, and AI-powered chat assistance, providing users with an engaging and intelligent streaming experience.',
      image: 'https://i.ibb.co/qMnjWXRK/Screenshot-2025-09-06-183410.png',
      technologies: ['React','Node.js', 'Express','Tailwind/css','Mongodb','Clerk'],
      liveDemo: '#',
      github: 'https://github.com/sahillllllllll-bit/STRYM.git',
      featured: true
    },
    // {
    //   id: 3,
    //   title: 'STRYM-AI ',
    //   description: 'An interactive weather dashboard that fetches real-time weather data using OpenWeather API. Displays current weather conditions, temperature, humidity, and 5-day forecast for any city.',
    //   image: '/api/placeholder/400/250',
    //   technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    //   liveDemo: '#',
    //   github: '#',
    //   featured: false
    // }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="projects" className="py-20" 
       style={{
        backgroundColor: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
      }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in various technologies and frameworks.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              data-testid={`card-project-${project.id}`}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-blue-500/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/20">
                    {/* {project.title.split(' ').map(word => word[0]).join('')} */}
                    <img src={project.image} alt="" className='object-cover' />
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveDemo}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                    data-testid={`button-demo-${project.id}`}
                    aria-label="View live demo"
                  >
                    <Eye className="h-5 w-5 text-white" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                    data-testid={`button-code-${project.id}`}
                    aria-label="View source code"
                  >
                    <Code className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs font-medium"
                      data-testid={`tech-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <a
                    href={project.liveDemo}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
                    data-testid={`link-demo-${project.id}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-accent transition-colors duration-200"
                    data-testid={`link-github-${project.id}`}
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <a
            href="https://github.com/sahillllllllll-bit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-card border border-border rounded-lg font-medium hover:bg-accent transition-colors duration-200"
            data-testid="link-view-all-projects"
          >
            <Github className="h-5 w-5" />
            <span>View All Projects</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}