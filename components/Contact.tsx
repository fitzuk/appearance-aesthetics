'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+44 (0)20 XXXX XXXX',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@appearance-aesthetics.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'London, UK',
    },
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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="py-24 bg-luxury-white relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
        animate={{ y: [0, 50, 0] }}
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
          <p className="text-gold font-semibold text-sm tracking-widest mb-2">GET IN TOUCH</p>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-luxury-charcoal mb-6">
            Start Your Beauty Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to enhance your natural beauty? Contact us today to book your consultation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <h3 className="text-3xl font-serif font-bold text-luxury-charcoal">Contact Information</h3>

            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex gap-4 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-14 h-14 glass-effect rounded-xl flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Icon size={24} className="text-gold" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif font-bold text-luxury-charcoal mb-1">{info.label}</h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </motion.div>
              )
            })}

            {/* Hours */}
            <motion.div
              variants={itemVariants}
              className="glass-effect p-6 rounded-2xl mt-8"
            >
              <h4 className="font-serif font-bold text-luxury-charcoal mb-4">Hours of Operation</h4>
              <div className="space-y-2 text-gray-600 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="flex justify-between text-gold">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.form
              onSubmit={handleSubmit}
              className="glass-effect p-8 rounded-2xl space-y-6"
              animate={{ boxShadow: submitted ? '0 0 40px rgba(212, 175, 55, 0.3)' : '0 8px 32px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.3 }}
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-luxury-charcoal mb-2">
                  Full Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 border border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-luxury-charcoal mb-2">
                  Email Address
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 border border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-luxury-charcoal mb-2">
                  Phone Number
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/50 border border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
                  placeholder="+44 (0)20 XXXX XXXX"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-semibold text-luxury-charcoal mb-2">
                  Service Interest
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/50 border border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
                >
                  <option value="">Select a service</option>
                  <option value="botox">Botox & Injectables</option>
                  <option value="fillers">Dermal Fillers</option>
                  <option value="boosters">Skin Boosters</option>
                  <option value="peels">Chemical Peels</option>
                  <option value="microneedling">Microneedling</option>
                  <option value="wellness">Wellness Treatments</option>
                </motion.select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-luxury-charcoal mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/50 border border-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 transition resize-none"
                  placeholder="Tell us about your beauty goals..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-4 bg-gold text-luxury-charcoal font-semibold rounded-lg hover:shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-lg"
                    >
                      ✓
                    </motion.span>
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
