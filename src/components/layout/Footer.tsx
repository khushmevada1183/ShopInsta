'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const footerSections = {
  companyInfo: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Newsroom', href: '#' },
    { name: 'Investors', href: '#' },
  ],
  connectWithUs: [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'YouTube', href: '#' },
  ],
  sellWithUs: [
    { name: 'Become a Seller', href: '#' },
    { name: 'Affiliate Program', href: '#' },
    { name: 'Advertise with Us', href: '#' },
    { name: 'Developer Platform', href: '#' },
  ],
  helpAndSupport: [
    { name: 'Your Account', href: '#' },
    { name: 'Returns & Refunds', href: '#' },
    { name: 'Order Tracking', href: '#' },
    { name: 'Customer Service', href: '#' },
    { name: 'FAQ', href: '#' },
  ],
  legalAndSettings: [
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Accessibility', href: '#' },
  ],
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Back to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerSections.companyInfo.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-primary-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-2">
              {footerSections.connectWithUs.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-primary-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sell With Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Partnership</h3>
            <ul className="space-y-2">
              {footerSections.sellWithUs.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-primary-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help and Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              {footerSections.helpAndSupport.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-primary-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download App Section */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Get Our App</h3>
            <div className="space-y-4">
              <Link href="#" className="block w-36">
                <Image
                  src="/images/app-store.png"
                  alt="Download on App Store"
                  width={144}
                  height={48}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link href="#" className="block w-36">
                <Image
                  src="/images/play-store.png"
                  alt="Get it on Google Play"
                  width={144}
                  height={48}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              © {new Date().getFullYear()} ShopVista. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {footerSections.legalAndSettings.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm hover:text-primary-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 