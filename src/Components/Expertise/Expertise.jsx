"use client";
import React, { useEffect, useState } from "react";
import Headings from "../Headings";
import Image from "next/image";
import styles from "../../styles/Expertise.module.css";
import ExpertiseCard from "./ExpertiseCard";
import { API_KEY, Image_base_url, base_url } from "../../Api_handling/API_KEY";
import { fetchDataByUrl } from "../../Api_handling/GetPostAPI";
import { Bars, Circles, ProgressBar } from "react-loader-spinner";

const Expertise = () => {
  const [apiData, setApiData] = useState([]);
  const [message, setMessage] = useState("");

  const url = `${base_url}/skills/get_skills/?api_token=${API_KEY}`;
  useEffect(() => {
    const fetchDataForPage1 = async () => {
      try {
        const result = await fetchDataByUrl(url);
        result.data !== undefined ? setApiData(result) : setApiData("");
        setMessage(result.status);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataForPage1();
  }, []);

  return (
    <div className={styles.ExpertiseW} id="expertise">
      <Headings position={"center"} num={"02."} text={"Some of my skills"} />
      <h3 className="text-center">{`Here are a few technologies I’ve been working with recently:`}</h3>
      <div className="exp flex lg:gap-8 mt-10 gap-4 flex-wrap w-full justify-center">
        {apiData.length !== 0 && message == "success" ? (
          apiData.data.map((a, i) => (
            <div data-aos={i % 2 === 0 ? "fade-right" : "fade-up"} key={i}>
              <ExpertiseCard
                // img={  a.image}
                img={`${
                  a.image !== null ? Image_base_url + a.image : "/rolex.png"
                }`}
                skillName={a.title}
              />
            </div>
          ))
        ) : apiData.length < 1 ? (
          <div className="h-20 w-full flex justify-center items-center">No Skill Available.</div>
        ) : (
          <div>
            <div className="lg:block hidden">
              <Circles
                height="80"
                width="80"
                color="#64ffda"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
            <div className="lg:hidden block">
              <Circles
                height="50"
                width="50"
                color="#64ffda"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          </div>
        )}
      </div>

      {/* <div className={styles.expertiseImages} 
>
         {
          expertiseObjArr.map((expert, i)=>(
            <div className={styles.eachExpertiseImg}
            data-aos= {i%2===0?'fade-right':'fade-up'}
           key={i}
            >
            <Image        
            src={expert.src} 
            width={100}
            height={100}
            alt={expert.alt} />
            </div>
          ))
         }
</div> */}
    </div>
  );
};

export default Expertise;

// https://flowbite.com/docs/components/progress/
