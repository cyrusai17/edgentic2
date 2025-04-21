'use client';

import { motion } from 'framer-motion';

const WhyEdgentic = () => {
  const features = [
    {
      title: "AI-refreshed, real-world curriculum",
      description: "Content that evolves with technology while maintaining human relevance.",
    },
    {
      title: "Backed by top universities",
      description: "Credibility and quality you can trust.",
    },
    {
      title: "Built to empower what AI can't replace",
      description: "Focus on uniquely human skills and capabilities.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Edgentic?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In a world where machines learn faster, Edgentic trains leaders to act smarter—with purpose, creativity, and emotional intelligence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8"
            >
              <div className="text-blue-600 mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <blockquote className="text-2xl md:text-3xl font-bold mb-4">
            "The future of leadership isn't artificial. It's agentic."
          </blockquote>
          <p className="text-blue-100">— Edgentic Philosophy</p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyEdgentic; 