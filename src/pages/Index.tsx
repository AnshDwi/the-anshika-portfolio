import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Code, Mail, Phone, MapPin, Star, Sparkles, Zap, Calendar, Download, Sun, Moon, Palette } from 'lucide-react';
import Profile from '@/components/Profile';
import { useState } from 'react';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('aurora');

  const themes = {
    aurora: 'from-purple-600 via-pink-500 to-cyan-400',
    ocean: 'from-blue-600 via-teal-500 to-emerald-400',
    sunset: 'from-orange-500 via-red-500 to-yellow-400'
  };

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
      institution: "Saint Xavier's High School",
      duration: "2017 - 2019",
      percentage: "85.6%",
    },
  ];

  // Data for Projects
  const projectsData = [
    {
      title: "Movie Research App",
      description: "A web application for researching movies using React, Tailwind CSS, and Styled Components with genre, director, and actor search.",
      technologies: ["React", "Tailwind CSS", "Styled Components", "React Router"],
      link: "#",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Bibliotek - Academic Portal",
      description: "An academic portal built using the MERN stack with scalable architecture for student management.",
      technologies: ["MERN Stack", "MongoDB", "Express", "Node.js"],
      link: "#",
      gradient: "from-blue-500 to-teal-500",
    },
    {
      title: "Handwritten Digit Classification",
      description: "A CNN-based model for classifying handwritten digits with real-time recognition, integrated with Flask.",
      technologies: ["CNN", "Flask", "Python", "Machine Learning"],
      link: "#",
      gradient: "from-emerald-500 to-cyan-500",
    },
  ];

  // Data for Skills & Certifications
  const skillsData = [
    {
      category: "Languages",
      items: ["Java", "Python", "C", "HTML/CSS"],
      color: "from-red-500 to-orange-500",
      icon: Code,
    },
    {
      category: "Tools",
      items: ["SQL", "Power BI"],
      color: "from-blue-500 to-purple-500",
      icon: Zap,
    },
    {
      category: "Frameworks",
      items: ["React", "Tailwind CSS", "Flask"],
      color: "from-green-500 to-teal-500",
      icon: Star,
    },
    {
      category: "Technologies",
      items: ["CNN", "Machine Learning", "MERN Stack"],
      color: "from-purple-500 to-pink-500",
      icon: Sparkles,
    },
  ];

  // Data for Certifications & Achievements
  const certificationsData = [
    {
      title: "Java (Silver Badge)",
      issuer: "HackerRank",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "SQL (Bronze Badge)",
      issuer: "HackerRank", 
      color: "from-blue-400 to-purple-500",
    },
    {
      title: "Software Engineering Simulation",
      issuer: "Forage",
      color: "from-green-400 to-teal-500",
    },
    {
      title: "Power BI Job Simulation",
      issuer: "Forage",
      color: "from-pink-400 to-red-500",
    },
  ];

  // Data for Leadership & Volunteering
  const leadershipData = [
    {
      title: "Core Committee Member – Social Wing",
      description: "Led campus cleanliness drives and social campaigns, positively impacting 500+ people in the community.",
      impact: "500+ People Helped",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  // Data for Experience / Simulations
  const experienceData = [
    {
      title: "Software Engineering Simulation",
      company: "Forage",
      description: "Completed comprehensive software engineering simulation covering full-stack development practices.",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Power BI Job Simulation",
      company: "Forage",
      description: "Mastered data visualization and business intelligence using Microsoft Power BI platform.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  // Function to handle contact form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const switchColorTheme = (theme: string) => {
    setCurrentTheme(theme);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''} relative overflow-hidden`}>
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.3, 1],
          }}
          transition={{ 
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
          className={`absolute top-10 left-10 w-32 h-32 bg-gradient-to-r ${themes[currentTheme]} opacity-20 rounded-full blur-2xl`}
        />
        <motion.div
          animate={{ 
            rotate: -360,
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ 
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-cyan-400/25 to-emerald-400/25 rounded-full blur-3xl"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <motion.a 
            href="#" 
            className={`text-xl font-bold bg-gradient-to-r ${themes[currentTheme]} bg-clip-text text-transparent`}
            whileHover={{ scale: 1.05 }}
          >
            Anshika Dwivedi
          </motion.a>
          
          <div className="hidden md:flex space-x-6">
            {['Profile', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="hover:text-primary transition-colors duration-200 relative group"
                whileHover={{ y: -2 }}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${themes[currentTheme]} transition-all duration-300 group-hover:w-full`}></span>
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            {/* Theme Color Switcher */}
            <div className="flex space-x-1">
              {Object.entries(themes).map(([theme, gradient]) => (
                <motion.button
                  key={theme}
                  onClick={() => switchColorTheme(theme)}
                  className={`w-6 h-6 rounded-full bg-gradient-to-r ${gradient} ${currentTheme === theme ? 'ring-2 ring-white ring-offset-2' : ''}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-background/50 backdrop-blur-sm border border-border/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.h1
              className={`text-5xl md:text-7xl font-bold bg-gradient-to-r ${themes[currentTheme]} bg-clip-text text-transparent mb-4`}
              animate={{ 
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              Anshika Dwivedi
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground mb-4"
            >
              Aspiring Software Developer | ML Enthusiast | Full Stack Explorer
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-muted-foreground/80 mb-8 italic"
            >
              "Transforming ideas into intelligent solutions"
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                className={`bg-gradient-to-r ${themes[currentTheme]} hover:opacity-90 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-primary/30 backdrop-blur-sm bg-background/30 hover:bg-background/50 py-3 px-8 rounded-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <Profile />

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              className={`text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r ${themes[currentTheme]} bg-clip-text text-transparent`}
            >
              About Me
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="backdrop-blur-lg bg-white/10 dark:bg-black/10 rounded-3xl p-8 border border-white/20 shadow-xl">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Sparkles className="w-6 h-6 mr-2 text-yellow-400" />
                    Education
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Final year B.Tech Computer Engineering (Data Sciences) student at RAIT, DY Patil University with 8.7 CGPA. 
                    Passionate about building real-world applications using React, exploring machine learning, and giving back through social causes.
                  </p>
                </div>
                
                <div className="backdrop-blur-lg bg-white/10 dark:bg-black/10 rounded-3xl p-8 border border-white/20 shadow-xl">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Star className="w-6 h-6 mr-2 text-pink-400" />
                    Interests & Hobbies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {['Travelling', 'Reading', 'Dancing', 'Coding', 'Photography'].map((hobby, index) => (
                      <motion.span
                        key={hobby}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`px-4 py-2 rounded-full bg-gradient-to-r ${themes[currentTheme]} text-white font-medium shadow-lg`}
                      >
                        {hobby}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className={`absolute -inset-4 bg-gradient-to-r ${themes[currentTheme]} rounded-full opacity-30 blur-xl`}
                  />
                  <div className="relative w-80 h-80 rounded-full overflow-hidden backdrop-blur-lg bg-white/20 dark:bg-black/20 border-4 border-white/30 shadow-2xl">
                    <div className="w-full h-full flex items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-32 h-32 bg-white/30 dark:bg-black/30 rounded-full flex items-center justify-center backdrop-blur-sm"
                      >
                        <span className={`text-6xl font-bold bg-gradient-to-r ${themes[currentTheme]} bg-clip-text text-transparent`}>
                          AD
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r ${themes[currentTheme]} bg-clip-text text-transparent`}
          >
            Skills & Technologies
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                }}
                className="backdrop-blur-lg bg-white/10 dark:bg-black/10 rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">{skill.category}</h3>
                <div className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r ${themes[currentTheme]} bg-clip-text text-transparent`}
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  y: -10,
                }}
                className="group backdrop-blur-lg bg-white/10 dark:bg-black/10 rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative"
              >
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${project.gradient}`}></div>
                
                <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Code className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      className={`bg-gradient-to-r ${project.gradient} text-white border-none`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="outline"
                  className="w-full border-2 border-white/20 hover:border-white/40 backdrop-blur-sm"
                >
                  View Project
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r ${themes[currentTheme]} bg-clip-text text-transparent`}
          >
            Certifications & Achievements
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                }}
                className="backdrop-blur-lg bg-white/10 dark:bg-black/10 rounded-3xl p-6 border border-white/20 shadow-xl text-center group"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-sm">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r ${themes[currentTheme]} bg-clip-text text-transparent`}
          >
            Leadership & Impact
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            {leadershipData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="backdrop-blur-lg bg-white/10 dark:bg-black/10 rounded-3xl p-8 border border-white/20 shadow-xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <div className={`px-6 py-2 bg-gradient-to-r ${item.gradient} rounded-full text-white font-semibold`}>
                    {item.impact}
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r ${themes[currentTheme]} bg-clip-text text-transparent`}
          >
            Experience & Simulations
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="backdrop-blur-lg bg-white/10 dark:bg-black/10 rounded-3xl p-8 border border-white/20 shadow-xl"
              >
                <div className={`w-full h-2 bg-gradient-to-r ${exp.gradient} rounded-full mb-6`}></div>
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-lg text-muted-foreground/80 mb-4">{exp.company}</p>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r ${themes[currentTheme]} bg-clip-text text-transparent`}
          >
            Get In Touch
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="backdrop-blur-lg bg-white/10 dark:bg-black/10 rounded-3xl p-8 border border-white/20 shadow-xl">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">anshikadwivedi2004@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+91-7057733814</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Navi Mumbai, Maharashtra</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="backdrop-blur-lg bg-white/10 dark:bg-black/10 rounded-3xl p-8 border border-white/20 shadow-xl space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    type="text" 
                    id="name" 
                    required 
                    className="backdrop-blur-sm bg-white/20 dark:bg-black/20 border-white/30"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    id="email" 
                    required 
                    className="backdrop-blur-sm bg-white/20 dark:bg-black/20 border-white/30"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    id="message" 
                    rows={4} 
                    required 
                    className="backdrop-blur-sm bg-white/20 dark:bg-black/20 border-white/30"
                  />
                </div>
                <Button 
                  type="submit" 
                  className={`w-full bg-gradient-to-r ${themes[currentTheme]} hover:opacity-90 text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 backdrop-blur-lg bg-black/20 border-t border-white/10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-4 md:mb-0"
            >
              &copy; 2025 Anshika Dwivedi. All rights reserved.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {[
                { icon: Github, href: "#", color: "from-gray-600 to-gray-800" },
                { icon: Linkedin, href: "https://linkedin.com/in/anshika-dwivedi-319b75220", color: "from-blue-600 to-blue-800" },
                { icon: Code, href: "https://hackerrank.com/anshikadwivedi21", color: "from-green-600 to-green-800" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <social.icon className="w-6 h-6 text-white" />
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`w-12 h-12 bg-gradient-to-r ${themes[currentTheme]} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 mx-auto`}
            >
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                ↑
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
