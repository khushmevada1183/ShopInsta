'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/20/solid'

const recommendations = [
  {
    id: 1,
    name: 'Wireless Earbuds Pro',
    price: 129.99,
    rating: 4.8,
    reviews: 2456,
    image: '/images/products/earbuds.svg',
    badge: 'Trending',
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    price: 199.99,
    rating: 4.9,
    reviews: 1832,
    image: '/images/products/watch.svg',
    badge: 'Best Seller',
  },
  {
    id: 3,
    name: 'Premium Laptop Stand',
    price: 49.99,
    rating: 4.7,
    reviews: 956,
    image: '/images/products/laptop_stand.svg',
    badge: 'Popular',
  },
  {
    id: 4,
    name: 'Noise-Canceling Headphones',
    price: 299.99,
    rating: 4.9,
    reviews: 3421,
    image: '/images/products/headphones.svg',
    badge: 'Top Rated',
  },
]

export function Recommendations() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold"
          >
            Recommended for You
          </motion.h2>
          <motion.a
            href="#"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            View All
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendations.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    ({product.reviews})
                  </span>
                </div>
                <p className="text-xl font-bold text-primary-600">
                  ${product.price}
                </p>
                <button className="mt-4 w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 