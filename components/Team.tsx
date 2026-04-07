'use client'

import { motion } from 'framer-motion'
import { Award, Users, Heart } from 'lucide-react'
import Image from 'next/image'

export default function Team() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-24 bg-luxury-cream relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20"
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.3), transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-gold font-semibold text-sm tracking-widest mb-2">MEET OUR TEAM</p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-luxury-charcoal mb-6">
            Expert Aesthetic Specialists
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our certified professionals bring years of expertise and passion to every treatment.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center mb-20"
        >
          {/* Danielle's Card */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <motion.div
              className="glass-effect rounded-2xl p-1 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden aspect-square bg-gradient-to-br from-gold/20 to-transparent">
                {/* Placeholder for Danielle's photo - using gradient background as fallback */}
                <div className="w-full h-full bg-gradient-to-br from-gold/10 via-cream to-white flex items-center justify-center">
                  <div className="text-center">
                    <Heart size={48} className="text-gold mx-auto mb-4 opacity-30" />
                    <p className="text-gold font-serif text-lg">Danielle's Photo</p>
                    <p className="text-sm text-gray-600">High-resolution image</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <h3 className="text-4xl font-serif font-bold text-luxury-charcoal mb-2">Danielle</h3>
              <p className="text-gold font-semibold mb-4">Founder & Lead Aesthetician</p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                With over a decade of experience in aesthetic medicine, Danielle is passionate about helping clients achieve their beauty goals through personalized, premium treatments. Her meticulous attention to detail and genuine care for her clients make every experience exceptional.
              </p>

              {/* Credentials */}
              <div className="space-y-3">
                {[
                  'Certified Aesthetic Practitioner',
                  'Expert in Advanced Injectables',
                  'Specialized in Natural Enhancement',
                ].map((credential, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <Award size={20} className="text-gold flex-shrink-0" />
                    <span>{credential}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div>
              <p className="text-gold font-semibold text-sm tracking-widest mb-4">WHY CHOOSE US</p>
              <h3 className="text-3xl font-serif font-bold text-luxury-charcoal mb-6">
                Personalized Care, Premium Results
              </h3>
            </div>

            {[
              {
                icon: Award,
                title: 'Expert Credentials',
                description: 'Our team consists of certified professionals with extensive training and years of practical experience.',
              },
              {
                icon: Heart,
                title: 'Client-Centered Approach',
                description: 'We listen to your goals and create customized treatment plans that honor your unique features.',
              },
              {
                icon: Users,
                title: 'Luxury Experience',
                description: 'Every detail of your visit is designed to be luxurious, comfortable, and memorable.',
              },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="glass-effect p-6 rounded-xl"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 glass-effect rounded-full flex items-center justify-center">
                      <Icon size={24} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg text-luxury-charcoal mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
