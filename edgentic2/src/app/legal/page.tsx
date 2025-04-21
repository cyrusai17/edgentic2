'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LegalPage() {
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
              <Link href="/executives" className="text-gray-700 hover:text-blue-600 transition-colors">
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
              Legal Information
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Important information about your privacy, rights, and our terms of service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legal Navigation */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/privacy" className="px-6 py-2 bg-blue-100 text-blue-700 rounded-full font-medium hover:bg-blue-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section id="privacy" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
            <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="text-gray-600">
              At Edgentic, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <div className="mt-6">
              <Link href="/privacy" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                View Full Privacy Policy
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Information We Collect</h3>
              <p className="text-gray-600 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Personal information (such as name, email address, and contact details)</li>
                <li>Professional information (such as job title, company, and industry)</li>
                <li>Educational background and experience</li>
                <li>Payment information when you purchase our services</li>
                <li>Communications with us</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How We Use Your Information</h3>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your transactions</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends and usage</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Information Sharing</h3>
              <p className="text-gray-600 mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Service providers who perform services on our behalf</li>
                <li>Partners with whom we offer co-branded services or joint marketing activities</li>
                <li>Third parties in connection with a merger, sale, or acquisition</li>
                <li>Law enforcement or other third parties as required by law</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Rights</h3>
              <p className="text-gray-600 mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-600 mt-2">
                Email: privacy@edgentic.com<br />
                Address: 123 Innovation Drive, Suite 500, San Francisco, CA 94107
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms of Service */}
      <section id="terms" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h2>
            <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="text-gray-600">
              Please read these Terms of Service carefully before using Edgentic's website and services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Acceptance of Terms</h3>
              <p className="text-gray-600">
                By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Description of Services</h3>
              <p className="text-gray-600 mb-4">
                Edgentic provides executive education programs, online courses, and related services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">User Accounts</h3>
              <p className="text-gray-600 mb-4">
                To access certain features of our services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Intellectual Property</h3>
              <p className="text-gray-600 mb-4">
                All content, features, and functionality of our services are owned by Edgentic and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">User Content</h3>
              <p className="text-gray-600 mb-4">
                You retain all rights to any content you submit, post, or display on or through our services. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and distribute such content.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Prohibited Conduct</h3>
              <p className="text-gray-600 mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with or disrupt our services</li>
                <li>Attempt to gain unauthorized access to our services</li>
                <li>Engage in any activity that could harm, disable, or impair our services</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Termination</h3>
              <p className="text-gray-600">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms of Service.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-gray-600">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-gray-600 mt-2">
                Email: legal@edgentic.com<br />
                Address: 123 Innovation Drive, Suite 500, San Francisco, CA 94107
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookie Policy */}
      <section id="cookies" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookie Policy</h2>
            <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="text-gray-600">
              This Cookie Policy explains how Edgentic uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What Are Cookies</h3>
              <p className="text-gray-600">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Do We Use Cookies</h3>
              <p className="text-gray-600 mb-4">
                We use cookies for several reasons:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Essential cookies: These cookies are strictly necessary for the website to function and cannot be switched off in our systems.</li>
                <li>Performance cookies: These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
                <li>Functionality cookies: These cookies enable the website to provide enhanced functionality and personalization.</li>
                <li>Targeting cookies: These cookies may be set through our site by our advertising partners to build a profile of your interests.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How Can You Control Cookies</h3>
              <p className="text-gray-600 mb-4">
                You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-gray-600">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <p className="text-gray-600 mt-2">
                Email: privacy@edgentic.com<br />
                Address: 123 Innovation Drive, Suite 500, San Francisco, CA 94107
              </p>
            </div>

            <div className="mt-6">
              <Link href="/cookies" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                View Full Cookie Policy
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 