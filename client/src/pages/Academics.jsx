import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Award, BookOpen, FileQuestion, SquareCode } from 'lucide-react'

export const Academics = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'National Institute of Technology, Delhi',
      period: '2020 - 2024',
      grade: 'Grade: 8.5 CGPA',
      description: 'Focused on data structures, algorithms, object-oriented programming, and database management. Completed a capstone project on a web-based inventory system.',
      achievements: [
        'Dean\'s List for Academic Excellence',
        'Best Project Award for Final Year Capstone',
        'Active member of Computer Science Society'
      ]
    },
    {
      id: 2,
      degree: 'Higher Secondary Certificate (Science)',
      institution: 'Delhi Public School, R.K. Puram',
      period: '2018 - 2020',
      grade: 'Grade: 92%',
      description: 'Specialized in Physics, Chemistry, and Mathematics with Computer Science as an additional subject.',
      achievements: [
        'School Topper in Computer Science',
        'Regional Science Fair Winner',
        'Mathematics Olympiad Participant'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <section id="academics" className="py-20 bg-accent/5" 
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Consistently delivered results and exceeded expectations.
          </p>
        </motion.div>

     {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
           {education.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative"
            >
             
               {index < education.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-32 bg-border" />
              )}
              
              <div className="flex items-start space-x-6 mb-12">
             
               <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div> 

              
             <div className="flex-1 bg-card border border-border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2" data-testid={`degree-${item.id}`}>
                        {item.degree}
                      </h3>
                      <div className="flex items-center space-x-2 text-muted-foreground mb-1">
                        <BookOpen className="h-4 w-4" />
                        <span data-testid={`institution-${item.id}`}>{item.institution}</span>
                      </div>
                    </div> 
                    
                     <div className="flex flex-col lg:items-end space-y-2 mt-2 lg:mt-0">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span data-testid={`period-${item.id}`}>{item.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="font-semibold text-primary" data-testid={`grade-${item.id}`}>
                          {item.grade}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {item.description}
                  </p> 

                
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Achievements</h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start space-x-2 text-muted-foreground"
                          data-testid={`achievement-${item.id}-${achievementIndex}`}
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}  */
                    /* </ul>
                  </div>
                </div>
              </div>
            </motion.div> 
                    ))} 

        </motion.div>   */}

       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >

          <div className="bg-card border border-border rounded-lg p-6 text-center hover:bg-gray-700  hover:scale-101   ">
            <a href="https://www.codechef.com/users/sahillllllllll" target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <SquareCode className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">500 + </h3>
            <p className="text-muted-foreground text-sm"> Coding Questions On Codechef </p>
            </a>
          </div>
           <div className="bg-card border border-border rounded-lg p-6 text-center hover:bg-gray-700 hover:scale-101 ">
             <a href="https://leetcode.com/u/sahillllllllll/" target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <SquareCode className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2"> 60+ </h3>
            <p className="text-muted-foreground text-sm"> Coding Questions On  Leetcode</p>
            </a>
          </div>
           <div className="bg-card border border-border rounded-lg p-6 text-center hover:bg-gray-700 hover:scale-101 ">
        <a href="https://www.codechef.com/users/sahillllllllll" target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <SquareCode className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">1000+</h3>
            <p className="text-muted-foreground text-sm"> Rating on Codechef For Competitive Programming </p>
                </a>
          </div>
           <div className="bg-card border border-border rounded-lg p-6 text-center hover:bg-gray-700 hover:scale-101 ">
            <a href="https://i.ibb.co/fzqX3HMD/Screenshot-2025-08-03-233928.png" target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <SquareCode className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">1+ </h3>
            <p className="text-muted-foreground text-sm"> Participated In Hackathon</p>
            </a>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center hover:bg-gray-700 hover:scale-101 ">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">A+</h3>
            <p className="text-muted-foreground text-sm">Academic Performances</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center hover:bg-gray-700 hover:scale-101 ">
            <a href="https://linkmix.co/43350303" target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">Multiple</h3>
            <p className="text-muted-foreground text-sm">  Certifications & Recognitions</p>
            </a>
        </div>
        </motion.div>
      </div>
    </section>
  )
}