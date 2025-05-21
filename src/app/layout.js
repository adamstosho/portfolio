import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ridwan',
  description: 'Created by Ridwan',
}

export default function RootLayout({ children }) {
  const ss = "/logo3.png"
  return (
    <html lang="en">
      <head>
       <link rel="icon" type="image/svg+xml" href={ss}/>
       </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
