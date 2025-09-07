import { motion } from 'framer-motion'
import { Code, Target, User } from 'lucide-react'

export const About = () => {
  const skills = [
    'JavaScript',  'React', 'Node.js',
    'HTML/CSS', 'Git/Github', 'MongoDB',  'REST APIs' , 'C++' , 'Competitive Programming'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="py-20 bg-accent/5"      
     style={{
        backgroundColor: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
      }}
>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
           I'm a Passionate computer science student specializing in web development with the MERN stack. I have a strong foundation in programming and am currently expanding my skills in C++ and data structures & algorithms, with a growing interest in cybersecurity. I enjoy building efficient, user-friendly applications and solving challenging problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Career Objective */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Career Objective</h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              To leverage my technical skills and passion for innovation in a dynamic software development role, where I can contribute to meaningful projects while continuously learning and growing in the field of technology.
            </p>
            
            <div className="bg-card border border-border rounded-lg p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-primary" />
                <h4 className="font-semibold">What drives me</h4>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Building solutions that make a real impact</li>
                <li>• Continuous learning and skill development</li>
                <li>• Collaborating with talented teams</li>
                <li>• Creating exceptional user experiences</li>
              </ul>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Skills</h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-3"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  className="bg-card border border-border rounded-lg p-3 text-center hover:bg-accent/50 transition-colors duration-200 hover:scale-105 transform"
                  data-testid={`skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  <span className="text-sm font-medium">{skill}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional info */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
              <h4 className="font-semibold mb-3 text-primary">Currently Learning</h4>
              <div className="flex flex-wrap gap-2">
                {['Data Structure & Algorithm', 'Cybersecurity','Automation'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    data-testid={`learning-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}