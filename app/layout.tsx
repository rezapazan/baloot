import '@/styles/globals.scss'
import type { Metadata } from 'next'
import Navbar from '@/app/components/Navbar'
import Sidebar from '@/app/components/Sidebar'

export const metadata: Metadata = {
  title: 'Baloot',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='fa'>
      <body
        dir='rtl'
        className='scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 scrollbar-thumb-rounded'
      >
        <Navbar />
        <div
          dir='rtl'
          className='flex h-full w-full'
        >
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  )
}
