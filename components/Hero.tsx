'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(212,175,55,0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(212,175,55,0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(212,175,55,0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 glass-effect rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'rgba(212, 175, 55, 0.08)',
        }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 glass-effect rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'rgba(212, 175, 55, 0.05)',
        }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 mb-8 glass-effect px-4 py-2 rounded-full"
        >
          <Sparkles size={16} className="text-gold" />
          <span className="text-sm font-medium text-luxury-charcoal">Luxury Aesthetic Treatments</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl font-serif font-bold leading-tight mb-6"
        >
          <span className="block text-luxury-charcoal">Enhance Your</span>
          <span className="block bg-gradient-to-r from-gold via-gold to-gold/80 bg-clip-text text-transparent">
            Natural Beauty
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 font-light"
        >
          Experience bespoke aesthetic treatments in a luxury setting. Premium care, exceptional results.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212, 175, 55, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gold text-luxury-charcoal font-semibold rounded-full hover:shadow-gold-glow transition-all duration-300 flex items-center gap-2"
          >
            Book Consultation
            <ArrowRight size={18} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, borderColor: '#d4af37', color: '#d4af37' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-luxury-charcoal text-luxury-charcoal font-semibold rounded-full transition-all duration-300 hover:glass-effect"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-8 pt-12 border-t border-gold/20"
        >
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '10+', label: 'Years Experience' },
            { number: '98%', label: 'Satisfaction Rate' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="space-y-2"
            >
              <p className="text-3xl font-serif font-bold text-gold">{stat.number}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2">
          <motion.div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
