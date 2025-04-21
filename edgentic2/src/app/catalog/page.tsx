'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CourseCatalog() {
  const programs = [
    {
      category: "Leadership & Human Skills",
      courses: [
        {
          title: "Irreplaceable: How to Be Fully Human in the Age of AI",
          description: "Master the uniquely human skills that AI cannot replicate.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: true,
          link: "/programs/irreplaceable"
        },
        {
          title: "Women in Leadership: Beyond Equity Toward Influence",
          description: "Develop the skills and strategies to lead with impact.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/women-leadership"
        },
        {
          title: "The Ethical Leader in an Algorithmic World",
          description: "Navigate the complex intersection of technology and ethics.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/ethical-leadership"
        },
        {
          title: "Engineering Leadership",
          description: "Develop the skills to lead technical teams and drive innovation in engineering organizations.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/engineering-leadership"
        },
        {
          title: "Cross-Cultural Leadership",
          description: "Master the skills needed to lead diverse, global teams and navigate cultural complexities.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/cross-cultural-leadership"
        },
        {
          title: "Crisis Leadership",
          description: "Learn to lead effectively during times of uncertainty and organizational crisis.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/crisis-leadership"
        },
        {
          title: "Team Dynamics & Performance",
          description: "Optimize team performance through advanced understanding of group dynamics and motivation.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/team-dynamics"
        },
        {
          title: "Leadership Communication",
          description: "Master the art of persuasive communication and storytelling for effective leadership.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/leadership-communication"
        },
        {
          title: "Executive Presence",
          description: "Cultivate the confidence, gravitas, and communication skills that define executive presence.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/executive-presence"
        },
        {
          title: "Leadership Development",
          description: "Comprehensive program for developing high-potential leaders into executive-ready candidates.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/leadership-development"
        }
      ]
    },
    {
      category: "Industry-Specific AI & Technology",
      courses: [
        {
          title: "Strategic AI for Healthcare",
          description: "Leverage AI to transform healthcare delivery, improve patient outcomes, and optimize operations.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: true,
          link: "/programs/strategic-ai-healthcare"
        },
        {
          title: "Strategic AI for HR Professionals",
          description: "Use AI to enhance HR processes, improve talent management, and drive organizational effectiveness.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/strategic-ai-hr"
        },
        {
          title: "Strategic AI for Sales",
          description: "Transform sales processes with AI to increase efficiency, predict trends, and close more deals.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/strategic-ai-sales"
        },
        {
          title: "Green Technologies & AI",
          description: "Combine AI with sustainable technologies to drive environmental innovation and efficiency.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/green-tech-ai"
        },
        {
          title: "IT & Cybersecurity Leadership Teams",
          description: "Lead IT and cybersecurity initiatives while building high-performing technical teams.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/it-cybersecurity"
        },
        {
          title: "Big Data Analytics",
          description: "Master big data analytics to drive business insights and decision-making.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/big-data"
        },
        {
          title: "Generative AI & Business Value",
          description: "Understand and leverage generative AI technologies while assessing their business value and impact.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/generative-ai"
        },
        {
          title: "Cloud Strategy & Implementation",
          description: "Develop and implement effective cloud computing strategies for organizational transformation.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/cloud-strategy"
        },
        {
          title: "Digital Innovation & Transformation",
          description: "Drive digital innovation and transformation through emerging technologies.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/digital-innovation"
        },
        {
          title: "Blockchain & Distributed Systems",
          description: "Understand and leverage blockchain technology for business innovation and transformation.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/blockchain"
        }
      ]
    },
    {
      category: "Business Strategy & Innovation",
      courses: [
        {
          title: "Tariff-Ready: Strategic Pivoting in a Protectionist Economy",
          description: "Navigate global trade challenges with confidence and strategy.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: true,
          link: "/programs/tariff-ready"
        },
        {
          title: "Design Thinking & Innovation",
          description: "Master the principles and practices of design thinking to drive innovation and solve complex problems.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/design-thinking"
        },
        {
          title: "Customer Experience Strategy",
          description: "Develop strategies to create exceptional customer experiences that drive loyalty and growth.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/customer-experience"
        },
        {
          title: "Digital Marketing & Analytics",
          description: "Master modern digital marketing strategies and tools to drive business growth.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/digital-marketing"
        },
        {
          title: "Strategic AI Implementation",
          description: "Develop and implement AI strategies that create competitive advantage and drive business transformation.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/strategic-ai"
        },
        {
          title: "Business Model Innovation",
          description: "Learn to design and implement innovative business models that drive growth and value creation.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/business-model-innovation"
        },
        {
          title: "Strategic Planning & Execution",
          description: "Master the art of strategic planning and execution in complex business environments.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/strategic-planning"
        },
        {
          title: "Market Entry & Global Expansion",
          description: "Develop and execute effective strategies for entering new markets and expanding globally.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/market-entry"
        },
        {
          title: "Competitive Strategy & Analysis",
          description: "Learn to analyze competition and develop strategies for sustainable competitive advantage.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/competitive-strategy"
        },
        {
          title: "Mergers & Acquisitions Strategy",
          description: "Master the strategic and operational aspects of M&A transactions and integration.",
          duration: "8 weeks",
          format: "Fully Online, Asynchronous",
          featured: false,
          link: "/programs/mergers-acquisitions"
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