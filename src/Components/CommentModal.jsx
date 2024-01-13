import React, { useState } from "react";
import styles from "../styles/SomeProjects.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaCommentDots } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const CommentModal = ({
  name,
  description,
  lang1,
  lang2,
  lang3,
  lang4,
  lang5,
  abs_pos,
  end,
  text_pos,
  img,
  live,
  github,
  top,
  projectId,
}) => {
  const handleID = () => {
    localStorage.setItem("selectedID", projectId);
  };
const handleComment = () => {

}
  return (
    <div className={`w-full flex flex-col scale-[1] bg-primary_bg bg-[url("/arrowdown3.png")] h-auto overflow-x-hidden`}>
      <div
        className={`projectW flex w-full lg:gap-10 lg:space-y-0 space-y-4 gap-0 lg:h-[26rem]  h-auto lg:items-center lg:p-4 p-0 rounded-lg`}
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
              width={400}
              height={300}
              alt={"Project view"}
              className=""
            />
          </a>
        </div>
        {/* <input type="text" onChange={} /> */}
        <div
          className="lg:w-[45%] w-full relative lg:h-full h-auto flex flex-col justify-between lg:py-0 p-0"
          data-aos="flip-left"
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
              __html: description,
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
            <div className={` flex gap-4 ${end}`}>
              
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
                {/* <IoEyeOutline /> */}
                View
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="comment lg:w-[45%] pl-4">
        <input type="text" placeholder="Add a comment..." />
        <button onClick={handleComment}>Comment</button>
      </div>
    </div>
  );
};

export default CommentModal;
