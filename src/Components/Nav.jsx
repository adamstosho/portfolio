"use client";
import Aos from "aos";
import styles from "../styles/Nav.module.css";
import Logo from "./Logo";
import React, { useState } from "react";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function Nav({ home }) {
  const [visible, setVisible] = useState(false);
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    let prevS = window.pageYOffset;
    window.addEventListener("scroll", () => {
      let currenSc = pageYOffset;
      prevS > currenSc ? setVisible(false) : setVisible(true);
      prevS = currenSc;
    });
    Aos.init({
      duration: 600,
      offset: 0,
    });
  }, []);

  const data = [
    {
      num: "01.",
      nav: "About",
      navigator: "#aboutwrapper",
    },
    {
      num: "02.",
      nav: "Expertise",
      navigator: "#expertise",
    },
    {
      num: "03.",
      nav: "Project",
      navigator: "#work",
    },
    {
      num: "04.",
      nav: "Contact",
      navigator: "#contact",
    },
  ];
  return (
    <div className={`${styles.navW} ${visible ? styles.disappear : ""}`}>
      <a
        href="https://github.com/intelligence247"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="zoom-in-down"
      >
        <Logo />
      </a>

      <span className={styles.grow}></span>

      <div className={`${styles.navR} ${toggle && styles.active}`}>
        {data.map((d, i) => (
          <div
            className={`${styles.each}`}
            onClick={() => setToggle(!toggle)}
            key={i}
            data-aos="zoom-in-down"
            offset={0}
          >
            <a href={home ? "/" : d.navigator}>
              <span>{d.num}</span>
              <p>{d.nav}</p>
            </a>
          </div>
        ))}
        <a
          href="https://drive.google.com/file/d/1aNvDRa2Wjm0NWd0I37-iVYY7KIeNwp_v/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={styles.resume}
            onClick={() => setToggle(!toggle)}
            data-aos="zoom-in-down"
          ></div>
        </a>
      </div>

      <div
        className={`${styles.navHarmburger} ${
          !toggle && styles.activeHarmburger
        }`}
        onClick={() => setToggle(!toggle)}
      >
        <p></p>
        <p></p>
        <p></p>
      </div>

      <div
        className={`${styles.overlay} ${
          toggle && styles.activeOverlay
        } bg-primary_bg2/20 backdrop-blur-xl z-10`}
        onClick={() => setToggle(!toggle)}
      ></div>
    </div>
  );
}
