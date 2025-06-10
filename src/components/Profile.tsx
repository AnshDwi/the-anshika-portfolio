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
      color: 'text-red-500',
      bgColor: 'bg-red-100 dark:bg-red-900/30',
      borderColor: 'border-red-200 dark:border-red-800'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-7057733814',
      href: 'tel:+917057733814',
      color: 'text-green-500',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
      borderColor: 'border-green-200 dark:border-green-800'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'anshika-dwivedi-319b75220',
      href: 'https://linkedin.com/in/anshika-dwivedi-319b75220',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
      borderColor: 'border-blue-200 dark:border-blue-800'
    },
    {
      icon: Code,
      label: 'HackerRank',
      value: 'anshikadwivedi21',
      href: 'https://hackerrank.com/anshikadwivedi21',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
      borderColor: 'border-emerald-200 dark:border-emerald-800'
    }
  ];

  const handleResumeDownload = () => {
    console.log('Resume download initiated');
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/lovable-uploads/0cc3f690-a77d-4869-b69b-be1b09f37c82.png'; // This will be updated when resume PDF is available
    link.download = 'Anshika_Dwivedi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="profile" className="py-20 bg-gradient-to-br from-purple-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 relative overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/3 right-16 w-24 h-24 bg-gradient-to-r from-yellow-400/40 to-orange-400/40 rounded-full blur-lg"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-32 left-1/4 w-28 h-28 bg-gradient-to-r from-cyan-400/35 to-blue-400/35 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
                      className={`flex items-center space-x-4 p-4 ${contact.bgColor} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${contact.borderColor} group backdrop-blur-sm`}
                    >
                      <div className={`p-3 rounded-lg bg-white dark:bg-gray-700 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
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
                        <div className={`w-3 h-3 ${contact.color.replace('text-', 'bg-')} rounded-full animate-pulse`}></div>
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
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-purple-300 dark:border-purple-600"
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
                  className="absolute -inset-8 bg-gradient-to-r from-purple-400 via-cyan-400 to-yellow-400 rounded-full opacity-30 blur-xl"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-purple-400 to-cyan-400 rounded-full opacity-40 blur-lg"
                />
                
                {/* Profile image container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100 to-cyan-100 dark:from-purple-900 dark:to-cyan-900 border-4 border-white dark:border-gray-700"
                >
                  <img
                    src="/lovable-uploads/da65fe23-7f97-486e-830d-efb72e168a18.png"
                    alt="Anshika Dwivedi Profile"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  {/* Glowing overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-yellow-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
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
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 180, 270, 360]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 -right-8 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg"
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
