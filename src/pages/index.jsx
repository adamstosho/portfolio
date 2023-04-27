import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import styles from '@/styles/Home.module.css'
import Nav from '@/Components/Nav'
import Intro from '@/Components/Intro'
import About from '@/Components/About'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [load, setload] = useState('')
  return (
 <div className="body">
  <Head>
  <link href="https://fonts.cdnfonts.com/css/sf-mono" rel="stylesheet" />
  </Head>
<Nav/>
<main>
  <div className="Wrapper">
  <Intro/>
  <About/>
  </div>
</main>
 </div>
        


  )
}
