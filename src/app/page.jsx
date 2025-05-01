"use client";
import { Inter } from "next/font/google";
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
import OtherProject from "../Components/OtherProject";
import { API_KEY, base_url } from "@/Api_handling/API_KEY";
import { fetchDataByUrl } from "@/Api_handling/GetPostAPI";
import Loading from "@/Components/Loading";

export default function Home({ project }) {
  const controls = useDragControls();
  const [apiData, setApiData] = useState([]);
  const [message, setMessage] = useState([]);
  setMessage;
  useEffect(() => {
    Aos.init({
      disable: false,
      duration: 600,
      offset: 135,
    });
  }, []);

  const url = `${base_url}/author/get_profile/?api_token=${API_KEY}`;

  useEffect(() => {
    const fetchDataForPage1 = async () => {
      try {
        const result = await fetchDataByUrl(url);
        result.data !== undefined ? setApiData(result.data) : setApiData("");
        setMessage(result.status);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataForPage1();
  }, []);

  return (
    <div className="body">
      <Nav home={false} />
      {message === "success" ? (
        <main>
          <PopUp />

          <div className="Wrapper">
            <Intro />
            <About />
            <Expertise />
            <SomeProjects />
            <OtherProject />
            <Contact />
            <footer className="w-full text-center mb-6 flex flex-col lg:gap-0 space-y-10">
              <Socios />
              <p className="hover:text-primary1 text-[13px] cursor-pointer lg:pb-4 pb-20">
                <a
                  href={apiData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  npm
                >
                  Designed & Built by{" "}
                  {`${apiData.first_name} ${apiData.last_name}.`}
                </a>
              </p>
            </footer>
          </div>
        </main>
      ) : message == "Failed to fetch" ? (
        <div>
          <div className="h-screen w-full overflow-hidden flex justify-center items-center flex-col px-5 text-center">
            Please check your network connection and try again
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
