'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CookiePolicyPage() {
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
              Cookie Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              How we use cookies and similar technologies on our website
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cookie Policy Content */}
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
              This Cookie Policy explains how Edgentic ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website at edgentic.com (the "Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies</h2>
              <p className="text-gray-600 mb-4">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
              <p className="text-gray-600 mb-4">
                Cookies set by the website owner (in this case, Edgentic) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Why Do We Use Cookies</h2>
              <p className="text-gray-600 mb-4">
                We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Website. Third parties serve cookies through our Website for analytics and other purposes.
              </p>
              <p className="text-gray-600 mb-4">
                The specific types of first and third-party cookies served through our Website and the purposes they perform are described below:
              </p>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                  <p className="text-gray-600 mb-4">
                    These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Because these cookies are strictly necessary to deliver the Website, you cannot refuse them without impacting how our Website functions. You can block or delete them by changing your browser settings, as described below under the heading "How Can You Control Cookies".
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance and Functionality Cookies</h3>
                  <p className="text-gray-600 mb-4">
                    These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality may become unavailable.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics and Customization Cookies</h3>
                  <p className="text-gray-600 mb-4">
                    These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you in order to enhance your experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Advertising Cookies</h3>
                  <p className="text-gray-600 mb-4">
                    These cookies are used to make advertising messages more relevant to you and your interests. They also perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How Can You Control Cookies</h2>
              <p className="text-gray-600 mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided below.
              </p>
              <p className="text-gray-600 mb-4">
                You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
              </p>
              <p className="text-gray-600 mb-4">
                For more information about the cookies we use, please see the table below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies We Use</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Cookie Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Purpose
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Provider
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Expiry
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        session_id
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Essential cookie for maintaining user session
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Edgentic
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Session
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        _ga
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Analytics cookie to distinguish unique users
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Google Analytics
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        2 years
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        _gid
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Analytics cookie to distinguish unique users
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Google Analytics
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        24 hours
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        _fbp
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Advertising cookie for Facebook
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Facebook
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        3 months
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Do Not Track</h2>
              <p className="text-gray-600 mb-4">
                Some browsers have incorporated "Do Not Track" (DNT) features that can send a signal to the websites you visit indicating you do not wish to be tracked. Because there is not yet a common understanding of how to interpret the DNT signal, our Website does not currently respond to browser DNT signals.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Changes to This Cookie Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
              <p className="text-gray-600 mb-4">
                The date at the top of this Cookie Policy indicates when it was last updated.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about our use of cookies or other technologies, please contact us at:
              </p>
              <p className="text-gray-600 mt-2">
                Email: privacy@edgentic.com<br />
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
              <Link href="/terms" className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors">
                Terms of Service
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 