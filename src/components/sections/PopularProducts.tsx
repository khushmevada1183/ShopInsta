'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FireIcon, SparklesIcon, StarIcon } from '@heroicons/react/24/solid'

type Category = 'Flash Sales' | 'Top Deals' | 'Editor Picks'

interface BaseProduct {
  id: number
  name: string
  image: string
}

interface FlashSaleProduct extends BaseProduct {
  originalPrice: number
  salePrice: number
  discount: number
  timeLeft: string
}

interface TopDealProduct extends BaseProduct {
  originalPrice: number
  salePrice: number
  discount: number
  rating: number
  reviews: number
}

interface EditorPickProduct extends BaseProduct {
  price: number
  badge: string
  description: string
}

const categories: Category[] = ['Flash Sales', 'Top Deals', 'Editor Picks']

const products: Record<Category, (FlashSaleProduct | TopDealProduct | EditorPickProduct)[]> = {
  'Flash Sales': [
    {
      id: 1,
      name: 'Smart 4K TV',
      originalPrice: 999.99,
      salePrice: 699.99,
      discount: 30,
      image: '/images/products/earbuds.svg',
      timeLeft: '2:15:30',
    },
    // Add more flash sale products...
  ],
  'Top Deals': [
    {
      id: 2,
      name: 'Coffee Maker',
      originalPrice: 199.99,
      salePrice: 149.99,
      discount: 25,
      image: '/images/products/watch.svg',
      rating: 4.8,
      reviews: 1250,
    },
    // Add more top deals...
  ],
  'Editor Picks': [
    {
      id: 3,
      name: 'Premium Backpack',
      price: 89.99,
      image: '/images/products/headphones.svg',
      badge: "Editor's Choice",
      description: 'Perfect for daily commute and travel',
    },
    // Add more editor picks...
  ],
}

export function PopularProducts() {
  const [activeCategory, setActiveCategory] = useState<Category>(categories[0])

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-8"
        >
          Popular Products
        </motion.h2>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {category === 'Flash Sales' && <FireIcon className="inline-block w-4 h-4 mr-1" />}
                {category === 'Editor Picks' && <SparklesIcon className="inline-block w-4 h-4 mr-1" />}
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products[activeCategory].map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {'discount' in product && (
                  <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    -{product.discount}%
                  </span>
                )}
                {'badge' in product && (
                  <span className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                {'timeLeft' in product && (
                  <div className="flex items-center text-red-600 mb-2">
                    <FireIcon className="h-5 w-5 mr-1" />
                    <span className="font-medium">Ends in {product.timeLeft}</span>
                  </div>
                )}
                {'rating' in product && (
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
                )}
                {'description' in product && (
                  <p className="text-gray-600 mb-4">{product.description}</p>
                )}
                <div className="flex items-center justify-between">
                  <div>
                    {'salePrice' in product ? (
                      <>
                        <p className="text-xl font-bold text-primary-600">
                          ${product.salePrice}
                        </p>
                        <p className="text-sm text-gray-500 line-through">
                          ${product.originalPrice}
                        </p>
                      </>
                    ) : (
                      <p className="text-xl font-bold text-primary-600">
                        ${(product as EditorPickProduct).price}
                      </p>
                    )}
                  </div>
                  <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 