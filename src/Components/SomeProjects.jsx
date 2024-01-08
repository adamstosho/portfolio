import React, { useEffect, useState } from "react";
import Headings from "./Headings";
import Image from "next/image";
import styles from "../styles/SomeProjects.module.css";
import Eachproject from "./Eachproject";
import { fetchDataByUrl } from "../Api_handling/GetPostAPI";
import { API_KEY, Image_base_url, base_url } from "../Api_handling/API_KEY";
import { Circles } from "react-loader-spinner";

const SomeProjects = () => {
  const [apiData, setApiData] = useState([]);
  const [message, setMessage] = useState("");
  const url = `${base_url}/projects/get_projects/?api_token=${API_KEY}&per_page=3&sort_by=created`;
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
  console.log(apiData)
  return (
    <div className={styles.somprojectW} id="work">
      <Headings
        num={"03."}
        text={"Some of my projects"}
        position={"start"}
        width={"w-0"}
      />
      <div className="h-auto w-full flex flex-col lg:space-y-20 space-y-10 ">
        {apiData.length !== 0 && message == "success"
          ? apiData.map((a, i) => (
              <Eachproject
                key={i}
                // img={`${Image_base_url + a.image !== null ? a.image : "/rolex.png"}`}
                img={`${
                  a.image !== null ? Image_base_url + a.image : "/rolex.png"
                }`}
                name={a.title}
                description={a.description}
                abs_pos={ i % 2 !== 1 ? "right-[2rem]":''}
                text_pos={"text-left"}
                lang1={a.frameworks[0]?.title}
                lang2={a.frameworks[1]?.title}
                lang3={a.frameworks[2]?.title}
                lang4={a.frameworks[3]?.title}
                lang5={a.frameworks[4]?.title}
                end={"justify-start"}
                flex_Dir={
                  i % 2 == 0
                    ? "lg:flex-row flex-col-reverse"
                    : "lg:flex-row-reverse flex-col-reverse"
                }
                live={a.live_url}
                github={a.github_url}
                top={"top-[25%]"}
                projectId={a.id}
                commentDirection={i%2==0? "items-end":''}
              />
            ))
          : (
            <div className="grid place-content-center">
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

{/* <Eachproject
          img={"/Short3.png"}
          name={"Weather App"}
          description={
            "This is a weather app that gives users the opportunity to search for any city or country in the world and get the forcast for the next five days. The interval can be daily or 3hours. It can also access the location of the user and give the forcast of that city."
          }
          text_pos={"text-left"}
          lang1={"React.js"}
          lang3={"Chart.js"}
          lang4={"API"}
          lang5={"TailWindCss"}
          flex_Dir={"lg:flex-row-reverse flex-col-reverse"}
          live={"https://phenomenal-sunshine-547717.netlify.app/"}
          github={"https://github.com/Intelligence247/Weather_Forcast_App"}
          top={"top-[28%]"}
        />  */}

        {/* <Eachproject
          img={"/rolex.png"}
          name={"Rolex Wristwatch"}
          description={
            "I used this project to practice my frontEnd skills, I built the whole structure with HTML/CSS and JavaScript, Using JavaScript loop to create multiple element in HTML, and reduces the HTML code a lot."
          }
          abs_pos={"right-[2rem]"}
          text_pos={"text-right"}
          lang1={"Html"}
          lang2={"CSS"}
          lang3={"Vanilla Js"}
          lang4={"Netlify"}
          lang5={""}
          end={"justify-end"}
          flex_Dir={"lg:flex-row flex-col-reverse"}
          live={"https://visionary-cactus-89f6e7.netlify.app/"}
          github={"https://github.com/Intelligence247/rolexWristWatch"}
          top={"top-[28%]"}
        /> */}
        
        

        {/* <Eachproject
          img={"/webOpt.png"}
          name={"Web Optimization"}
          description={
            "WebOpt is a dynamic web application developed for Startup to enhance user experience and engagement. By leveraging modern front-end technologies and responsive design, the project aimed to provide seamless access and optimal usability across devices. This project was Implemented in collaboration with other developers, which I worked on the whole FrontEnd"
          }
          abs_pos={"right-[2rem]"}
          text_pos={"text-right"}
          lang1={"Html"}
          lang2={"CSS"}
          lang3={"Vanilla Js"}
          lang4={"Netlify"}
          lang5={""}
          end={"justify-end"}
          flex_Dir={"lg:flex-row flex-col-reverse"}
          live={"https://webopt.netlify.app/"}
          github={"https://github.com/Intelligence247/webopt"}
          top={"top-[20%]"}
        /> */}

        {/* <Eachproject
          img={"/getlinked.jpg"}
          name={"GetLinked Challenge"}
          description={
            "I participated in a three days hackathon with over 5000 other developers across the globe. We worked alongside designers and backend developers thereby implementing an eye-cacthing, responsive and dynamic website."
          }
          text_pos={"text-left"}
          lang1={"React.js"}
          lang3={"Axios"}
          lang4={"API"}
          lang5={"TailWindCss"}
          flex_Dir={"lg:flex-row-reverse flex-col-reverse"}
          live={"https://transcendent-manatee-0cd606.netlify.app/"}
          github={"https://github.com/Intelligence247/getLinkedCodeChallenge"}
          top={"top-[28%]"}
        /> */}
      </div>
      {/* <p className={styles.learnMore}></p> */}
    </div>
  );
};

export default SomeProjects;
