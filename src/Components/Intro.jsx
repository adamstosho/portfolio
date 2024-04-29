"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/Intro.module.css";
import "aos/dist/aos.css";
import { fetchDataByUrl } from "../Api_handling/GetPostAPI";
import { API_KEY, base_url } from "../Api_handling/API_KEY";
const Intro = () => {
  const [apiData, setApiData] = useState([]);
  const [message, setMessage] = useState("");

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
    <div>
      {message === "success" ? (
        <div className={styles.introW}>
          <p data-aos="flip-right">Hi, my name is</p>{" "}
          <h1 className={styles.name} data-aos="flip-right">
            {`${apiData.first_name} ${apiData.last_name}.`}
          </h1>
          <h2 data-aos="flip-left">I build things for the web</h2>
          {apiData.intro.split(";").map((a, i) => (
            <p
              className={styles.desc}
              data-aos={`${i % 2 == 0 ? "fade-down" : "fade-up"}`}
            >
              {a}
            </p>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Intro;
