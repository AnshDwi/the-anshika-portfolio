
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Code, MapPin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Profile = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'anshikadwivedi2004@gmail.com',
      href: 'mailto:anshikadwivedi2004@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-7057733814',
      href: 'tel:+917057733814',
      color: 'text-green-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'anshika-dwivedi-319b75220',
      href: 'https://linkedin.com/in/anshika-dwivedi-319b75220',
      color: 'text-blue-500'
    },
    {
      icon: Code,
      label: 'HackerRank',
      value: 'anshikadwivedi21',
      href: 'https://hackerrank.com/anshikadwivedi21',
      color: 'text-emerald-500'
    }
  ];

  const handleResumeDownload = () => {
    // In a real implementation, this would link to the actual resume PDF
    console.log('Resume download initiated');
    // You can replace this with actual resume download logic
    alert('Resume download feature - Please add your resume PDF link here');
  };

  return (
    <section id="profile" className="py-20 bg-gradient-to-br from-purple-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Header */}
              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-cyan-500 to-yellow-500 bg-clip-text text-transparent"
                >
                  Anshika Dwivedi
                </motion.h2>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                >
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span className="text-lg">Navi Mumbai, Maharashtra</span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-xl lg:text-2xl text-gray-700 dark:text-gray-200 font-medium leading-relaxed"
                >
                  Aspiring Software Developer | ML Enthusiast | Frontend & Full Stack Explorer
                </motion.p>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-2xl font-semibold text-gray-800 dark:text-white"
                >
                  Get In Touch
                </motion.h3>
                
                <div className="grid gap-4">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      target={contact.label === 'LinkedIn' || contact.label === 'HackerRank' ? '_blank' : undefined}
                      rel={contact.label === 'LinkedIn' || contact.label === 'HackerRank' ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                    >
                      <div className={`p-3 rounded-lg bg-gray-50 dark:bg-gray-700 group-hover:scale-110 transition-transform duration-300`}>
                        <contact.icon className={`w-6 h-6 ${contact.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          {contact.label}
                        </p>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                          {contact.value}
                        </p>
                      </div>
                      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Resume Download Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Button
                  onClick={handleResumeDownload}
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Animated background decorations */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-8 bg-gradient-to-r from-purple-400 via-cyan-400 to-yellow-400 rounded-full opacity-20 blur-xl"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-purple-400 to-cyan-400 rounded-full opacity-30 blur-lg"
                />
                
                {/* Profile image container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100 to-cyan-100 dark:from-purple-900 dark:to-cyan-900 border-4 border-white dark:border-gray-700"
                >
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-200 via-cyan-200 to-yellow-200 dark:from-purple-800 dark:via-cyan-800 dark:to-yellow-800">
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 bg-white dark:bg-gray-700 rounded-full mx-auto flex items-center justify-center shadow-lg">
                        <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                          AD
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">
                        Profile Photo
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg"
                />
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg"
                />
                <motion.div
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute top-8 -left-8 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
