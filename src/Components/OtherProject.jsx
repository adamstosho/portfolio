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
  const [per_page, setPer_page] = useState(6);
  const url = `${base_url}/projects/get_projects/?api_token=${API_KEY}&per_page=${per_page}&sort_by=-created`;
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
  }, [per_page]);

  // let sliced = lessMore ? otherProjectArr.slice(0, 3) : otherProjectArr;
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
          per_page <= 6
            ? `after:content-['Show_More']`
            : 'after:content-["Show_Less"]'
        } ${styles.showMore}`}
        onClick={() => (per_page <= 6 ? setPer_page(20) : setPer_page(6))}
      ></p>
    </div>
  );
};

export default OtherProject;
