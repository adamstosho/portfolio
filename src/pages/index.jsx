import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import styles from '@/styles/Home.module.css'
import Nav from '@/Components/Nav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [load, setload] = useState('')
  return (
 <div className="body">
<Nav/>

<Image
src={''}
width={400}
height={400}
/>


 </div>
        


  )
}
