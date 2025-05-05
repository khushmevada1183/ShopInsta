'use client'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'
import '@/app/styles/nav-animations.css'

const categories = [
  {
    name: 'Electronics',
    subcategories: ['Phones', 'Laptops', 'Tablets', 'Accessories'],
  },
  {
    name: 'Fashion',
    subcategories: ['Men', 'Women', 'Kids', 'Accessories'],
  },
  {
    name: 'Home & Kitchen',
    subcategories: ['Furniture', 'Decor', 'Kitchen', 'Bedding'],
  },
  {
    name: 'Beauty & Health',
    subcategories: ['Skincare', 'Makeup', 'Healthcare', 'Personal Care'],
  },
  {
    name: 'Sports & Outdoors',
    subcategories: ['Exercise', 'Outdoor Recreation', 'Sports Equipment', 'Camping'],
  },
]

export function MainNav() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14">
          <div className="flex space-x-8">
            {categories.map((category) => (
              <div key={category.name} className="relative">
                <Popover className="h-full">
                  {({ open, close }) => (
                    <>
                      <Popover.Button
                        className={`
                          nav-item group inline-flex items-center px-3 py-2 text-xl font-medium h-14
                          ${open ? 'text-primary-600' : 'text-gray-700'}
                          focus:outline-none font-['Cal_Sans']
                        `}
                      >
                        <span className="font-['Cal_Sans'] text-xl">{category.name}</span>
                        <ChevronDownIcon
                          className={`
                            ml-2 h-4 w-4 chevron-icon
                            ${open ? 'open text-primary-600' : 'text-gray-400'}
                            group-hover:text-primary-600
                          `}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-0"
                        enterTo="opacity-100 translate-y-1"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-1"
                        leaveTo="opacity-0 translate-y-0"
                      >
                        <Popover.Panel 
                          static
                          className={`
                            dropdown-panel absolute top-full left-0
                            w-56
                            ${open ? 'open' : ''}
                          `}
                          onMouseLeave={() => close()}
                        >
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                          >
                            <div className="relative grid gap-2 bg-white p-4">
                              {category.subcategories.map((subcategory) => (
                                <motion.a
                                  key={subcategory}
                                  href="#"
                                  className="dropdown-item"
                                  onClick={() => close()}
                                >
                                  <span>{subcategory}</span>
                                  <svg
                                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </motion.a>
                              ))}
                            </div>
                          </motion.div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
} 