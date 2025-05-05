'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import { Header } from './Header'
import { MainNav } from './MainNav'
import { Footer } from './Footer'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    })
  }, [])

  return (
    <>
      <Header />
      <MainNav />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </>
  )
} 