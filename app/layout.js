import { Inter } from 'next/font/google'
import './globals.css'
import MenuToggle from '@/components/atoms/MenuToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Relatório de Investimento',
  description: 'Generated by create next app',
}

export default function RootLayout ({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <MenuToggle />
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="w-auto md:max-w-[70vw] p-4 bg-white rounded-md shadow-md ">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
