import React, { useEffect, useState } from "react";
import styles from "../styles/About.module.css";
import Headings from "./Headings";
import Image from "next/image";
import { API_KEY, Image_base_url, base_url } from "../Api_handling/API_KEY";
import { fetchDataByUrl } from "../Api_handling/GetPostAPI";
import Loading from "./Loading";

const About = () => {
  const [apiData, setApiData] = useState([]);
  const [message, setMessage] = useState("");
  const url = `${base_url}/author/get_profile/?api_token=${API_KEY}`;
  useEffect(() => {
    const fetchDataForPage1 = async () => {
      try {
        const result = await fetchDataByUrl(url);
        result.data !== undefined ? setApiData(result.data) : setApiData("");
        setMessage(result.status);
        localStorage.setItem("site_logo", apiData.site_logo);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataForPage1();
  }, []);
  return (
    <div>
      {message === "success" ? (
        <div id="aboutwrapper" className="pt-[5rem]">
          <Headings
            num={"01."}
            text={"About Me"}
            position={"start"}
            width={"w-[7rem]"}
          />
          <div id={styles.aboutW}>
            <div className={styles.aboutL}>
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                {apiData.work_description}
              </p>
              <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                {apiData.bio}
              </p>
              <p
                className={`${
                  apiData.qualification_highlight.split(";").length <= 0
                    ? "block"
                    : "hidden"
                }`}
              >
                {
                  "Here are some highlights of my qualifications and achievements:"
                }
              </p>

              <div className={styles.techs} id="experience">
                {apiData.qualification_highlight.split(";").map((q, i) => (
                  <p
                    key={i}
                    data-aos={i % 2 == 0 ? "fade-right" : "flip-right"}
                    className={`${q.length <= 0 ? "hidden" : "block"}`}
                  >
                    {q}
                  </p>
                ))}
              </div>
            </div>
            <div className={styles.aboutR}>
              <div className={styles.imgwrapper}>
                <Image
                  data-aos="flip-up"
                  src={apiData.Image ? Image_base_url + apiData.image : ""}
                  width={300}
                  height={400}
                  alt="My Profile"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default About;
