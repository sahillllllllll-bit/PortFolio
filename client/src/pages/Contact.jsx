import { motion } from 'framer-motion'
import { useState } from 'react'
import { toast } from "react-hot-toast";
import { Mail, MapPin, Github, Linkedin, Twitter, Send, Phone } from 'lucide-react'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
 

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }


const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("http://localhost:8080/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      toast.success("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("❌ Send failed. Please try again later.");
    }
  } catch (error) {
    console.error("Error:", error);
    toast.error("⚠️ Something went wrong. Try again later.");
  } finally {
    setIsSubmitting(false);
  }
};


  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'imaginesahill@gmail.com',
      href: 'mailto:imaginesahill@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bhopal, IND',
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'www.linkedin.com/in/sahil-ll',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/sahillllllllll-bit',
      color: 'hover:text-gray-600'
    },
    // {
    //   icon: Twitter,
    //   label: 'Twitter',
    //   href: 'https://twitter.com/sahil',
    //   color: 'hover:text-blue-400'
    // }
  ]

  return (
    <section id="contact" className="py-20"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Send me a message</h3>
              <p className="text-muted-foreground mb-6">
                Have a question or want to work together? Drop me a line and I'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                  placeholder="Your full name"
                  data-testid="input-name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                  placeholder="your.email@example.com"
                  data-testid="input-email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                  data-testid="input-message"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center border  justify-center space-x-2 px-6 py-3  bg-gradient-to-r from-blue-400 to-blue-800  text-primary rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                data-testid="button-send-message"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="h-5 w-5  " />
                    <span >Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect with me</h3>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-card border border-border rounded-lg"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          data-testid={`contact-${item.label.toLowerCase()}`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground" data-testid={`contact-${item.label.toLowerCase()}`}>
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">Social Media</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-card border border-border rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-lg ${social.color}`}
                    data-testid={`link-${social.label.toLowerCase()}`}
                    aria-label={`Visit ${social.label} profile`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h4 className="font-semibold mb-3 text-primary">Let's collaborate!</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm currently looking for new opportunities and interesting projects. 
                Whether you have a job opportunity, want to collaborate on a project, 
                or just want to say hello, I'd love to hear from you.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}