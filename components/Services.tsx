'use client'

import { motion } from 'framer-motion'
import { Syringe, Droplet, Sparkles, Wind, Zap, Heart } from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    icon: Syringe,
    title: 'Botox & Injectables',
    description: 'Smooth fine lines and wrinkles with precision treatments tailored to your unique features.',
    color: 'from-pink-400 to-rose-400',
  },
  {
    icon: Droplet,
    title: 'Dermal Fillers',
    description: 'Restore volume and enhance contours with premium dermal filler treatments.',
    color: 'from-purple-400 to-pink-400',
  },
  {
    icon: Sparkles,
    title: 'Skin Boosters',
    description: 'Rejuvenate and hydrate your skin from within with advanced skin booster technology.',
    color: 'from-yellow-400 to-gold',
  },
  {
    icon: Wind,
    title: 'Chemical Peels',
    description: 'Refresh your complexion and reveal glowing, radiant skin beneath.',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    icon: Zap,
    title: 'Microneedling',
    description: 'Stimulate collagen production for firmer, more youthful-looking skin.',
    color: 'from-orange-400 to-red-400',
  },
  {
    icon: Heart,
    title: 'Wellness Treatments',
    description: 'Holistic beauty treatments that combine aesthetics with overall wellness.',
    color: 'from-red-400 to-pink-400',
  },
]

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" className="py-24 bg-luxury-white relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.3), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-gold font-semibold text-sm tracking-widest mb-2">OUR EXPERTISE</p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-luxury-charcoal mb-6">
            Premium Aesthetic Treatments
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of luxury aesthetic treatments designed to enhance your natural beauty.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Glass Card */}
                <motion.div
                  className="glass-effect p-8 rounded-2xl backdrop-blur-xl h-full relative overflow-hidden"
                  animate={{
                    boxShadow:
                      hoveredIndex === index
                        ? '0 20px 60px rgba(212, 175, 55, 0.2)'
                        : '0 8px 32px rgba(0, 0, 0, 0.1)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient Background on Hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, rgba(212,175,55,0.2), transparent)`,
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    animate={hoveredIndex === index ? { scale: 1.1, rotate: 10 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6 inline-block p-3 bg-gradient-to-br from-gold/20 to-gold/10 rounded-xl"
                  >
                    <Icon size={32} className="text-gold" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-serif font-bold text-luxury-charcoal mb-4 relative z-10">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed relative z-10">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <motion.div
                    animate={hoveredIndex === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 flex items-center gap-2 text-gold font-semibold text-sm cursor-pointer relative z-10"
                  >
                    Discover More
                    <motion.span animate={hoveredIndex === index ? { x: 4 } : { x: 0 }}>
                      →
                    </motion.span>
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
