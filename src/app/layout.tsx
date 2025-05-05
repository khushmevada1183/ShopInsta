import { Poppins, Montserrat, Nunito, Pacifico, Roboto, Dancing_Script, Great_Vibes, Quicksand, Comfortaa } from 'next/font/google'
import { Metadata } from 'next'
import 'aos/dist/aos.css'
import 'animate.css'
import './globals.css'
import { ClientLayout } from '../components/layout/ClientLayout'
import { Inter } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-nunito',
})

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
})

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
})

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
})

const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-comfortaa',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Modern E-Commerce Landing Page',
  description: 'A beautiful and modern e-commerce landing page built with Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cal+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body 
        className={`
          ${poppins.variable} 
          ${montserrat.variable} 
          ${nunito.variable} 
          ${pacifico.variable}
          ${roboto.variable}
          ${dancingScript.variable}
          ${greatVibes.variable}
          ${quicksand.variable}
          ${comfortaa.variable}
          ${inter.variable}
          font-sans antialiased min-h-screen flex flex-col
        `}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
} 