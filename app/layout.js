import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Promptverse',
  description: 'Discover & Share Prompts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}
