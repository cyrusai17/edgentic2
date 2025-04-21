'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ExecutivesPage() {
  const programs = [
    {
      title: "Irreplaceable: How to Be Fully Human in the Age of AI",
      description: "Master the uniquely human skills that AI cannot replicate.",
      duration: "8 weeks",
      format: "Online with live sessions",
      link: "/programs/irreplaceable",
      featured: true
    },
    {
      title: "Tariff-Ready: Strategic Pivoting in a Protectionist Economy",
      description: "Navigate global trade challenges with confidence and strategy.",
      duration: "6 weeks",
      format: "Online with live sessions",
      link: "#",
      featured: true
    },
    {
      title: "Women in Leadership: Beyond Equity Toward Influence",
      description: "Develop the skills and strategies to lead with impact.",
      duration: "6 weeks",
      format: "Online with live sessions",
      link: "#",
      featured: false
    },
    {
      title: "The Ethical Leader in an Algorithmic World",
      description: "Navigate the complex intersection of technology and ethics.",
      duration: "6 weeks",
      format: "Online with live sessions",
      link: "#",
      featured: false
    }
  ];

  const benefits = [
    {
      title: "Learn from AI-augmented, practitioner-led courses",
      description: "Gain insights from industry leaders enhanced by cutting-edge AI technology.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Apply what you learn immediately",
      description: "Practical knowledge designed for real-world implementation.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Access exclusive networking via The Boardroom",
      description: "Connect with peers and industry leaders in our premium community.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Earn university-issued credentials",
      description: "Receive recognized certifications from prestigious partner institutions.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      quote: "Edgentic's programs have transformed how I approach leadership in an AI-driven world. The content is cutting-edge and immediately applicable.",
      author: "Sarah Chen",
      role: "CTO, Tech Innovations Inc.",
      image: "/testimonials/sarah.jpg"
    },
    {
      quote: "The combination of AI-enhanced learning and human expertise creates an educational experience unlike anything I've encountered before.",
      author: "Michael Rodriguez",
      role: "VP of Strategy, Global Enterprises",
      image: "/testimonials/michael.jpg"
    },
    {
      quote: "The Boardroom community has been invaluable for networking and sharing best practices with other leaders facing similar challenges.",
      author: "Priya Patel",
      role: "Director of Innovation, Future Solutions",
      image: "/testimonials/priya.jpg"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Edgentic
              </span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/#programs" className="text-gray-700 hover:text-blue-600 transition-colors">
                Programs
              </Link>
              <Link href="/#universities" className="text-gray-700 hover:text-blue-600 transition-colors">
                For Universities
              </Link>
              <Link href="/executives" className="text-blue-600 font-medium">
                For Leaders
              </Link>
              <Link href="/boardroom" className="text-gray-700 hover:text-blue-600 transition-colors">
                The Boardroom
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Executive Education for the AI Age
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be Irreplaceable. Join a network of forward-thinking leaders and earn credentials that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/catalog">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
                >
                  View All Programs
                </motion.button>
              </Link>
              <Link href="#enroll">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  Enroll Now
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our most popular executive education programs designed for today's challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.filter(program => program.featured).map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8 border-2 border-blue-500"
              >
                <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
                  Featured Program
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="mr-4">{program.duration}</span>
                  <span>{program.format}</span>
                </div>
                <Link
                  href={program.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/catalog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                View All Programs
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Edgentic?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our executive education programs combine cutting-edge AI technology with human expertise to deliver an unparalleled learning experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="text-blue-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Our Alumni Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from executives who have transformed their careers with Edgentic programs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/150";
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section id="enroll" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our next cohort of leaders and transform your career with our executive education programs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-lg"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  id="company"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                <input
                  type="text"
                  id="role"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="program" className="block text-sm font-medium text-gray-700">Program of Interest</label>
                <select
                  id="program"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select a program</option>
                  <option value="irreplaceable">Irreplaceable: How to Be Fully Human in the Age of AI</option>
                  <option value="tariff-ready">Tariff-Ready: Strategic Pivoting in a Protectionist Economy</option>
                  <option value="women-leadership">Women in Leadership: Beyond Equity Toward Influence</option>
                  <option value="ethical-leader">The Ethical Leader in an Algorithmic World</option>
                  <option value="all">All Programs</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (Optional)</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                Request Information
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 