import { Inter } from 'next/font/google'
import './globals.css'
import Container from '@/components/Container/Container'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Siscol',
  description: 'Página web de Siscol para Empoderar a las Comunidades Afrocolombianas y Palenqueras',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  )
}
