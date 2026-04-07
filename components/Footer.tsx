'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: ['Botox', 'Dermal Fillers', 'Skin Boosters', 'Chemical Peels', 'Microneedling'],
    Company: ['About Us', 'Team', 'Testimonials', 'Blog', 'Contact'],
    Legal: ['Privacy Policy', 'Terms & Conditions', 'Cookie Policy', 'Disclaimer'],
  }

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

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
    <footer className="bg-luxury-charcoal text-white relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        animate={{ y: [-50, 50, -50] }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.3), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-lg font-serif font-bold text-gold">A</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">Appearance</h3>
                <p className="text-xs text-gold tracking-widest">AESTHETICS</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium aesthetic treatments for the modern luxury client.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ scale: 1.2, color: '#d4af37' }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-gold transition-colors"
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="lg:col-span-1"
            >
              <h4 className="font-serif font-bold text-white mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gold transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="font-serif font-bold text-white mb-6">Contact</h4>
            <div className="space-y-4">
              {[
                { icon: Phone, text: '+44 (0)20 XXXX XXXX' },
                { icon: Mail, text: 'hello@appearance-aesthetics.com' },
                { icon: MapPin, text: 'London, United Kingdom' },
              ].map((contact, index) => {
                const Icon = contact.icon
                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 4 }}
                    className="flex gap-3 text-gray-400 text-sm group cursor-pointer"
                  >
                    <Icon size={18} className="text-gold flex-shrink-0 mt-0.5" />
                    <span className="group-hover:text-gold transition-colors">{contact.text}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8"
        />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Appearance Aesthetics. All rights reserved.
          </p>

          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Cookie Settings</a>
          </div>

          {/* Scroll to Top */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full bg-gold/20 hover:bg-gold/40 flex items-center justify-center text-gold transition-colors"
            aria-label="Scroll to top"
          >
            ↑
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-gold via-gold/50 to-gold/20" />
    </footer>
  )
}
