"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import About from "../Components/About";
import Socios from "../Components/Socios";
import Contact from "../Components/Contact";
import Expertise from "../Components/Expertise/Expertise";
import SomeProjects from "../Components/SomeProjects";
import PopUp from "../Components/PopUp";
import Nav from "../Components/Nav";
import Intro from "../Components/Intro";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });
import Aos from "aos";
import "aos/dist/aos.css";
import {
  motion,
  useAnimation,
  useScroll,
  useDragControls,
} from "framer-motion";
// import { fetchDataByUrl } from "@/Api_handling/GetPostAPI";
// import { API_KEY } from "@/Api_handling/API_KEY";
import OtherProject from "../Components/OtherProject";
import CommentModal from "@/Components/CommentModal";

export default function Home({ project }) {
  const controls = useDragControls();
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    Aos.init({
      disable: false,
      duration: 600,
      offset: 135,
    });
  }, []);

  return (

    <div className="body">
      <Nav />
      <PopUp />
      {/* <div className='w-full fixed h-screen '> */}
      {/* <motion.div 
className='w-full fixed h-screen'
drag
//  dragControls={controls}
 dragListener={true}
 dragConstraints={{left: 20, right: 0, bottom: 0, top:200,}}
 >
 <p className='bg fixed bg-primary1 bg-opacity-90 text-white text-xl w-20 h-20 rounded-full flex justify-center items-center'>Drag me</p>
</motion.div> */}
      {/* </div> */}
      <main>
        <div className="Wrapper">
        
        <CommentModal/>
          <Intro />
          <About />
          <Expertise />
          <SomeProjects />
          <OtherProject />
          <Contact />
          <footer className="w-full text-center mt-[8rem] mb-6 flex flex-col lg:gap-0  space-y-10">
            <Socios />
            <div></div>
            <p className="hover:text-primary1 text-[13px] cursor-pointer">
              {" "}
              <a
                href="https://github.com/intelligence247"
                target="_blank"
                rel="noopener noreferrer"
                npm
              >
                Designed & Built by Usman Abdullahi
              </a>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
