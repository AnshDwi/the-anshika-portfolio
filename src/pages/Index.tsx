import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Code, Mail, Phone, MapPin, Star, Sparkles, Zap, Calendar } from 'lucide-react';
import Profile from '@/components/Profile';

const Index = () => {
  // Data for Education Timeline
  const educationData = [
    {
      degree: "B.Tech in Computer Engineering (Data Sciences)",
      institution: "RAIT, DY Patil University",
      duration: "2021 - 2025",
      cgpa: "8.7 CGPA",
    },
    {
      degree: "12th Grade",
      institution: "Jain International School",
      duration: "2019 - 2021",
      percentage: "86%",
    },
    {
      degree: "10th Grade",
      institution: "Saint Xavier’s High School",
      duration: "2017 - 2019",
      percentage: "85.6%",
    },
  ];

  // Data for Projects
  const projectsData = [
    {
      title: "Movie Research App",
      description: "A web application for researching movies using React, Tailwind CSS, and Styled Components.",
      technologies: ["React", "Tailwind CSS", "Styled Components"],
      link: "#",
    },
    {
      title: "Bibliotek - Academic Portal",
      description: "An academic portal built using the MERN stack (MongoDB, Express, React, Node.js).",
      technologies: ["MERN Stack"],
      link: "#",
    },
    {
      title: "Handwritten Digit Classification",
      description: "A CNN-based model for classifying handwritten digits, integrated with Flask.",
      technologies: ["CNN", "Flask"],
      link: "#",
    },
  ];

  // Data for Skills & Certifications
  const skillsData = [
    {
      category: "Languages",
      items: ["Java", "Python", "C", "HTML/CSS"],
    },
    {
      category: "Tools",
      items: ["SQL", "Power BI"],
    },
    {
      category: "Frameworks",
      items: ["Tailwind CSS"],
    },
    {
      category: "Technologies",
      items: ["CNN", "Machine Learning"],
    },
  ];

  // Data for Leadership & Volunteering
  const leadershipData = [
    {
      title: "Core Committee Member – Social Wing",
      description: "Actively participated in campus cleanliness drives and campaigns, helping 500+ people.",
    },
  ];

  // Data for Experience / Simulations
  const experienceData = [
    {
      title: "Software Engineering Simulation",
      company: "Forage",
      description: "Completed a software engineering simulation program.",
    },
    {
      title: "Power BI Job Simulation",
      company: "Forage",
      description: "Completed a Power BI job simulation program.",
    },
    {
      title: "Java (Silver), SQL (Bronze)",
      company: "HackerRank",
      description: "Achieved Silver badge in Java and Bronze badge in SQL.",
    },
  ];

  // Function to handle contact form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your form submission logic here
    alert("Form submitted!");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full blur-lg"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-400/25 to-purple-400/25 rounded-full blur-2xl"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-primary">
            Anshika Dwivedi
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#profile" className="hover:text-primary transition-colors duration-200">
              Profile
            </a>
            <a href="#about" className="hover:text-primary transition-colors duration-200">
              About
            </a>
            <a href="#education" className="hover:text-primary transition-colors duration-200">
              Education
            </a>
            <a href="#projects" className="hover:text-primary transition-colors duration-200">
              Projects
            </a>
            <a href="#skills" className="hover:text-primary transition-colors duration-200">
              Skills
            </a>
            <a href="#experience" className="hover:text-primary transition-colors duration-200">
              Experience
            </a>
            <a href="#contact" className="hover:text-primary transition-colors duration-200">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            {/* Add mobile menu icon here */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20 bg-gradient-to-br from-background via-purple-50/20 to-cyan-50/20 dark:from-background dark:via-purple-950/20 dark:to-cyan-950/20">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold text-primary mb-4"
          >
            Anshika Dwivedi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-muted-foreground mb-8"
          >
            Aspiring Software Developer | ML Enthusiast | Frontend & Full Stack Explorer
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-full">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <Profile />

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-cyan-50/30 via-background to-yellow-50/30 dark:from-cyan-950/20 dark:via-background dark:to-yellow-950/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary mb-6"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Final year B.Tech Computer Engineering (Data Sciences) student from Navi Mumbai, Maharashtra.
              Passionate about software development, machine learning, and exploring new technologies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">Hobbies</h3>
              <p className="text-lg text-muted-foreground">
                Travelling, Reading, Dancing
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-br from-background via-purple-50/20 to-cyan-50/20 dark:from-background dark:via-purple-950/20 dark:to-cyan-950/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary mb-8 text-center"
          >
            Education Timeline
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl shadow-md p-6 dark:bg-gray-800"
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.institution}</p>
                <p className="text-muted-foreground">{edu.duration}</p>
                {edu.cgpa && <p className="text-muted-foreground">{edu.cgpa}</p>}
                {edu.percentage && <p className="text-muted-foreground">{edu.percentage}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-yellow-50/30 via-background to-purple-50/30 dark:from-yellow-950/20 dark:via-background dark:to-purple-950/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary mb-8 text-center"
          >
            Projects
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl shadow-md p-6 dark:bg-gray-800"
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div>
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} className="mr-2 mb-2">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <a href={project.link} className="text-blue-500 hover:text-blue-700 underline">
                  Learn More
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-background via-cyan-50/20 to-yellow-50/20 dark:from-background dark:via-cyan-950/20 dark:to-yellow-950/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary mb-8 text-center"
          >
            Skills & Certifications
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl shadow-md p-6 dark:bg-gray-800"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">{skill.category}</h3>
                <ul>
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="mb-2 text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-purple-50/30 via-background to-cyan-50/30 dark:from-purple-950/20 dark:via-background dark:to-cyan-950/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary mb-8 text-center"
          >
            Experience & Simulations
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl shadow-md p-6 dark:bg-gray-800"
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h3>
                <p className="text-muted-foreground">{exp.company}</p>
                <p className="text-muted-foreground">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-background via-yellow-50/20 to-purple-50/20 dark:from-background dark:via-yellow-950/20 dark:to-purple-950/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary mb-8 text-center"
          >
            Contact Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Name
                </label>
                <Input type="text" id="name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email
                </label>
                <Input type="email" id="email" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea id="message" rows={4} required />
              </div>
              <div>
                <Button type="submit" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-full">
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <p>&copy; {new Date().getFullYear()} Anshika Dwivedi. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary transition-colors duration-200">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200">
              <Code className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
