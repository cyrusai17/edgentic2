'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CourseCatalog() {
  const programs = [
    {
      category: "Leadership & Human Skills",
      courses: [
        {
          title: "The Irreplaceable Executive",
          description: "Master the art of leadership in the AI age. Learn to leverage technology while developing uniquely human skills that AI cannot replicate.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: true,
          link: "/programs/irreplaceable"
        },
        {
          title: "Strategic Leadership",
          description: "Develop the strategic mindset and decision-making skills needed to lead organizations through complex challenges.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/strategic-leadership"
        },
        {
          title: "Change Management",
          description: "Learn to lead organizational change effectively, managing both the technical and human aspects of transformation.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/change-management"
        }
      ]
    },
    {
      category: "Business Strategy & Innovation",
      courses: [
        {
          title: "Digital Transformation",
          description: "Navigate the complexities of digital transformation and lead your organization into the future.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: true,
          link: "/programs/digital-transformation"
        },
        {
          title: "Innovation Strategy",
          description: "Develop systematic approaches to innovation and create sustainable competitive advantages.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/innovation-strategy"
        },
        {
          title: "Business Model Innovation",
          description: "Learn to design and implement innovative business models that drive growth and value creation.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/business-model-innovation"
        }
      ]
    },
    {
      category: "Technology & AI",
      courses: [
        {
          title: "AI Strategy & Implementation",
          description: "Develop and execute AI strategies that create value while maintaining human-centric leadership.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: true,
          link: "/programs/ai-strategy"
        },
        {
          title: "Data-Driven Decision Making",
          description: "Master the art of using data analytics to inform strategic decisions and drive organizational success.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/data-driven-decision-making"
        },
        {
          title: "Technology Leadership",
          description: "Lead technology initiatives and teams while balancing innovation with business objectives.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/technology-leadership"
        }
      ]
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
              <Link href="/#leaders" className="text-gray-700 hover:text-blue-600 transition-colors">
                For Leaders
              </Link>
              <Link href="/#boardroom" className="text-gray-700 hover:text-blue-600 transition-colors">
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
              Full Course Catalog
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Explore our comprehensive suite of executive education programs designed to shape the next generation of leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {programs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{category.category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.courses.map((course, courseIndex) => (
                  <motion.div
                    key={courseIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: courseIndex * 0.1 }}
                    viewport={{ once: true }}
                    className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow ${
                      course.featured ? 'border-2 border-blue-500' : ''
                    }`}
                  >
                    {course.featured && (
                      <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
                        Featured Program
                      </span>
                    )}
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span className="mr-4">{course.duration}</span>
                      <span>{course.format}</span>
                    </div>
                    <Link
                      href={course.link}
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join our next cohort of leaders and transform your career with our executive education programs.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 