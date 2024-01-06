"use client";
import React, { useEffect, useState } from "react";
import EachOtherProjects from "./EachOtherProjects";
import styles from "../styles/SomeProjects.module.css";
import { fetchDataByUrl } from "../Api_handling/GetPostAPI";
import { API_KEY, base_url } from "../Api_handling/API_KEY";
const OtherProject = () => {
  const [lessMore, setLessMore] = useState(true);
  const [apiData, setApiData] = useState([]);
  const [message, setMessage] = useState("");
  const url = `${base_url}/projects/get_projects/?api_token=${API_KEY}&per_page=9&sort_by=created`;
  console.log(apiData);
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

  const otherProjectArr = [
    {
      lang1: "Reactjs",
      lang2: "TailwindCSS",
      lang3: "Netlify",
      lang4: "",
      title: "E-commerce Website",
      desc: "This is an E-commerce website, where you can go for Shopping, add to cart, and also delete a cart.",
      github: "https://github.com/Intelligence247/e-commerce",
      live: "https://harmonious-bavarois-1f640c.netlify.app",
    },
    {
      lang1: "React-Redux",
      lang2: "",
      lang3: "TailwindCss",
      lang4: "Netlify",
      title: "Task-List",
      desc: "A Task List to make proper decision. Where users can add a new task and mark or delete any task that has been completed.",
      github: "https://github.com/Intelligence247/Redux_To_Do_List",
      live: "https://creative-gelato-39395b.netlify.app",
    },
    {
      lang1: "HTML/CSS",
      lang2: "",
      lang3: "Vanilla.js",
      lang4: "Netlify",
      title: "Cake-Shop",
      desc: "Time to go for shopping!. This website gives users the opportunity to search for what they want to order for.",
      github: "https://github.com/Intelligence247/cake-shop",
      live: "https://ephemeral-pithivier-dc232a.netlify.app/",
    },
    {
      lang1: "Reactjs",
      lang2: "",
      lang3: "TailwindCSS",
      lang4: "Netlify",
      title: "Temperature Converter",
      desc: "This App can convert any given temperature to another form. Either from Celsius to Fahreint or any other possible forms.",
      github: "https://github.com/Intelligence247/TemperatureConverter",
      live: "https://cute-meerkat-9c5153.netlify.app/",
    },

    {
      lang1: "Reactjs",
      lang2: "",
      lang3: "TailwindCSS",
      lang4: "Netlify",
      title: "World Country Visualization",
      desc: "This App visualizes all the countries in the world with their populations, capital e.t.c. Users can search any country with either the name of the country or the capital",
      github:
        "https://github.com/Intelligence247/asabeneh-world-countries-data-project",
      live: "https://stately-kataifi-5e13a1.netlify.app/",
    },
    {
      lang1: "Reactjs",
      lang2: "Bitly API",
      lang3: "TailwindCSS",
      lang4: "",
      title: "URL Shortener",
      desc: "A web App for Shortening URL. Built with Bitly API, Reactjs, and Tailwind CSS ",
      github: "",
      live: "https://tranquil-sunburst-a4ee59.netlify.app/",
    },
    {
      lang1: "HTML/CSS",
      lang2: "Vanilla.js",
      lang3: "Netlify",
      lang4: "",
      title: "Analog Clock",
      desc: "This App was built with HTML/CSS and JavaScript. It displays an Analog and digital clock with an astonishing look",
      github: "",
      live: "https://tranquil-sunburst-a4ee59.netlify.app/",
    },
  ];
  let sliced = lessMore ? otherProjectArr.slice(0, 3) : otherProjectArr;
  return (
    <div
      className={`${
        lessMore ? "h-[90%]" : "h-[100%]"
      } w-full flex-col justify-between space-y-8 items-center mt-20 ${
        styles.otherProjectW
      } ${apiData.length <= 3 ? "hidden" : "flex"}`}
    >
      <div className="flex flex-col gap-6 items-center">
        <h1 className="text-[1.5rem] text-var_color font-bold text-center">
          Other Noteworthy Projects
        </h1>
        <p className="text-primary1 cursor-pointer">
          <a href="" rel="noopener noreferrer">
            Feel free to Explore!!!
          </a>
        </p>
      </div>
      <div
        className={` ${styles.Otherprojects} grid lg:grid-cols-3 place-content-between gap-4`}
      >
        {message === "success"
          ? apiData
              .slice(3, apiData.length)
              .map((other, i) => (
                <EachOtherProjects
                  key={i}
                  lang1={other.frameworks[0]?.title}
                  lang2={other.frameworks[1]?.title}
                  lang3={other.frameworks[2]?.title}
                  title={other.title}
                  desc={other.description}
                  github={other.github_url}
                  live={other.live_url}
                  aos={i % 2 === 0 ? "fade-up" : "fade-down"}
                  projectId={other.id}
                />
              ))
          : ""}
      </div>
      <p
        className={`${
          lessMore
            ? `after:content-['Show_More']`
            : 'after:content-["Show_Less"]'
        } ${styles.showMore} ${apiData.length <= 6 ? "hidden" : "block"}`}
        onClick={() => setLessMore(!lessMore)}
      ></p>
    </div>
  );
};

export default OtherProject;
