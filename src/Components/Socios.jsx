"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/Socios.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { API_KEY, base_url } from "../Api_handling/API_KEY";
import { fetchDataByUrl } from "../Api_handling/GetPostAPI";
const Socios = () => {
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

  let socioArr = [];
  message.length > 1 && message === "success"
    ? (socioArr = [
        {
          link: apiData.github,
          ima1: `bg-[url("/github-line.png")]`,
          ima2: `hover:bg-[url("/github-lineh.png")]`,
          alter: "Github icon",
        },
        {
          link: apiData.twitter,
          ima1: `bg-[url("/twitter-line.png")]`,
          ima2: `hover:bg-[url("/twitter-lineh.png")]`,
          alter: "Twitter icon",
        },
        {
          link: apiData.linkedin,
          ima1: `bg-[url("/linkedin-fill.png")]`,
          ima2: `hover:bg-[url("/linkedin-fillh.png")]`,
          alter: "Linkedin icon",
        },
        {
          link: apiData.instagram,
          ima1: `bg-[url("/instagram-line.png")]`,
          ima2: `hover:bg-[url("/instagram-lineh.png")]`,
          alter: "Instagram icon",
        },
        {
          link: apiData.facebook,
          ima1: `bg-[url("/facebook-fill.png")]`,
          ima2: `hover:bg-[url("/facebook-fill2.png")]`,
          alter: "Facebook icon",
        },
      ])
    : (socioArr = []);

  return (
    <section>
      {message == "success" ? (
        <div className={styles.soicioAccounts}>
          <div className={styles.soicioAccountsL}>
            {socioArr.length >= 1
              ? socioArr.map((so, i) => (
                  <a
                    href={so.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={i}
                  >
                    <div
                      className={` ${so.ima1} ${so.ima2} ${
                        so.link.length < 1 ? "hidden" : ""
                      } w-6 h-6 gird place-content-center`}
                    ></div>
                  </a>
                ))
              : ""}
            <p></p>
          </div>

          <div className={styles.soicioAccountsR}>
            <a
              href="mailto:Uthmanabdullahi2020@gmail.com?subject=Hi%20Abdullahi&body="
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{apiData.email}</span>
            </a>
            <p></p>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Socios;
