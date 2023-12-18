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
        <MenuToggle  />
        {children}
      </body>
    </html>
  )
}
