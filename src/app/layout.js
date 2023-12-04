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
    <html lang="es-MX">
      <body className={inter.className}>
        <div className="grid place-items-center h-screen">
          <main className="bg-gray-50 rounded-lg shadow-lg shadow-red-500 h-[95vh] w-96">
            <Navbar />
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
