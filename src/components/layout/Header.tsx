'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, ShoppingBagIcon, UserIcon, HeartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

export function Header() {
  const [cartCount] = useState(0)
  const [wishlistCount] = useState(0)

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="ShopInsta" width={40} height={40} />
            <span className="text-xl font-bold">ShopInsta</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="input-container">
              <input
                type="text"
                placeholder="Search products..."
                className="input"
              />
              <button className="icon">
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-6">
            {/* User Account */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-700 hover:text-primary-600"
            >
              <UserIcon className="h-6 w-6" />
            </motion.button>

            {/* Wishlist */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <button className="text-gray-700 hover:text-primary-600">
                <HeartIcon className="h-6 w-6" />
              </button>
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </motion.div>

            {/* Shopping Cart */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <button className="text-gray-700 hover:text-primary-600">
                <ShoppingBagIcon className="h-6 w-6" />
              </button>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary-500 text-white text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </motion.div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-gray-700 hover:text-primary-600">
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 