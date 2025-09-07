import { motion } from 'framer-motion'
import { Scene3D } from '../components/Scene3D'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import RobotFace from '../components/RobotFace'
import CarModel from '../components/CarModel'
import Spline from "@splinetool/react-spline";



export const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundColor: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
      }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      <div className="container mx-auto px-6 sm:px-10 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            <span className="text-primary bg-gradient-to-r from-blue-100 to-blue-400 bg-clip-text text-transparent">
              Hi, I'm Sahil Singh
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-[hsl(var(--muted-foreground))] font-medium"
          >
            Aspiring Software Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-lg leading-relaxed mx-auto lg:mx-0"
          >
            Passionate about building secure and  amazing user experiences with modern technologies .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-primary  rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"

              style={{
                backgroundColor: "hsl(var(--background))",
                color: "hsl(var(--foreground))",
              }}>
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-gray-300 bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-600 hover:from-indigo-600 hover:to-blue-800 rounded-lg font-medium hover:bg-accent  transition-colors duration-200"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center lg:justify-start gap-4 pt-4 flex-wrap  "
          >
            {[{
              href: "https://github.com",
              icon: <Github className="h-5 w-5" />,
              label: "GitHub Profile"
            }, {
              href: "https://linkedin.com",
              icon: <Linkedin className="h-5 w-5" />,
              label: "LinkedIn Profile"
            }, {
              href: "mailto:alex.johnson@email.com",
              icon: <Mail className="h-5 w-5" />,
              label: "Send Email"
            }].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[hsl(var(--border))] hover:bg-accent transition-colors duration-200 hover:from-indigo-600 hover:to-blue-800"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right content - 3D Scene */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="h-100% sm:h-80 md:h-96 lg:h-[500px]  w-full relative top-4 "
        >
          {/* <div style={{ width: "100%", height: "500px"  }}>
            <Spline scene="https://prod.spline.design/ZRj1g2asi8DHsJlJ/scene.splinecode" />
          </div>
          <Scene3D /> */}

          <div style={{ position: "relative", width: "100%", height: "500px" }}>
          

            {/* Overlayed Spline 3D */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
             
            }}>
              <Spline scene="https://prod.spline.design/jVknhhU9J3KznhcL/scene.splinecode" />
            </div>
          </div>
          {/* <RobotFace/> */}
          {/* <TechStack3DWithErrorBoundary layout="horizontal"/> */}
          {/* <CarModel/> */}

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center space-y-2 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors duration-200"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
          <span className="text-sm">Scroll down</span>
        </button>
      </motion.div>
    </section>
  )
}
