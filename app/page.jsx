'use client'

import { useState } from 'react'
import { Syringe, Sparkles, Diamond, Smile, Mail, MessageSquare, Check } from 'lucide-react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
    setMessage('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="w-full">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 20 50 Q 30 30 50 25 Q 70 30 80 50 Q 75 70 50 75 Q 25 70 20 50" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round"/>
              <path d="M 30 45 Q 50 35 70 45" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round"/>
              <path d="M 35 55 Q 50 60 65 55" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <h1 className="text-2xl font-bold" style={{color: '#d4af37', fontFamily: 'Georgia, serif', fontStyle: 'italic'}}>Appearance Aesthetics</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-rose-600 transition">Services</a>
            <a href="#team" className="text-gray-700 hover:text-rose-600 transition">Team</a>
            <a href="#contact" className="text-gray-700 hover:text-rose-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Enhance Your Natural Beauty
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Professional aesthetic treatments delivered with expertise and care. Discover the confidence that comes with personalized beauty solutions.
            </p>
            <a href="#contact" className="inline-block bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition">
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Professional treatments tailored to your aesthetic goals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Botox */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-rose-600 rounded-lg flex items-center justify-center mb-4">
                <Syringe className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Botox</h3>
              <p className="text-gray-600">
                Smooth dynamic wrinkles and restore a youthful appearance with precision injections.
              </p>
            </div>

            {/* Skin Boosters */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-rose-600 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Skin Boosters</h3>
              <p className="text-gray-600">
                Hydrate and revitalize your skin from within for a glowing, radiant complexion.
              </p>
            </div>

            {/* Dermal Fillers */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-rose-600 rounded-lg flex items-center justify-center mb-4">
                <Diamond className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dermal Fillers</h3>
              <p className="text-gray-600">
                Restore volume and enhance facial contours for a fuller, more youthful look.
              </p>
            </div>

            {/* Treatments */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="w-12 h-12 bg-rose-600 rounded-lg flex items-center justify-center mb-4">
                <Smile className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Aesthetic Treatments</h3>
              <p className="text-gray-600">
                Comprehensive skincare and aesthetic procedures for your unique beauty needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to your beauty</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              <img src="/danielle.jpg" alt="Danielle" className="w-full h-64 object-cover" />
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Danielle</h3>
                <p className="text-rose-600 font-semibold mb-3">Lead Aesthetician</p>
                <p className="text-gray-600">
                  With years of expertise in aesthetic treatments, Danielle brings passion and precision to every procedure, ensuring your comfort and satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Ready to enhance your beauty? Reach out to schedule your consultation.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl">
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-600 focus:border-transparent outline-none"
                placeholder="Tell us about your aesthetic goals..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-rose-600 text-white py-3 rounded-lg font-semibold hover:bg-rose-700 transition"
            >
              Send Message
            </button>

            {submitted && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
                Thank you! We'll be in touch soon.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">Appearance Aesthetics</h3>
          <p className="text-gray-400 mb-6">Professional aesthetic treatments delivered with expertise and care.</p>
          <div className="text-gray-500 text-sm">
            <p>&copy; 2026 Appearance Aesthetics. All rights reserved.</p>
            <p className="mt-2">Your journey to enhanced beauty starts here.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
