import React, { useState } from "react";
import styles from "../styles/SomeProjects.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaCommentDots } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const Eachproject = ({
  onClick,
  project,
  name,
  description,
  lang1,
  lang2,
  lang3,
  lang4,
  lang5,
  flex_Dir,
  abs_pos,
  end,
  text_pos,
  img,
  live,
  github,
  top,
  projectId,
  commentDirection,
  bgimg
}) => {
  const handleID = () => {
    localStorage.setItem("selectedID", projectId);
  };
  const handleComment = async () => {
    // process.env.API_KEY
    // const formData = new FormData();

    // try {
    //   const res  = await 'https://riganapi.pythonanywhere.com/api/v2/comments/add_comments';
    // } catch (error) {
    //   console.log(error)
    // }
  };
  return (
    <div className={`w-full flex flex-col scale-[1] ${commentDirection}`}>
      <div
        className={`projectW flex justify-between w-full lg:gap-10 lg:space-y-0 space-y-4 gap-0 lg:h-[26rem]  h-auto lg:items-center lg:p-4 p-0 rounded-lg ${flex_Dir}`}
      >
        <div className={styles.projectImg} data-aos="fade-right">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full lg:h-full h-[15rem] lg:mt-0 mt-4"
          >
            <Image
              src={img}
              width={300}
              height={300}
              alt={"Project view"}
              className=""
            />
          </a>
        </div>
        {/* <input type="text" onChange={} /> */}
        <div
          className={`lg:w-[45%] h-full bg-cover bg-no-repeat bg-center lg:bg-none ${bgimg}`}
          data-aos="flip-left"
        >
          <div
            className={`lg:p-0 p-4 lg:bg-transparent lg:backdrop-blur-none bg-primary1/20 backdrop-blur-sm w-full relative lg:h-full h-auto flex flex-col justify-between`}
          >
            <div className="projectTitle lg:px-8">
              <p className={`${text_pos} text-primary1 text-[13px] mb-2`}>
                Feautured Project
              </p>
              <h1
                className={`text-var_color font-[700] ${text_pos} text-[1.5rem] lg:mb-0 mb-4`}
              >
                {name}
              </h1>
            </div>
            <div
              className={`description lg:w-[110%] w-full bg-primary_bg2 lg:absolute ${abs_pos} ${top} text-[15px] p-4 rounded-lg `}
              contentEditable="false"
              dangerouslySetInnerHTML={{
                __html:
                  description.length > 200
                    ? description.slice(0, 200) + "..."
                    : description,
              }}
            ></div>
            <div className="flex flex-col gap-4">
              <div className="materialUsed text-[13px] flex justify-around lg:mt-0 mt-2">
                <p>{lang1}</p>
                <p>{lang2}</p>
                <p>{lang3}</p>
                <p>{lang4}</p>
                <p>{lang5}</p>
              </div>
              <div className={`lg:px-8 flex gap-4 ${end}`}>
                <button className="flex gap-6" onClick={() => onClick(project)}>
                  <FaCommentDots size={28} />
                </button>
                <span className="flex-1"></span>

                <a href={live} target="_blank">
                  <div
                    className={`bg-[url(/live1.png)] hover:bg-[url(/live2.png)] w-8 h-8 gird place-content-center bg-cover`}
                  ></div>
                </a>
                <a href={github} target="_blank">
                  <div
                    className={`bg-[url(/github-line.png)] hover:bg-[url(/github-lineh.png)] w-8 h-8 gird place-content-center bg-cover`}
                  ></div>
                </a>
                <Link
                  className={styles.views}
                  onClick={handleID}
                  href={`/ProjectDetails`}
                >
                  <p className="w-6 h-6 bg-center bg-cover "></p>
                  View
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="comment lg:w-[45%] pl-4">
      
      <p>View all 700 comments</p>

      <input type="text" placeholder="Add a comment..." />
      <button onClick={handleComment}>Comment</button>
    </div> */}
    </div>
  );
};

export default Eachproject;
