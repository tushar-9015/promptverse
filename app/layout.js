import './globals.css'
import Navbar from '@components/Navbar'
import Provider from '@components/Provider'

export const metadata = {
  title: 'Promptverse',
  description: 'Discover & Share Prompts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>

          <main className='app'>
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
