'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Please read these terms carefully before using our services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            <p className="text-gray-600">
              Welcome to Edgentic. By accessing or using our website, services, or programs, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing or using Edgentic's website, services, or programs, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and your continued use of our services constitutes acceptance of any changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
              <p className="text-gray-600 mb-4">
                Edgentic provides executive education programs, online courses, and related services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice. We are not responsible for any loss or damage that may result from such modifications, suspensions, or discontinuations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <p className="text-gray-600 mb-4">
                To access certain features of our services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
              </p>
              <p className="text-gray-600 mb-4">
                We reserve the right to terminate or suspend your account at any time without notice for any reason, including, but not limited to, a breach of these Terms of Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, software, and the design, selection, and arrangement thereof, are owned by Edgentic, its licensors, or other providers and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-gray-600 mb-4">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our services, except as permitted by these Terms of Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Content</h2>
              <p className="text-gray-600 mb-4">
                You retain all rights to any content you submit, post, or display on or through our services. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, publicly perform, and publicly display such content in all media formats and channels now known or later developed.
              </p>
              <p className="text-gray-600 mb-4">
                You represent and warrant that you own or have the necessary rights to the content you submit and that your content does not violate the rights of any third party or any applicable laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Prohibited Conduct</h2>
              <p className="text-gray-600 mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Use our services for any illegal purpose or in violation of any local, state, national, or international law</li>
                <li>Violate or encourage others to violate the rights of third parties, including intellectual property rights</li>
                <li>Engage in any activity that interferes with or disrupts our services</li>
                <li>Attempt to gain unauthorized access to our services or other users' accounts</li>
                <li>Use our services to transmit any viruses, worms, or other malicious code</li>
                <li>Use our services to harass, abuse, or harm others</li>
                <li>Use our services to collect or track personal information of other users</li>
                <li>Use our services for any commercial purpose not expressly permitted by these terms</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimer of Warranties</h2>
              <p className="text-gray-600 mb-4">
                Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, timely, secure, or error-free, or that any defects will be corrected.
              </p>
              <p className="text-gray-600 mb-4">
                We make no warranties or representations about the accuracy, reliability, timeliness, or completeness of the content provided through our services, or the content of any sites linked to our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                To the maximum extent permitted by law, Edgentic shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Your access to or use of or inability to access or use our services</li>
                <li>Any conduct or content of any third party on our services</li>
                <li>Any content obtained from our services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
              <p className="text-gray-600 mb-4">
                You agree to indemnify, defend, and hold harmless Edgentic, its officers, directors, employees, agents, and affiliates from and against any claims, disputes, demands, liabilities, damages, losses, expenses, judgments, fines, penalties, and costs, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of our services or your violation of these Terms of Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
              <p className="text-gray-600 mb-4">
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any legal action or proceeding arising out of or relating to these terms shall be brought exclusively in the federal or state courts located in San Francisco County, California.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Severability</h2>
              <p className="text-gray-600 mb-4">
                If any provision of these Terms of Service is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the Terms of Service shall otherwise remain in full force and effect and enforceable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Entire Agreement</h2>
              <p className="text-gray-600 mb-4">
                These Terms of Service constitute the entire agreement between you and Edgentic regarding your use of our services and supersede all prior or contemporaneous communications and proposals, whether oral or written, between you and Edgentic.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-gray-600 mt-2">
                Email: legal@edgentic.com<br />
                Address: 123 Innovation Drive, Suite 500, San Francisco, CA 94107
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-gray-200"
          >
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/legal" className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">
                Back to Legal Information
              </Link>
              <Link href="/privacy" className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal#cookies" className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 