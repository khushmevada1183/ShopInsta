'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const categories = [
  {
    id: 1,
    name: 'Electronics',
    image: '/images/categories/electronics.svg',
    href: '#',
  },
  {
    id: 2,
    name: 'Fashion',
    image: '/images/categories/fashion.svg',
    href: '#',
  },
  {
    id: 3,
    name: 'Home & Kitchen',
    image: '/images/categories/home_kitchen.svg',
    href: '#',
  },
  {
    id: 4,
    name: 'Beauty & Health',
    image: '/images/categories/beauty_health.svg',
    href: '#',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function CategoryHighlights() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Shop by Category
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((category) => (
            <motion.a
              key={category.id}
              href={category.href}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 