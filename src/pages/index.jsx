import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'
import Nav from '@/Components/Nav'
import Intro from '@/Components/Intro'
import About from '@/Components/About'
import Socios from '@/Components/Socios'
import SomeProjects from '@/Components/SomeProjects'
import OtherProject from '@/Components/OtherProject'
import Contact from '@/Components/Contact'
import Logo from '@/Components/Logo'
import Expertise from '@/Components/Expertise'
import PopUp from '@/Components/PopUp'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {


  return (
 <div className="body">
  
<Nav/>
<PopUp/>
<main>
  <div className="Wrapper">
  <Intro/>
  <About/>
  <Expertise/>
  <SomeProjects/>
  <OtherProject/>
  <Contact/>
  <footer className='w-full text-center mt-[8rem] mb-6 flex flex-col lg:gap-0  space-y-10'>
  <Socios/>

    <p
     className='hover:text-primary1 text-[13px] cursor-pointer'> <a href="https://github.com/intelligence247" target='_blank' rel="noopener noreferrer"npm>Designed & Built by Usman Abdullahi</a></p>
  </footer>
  </div>
</main>
 </div>
        


  )
}


/*
./src/pages/_document.js
8:7  Warning: Titles should be defined at the page-level using next/head. See https://nextjs.org/docs/messages/no-title-in-document-head.  @next/next/no-title-in-document-head

info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/basic-features/eslint#disabling-rules
info  - Linting and checking validity of types  
info  - Compiled successfully
info  - Creating an optimized production build .info  - Collecting page dinfo  - Collecting page data  
info  - Generating static pages (3/3)
info  - Creating an optimized production build ...info  - Finalizing pageinfo  - Finalizing page optimization  

Route (pages)                              Size     First Load JS
┌ ○ /                                      14.9 kB        94.9 kB        
├   ├ css/69f81e06845cd7ae.css             2.21 kB
├   └ css/aa15273455602ac6.css             3.06 kB
├   /_app                                  0 B              80 kB        
├ ○ /404                                   182 B          80.2 kB        
└ λ /api/hello                             0 B              80 kB        
+ First Load JS shared by all              83.6 kB
  ├ chunks/framework-cda2f1305c3d9424.js   45.2 kB
  ├ chunks/main-0ecb9ccfcb6c9b24.js        27 kB
  ├ chunks/pages/_app-c75ef727039a4c88.js  6.84 kB
  ├ chunks/webpack-c4acd79e87956a0e.js     943 B
  └ css/54c0c85e2fe612b8.css               3.6 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)

info  - Creating an optimized production build .*/