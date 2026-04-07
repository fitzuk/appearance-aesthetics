'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect backdrop-blur-lg border-b border-gold-light/20"
    >
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full glass-effect flex items-center justify-center">
            <span className="text-xl font-serif font-bold text-gold">A</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-2xl font-serif font-bold text-luxury-charcoal">
              Appearance
            </h1>
            <p className="text-xs text-gold tracking-widest">AESTHETICS</p>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ color: '#d4af37' }}
              className="text-sm font-medium text-luxury-charcoal transition-colors hover:text-gold"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-8 py-3 bg-gold text-luxury-charcoal font-semibold rounded-full hover:shadow-gold-glow transition-all duration-300"
        >
          Book Now
        </motion.button>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white/50 backdrop-blur-lg"
      >
        <div className="px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-luxury-charcoal hover:text-gold transition-colors"
              whileHover={{ x: 4 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full px-6 py-2 bg-gold text-luxury-charcoal font-semibold rounded-full hover:shadow-gold-glow transition-all"
          >
            Book Now
          </motion.button>
        </div>
      </motion.div>
    </motion.header>
  )
}
