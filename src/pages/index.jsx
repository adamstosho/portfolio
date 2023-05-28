import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import styles from '@/styles/Home.module.css'
import Nav from '@/Components/Nav'
import Intro from '@/Components/Intro'
import About from '@/Components/About'
import Socios from '@/Components/Socios'
import SomeProjects from '@/Components/SomeProjects'
import OtherProject from '@/Components/OtherProject'
import Contact from '@/Components/Contact'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [load, setload] = useState('')
  return (
 <div className="body">
  <Head>
  {/* <link href="https://fonts.cdnfonts.com/css/sf-mono" rel="stylesheet" /> */}
  {/* <link rel="stylesheet" href="path/to/custom.css"/> */}

  </Head>
<Nav/>
<main>
  <div className="Wrapper">
  <Socios/>
  <Intro/>
  <About/>
  <SomeProjects/>
  <OtherProject/>
  <Contact/>
  <footer className='w-full text-center mt-40 mb-6'>
    <p
     className='hover:text-primary1 text-[13px] cursor-pointer'>Designed & Built by Usman Abdullahi</p>
  </footer>
  </div>
</main>
 </div>
        


  )
}
