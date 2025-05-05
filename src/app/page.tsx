'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { StarIcon, FireIcon, SparklesIcon } from '@heroicons/react/24/solid'
import { HeroBanner } from '@/components/sections/HeroBanner'
import { CategoryHighlights } from '@/components/sections/CategoryHighlights'
import { Recommendations } from '@/components/sections/Recommendations'
import { PopularProducts } from '@/components/sections/PopularProducts'

const featuredCategories = [
  {
    name: 'Electronics',
    image: '/images/categories/electronics.jpg',
    href: '/category/electronics',
  },
  {
    name: 'Fashion',
    image: '/images/categories/fashion.jpg',
    href: '/category/fashion',
  },
  {
    name: 'Home & Kitchen',
    image: '/images/categories/home.jpg',
    href: '/category/home-kitchen',
  },
  {
    name: 'Beauty & Health',
    image: '/images/categories/beauty.jpg',
    href: '/category/beauty-health',
  },
]

const popularProducts = [
  {
    id: 1,
    name: 'Wireless Earbuds',
    price: 129.99,
    rating: 4.5,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1',
    category: 'Flash Sale',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    rating: 4.8,
    reviews: 256,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a',
    category: 'Top Deal',
  },
  {
    id: 3,
    name: 'Premium Headphones',
    price: 299.99,
    rating: 4.7,
    reviews: 512,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    category: 'Editor Pick',
  },
]

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Verified Buyer',
    content: 'Amazing selection and fast delivery. Will definitely shop here again!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Verified Buyer',
    content: 'The customer service is outstanding. They went above and beyond to help me.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  },
]

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <CategoryHighlights />
      <Recommendations />
      <PopularProducts />
    </div>
  )
} 