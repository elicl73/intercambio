import { Inter } from 'next/font/google'

import './globals.css'
import { Navbar } from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Intercambio App',
  description: 'Sorteo de intercambio Navideño',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-80 h-[32rem] mx-auto rounded-b-lg border-2 shadow-lg shadow-red-500">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
