import React, { useEffect, useState } from "react";
import styles from "../styles/SomeProjects.module.css";
import Image from "next/image";
import Link from "next/link";
import "../styles/SomeProjects.module.css";
import { API_KEY } from "@/Api_handling/API_KEY";
import { fetchDataByUrl } from "@/Api_handling/GetPostAPI";

const CommentModal = ({ name, description, imgs, live, github, projectId }) => {
  const [apiData, setApiData] = useState(null);
  const [message, setMessage] = useState(null);

  const [userComment, setuserComment] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleID = () => {
    localStorage.setItem("selectedID", projectId);
  };
  const handleChange = (e) => {
    setuserComment({ ...userComment, [e.target.id]: e.target.value });
  };
  console.log(userComment)
  const handleComment = () => {
    const formData = new FormData();
    formData.append("api_token", API_KEY);
    formData.append("project_id", projectId); // integer
    formData.append("name", "John");
    formData.append("email", "john@gmail.com");
    formData.append("comment", "user-comment");
    formData.append("star", 4);
    const url =
      "https://riganapi.pythonanywhere.com/api/v2/comments/add_comment/";
  };

  const GetComment = () => {};
  console.log("Projesdjna", projectId);
  useEffect(() => {
    const url = `https://riganapi.pythonanywhere.com/api/v2/comments/get_comments/?project_id=${projectId}&api_token=${API_KEY}`;
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
    // <div
    //   className={`w-full h-full flex flex-col bg-primary_bg bg-[url("/arrowdown3.png")] overflow-x-hidden`}
    // >
    <div
      className={`projectW flex w-full lg:gap-10 lg:space-y-0 space-y-4 gap-0 h-full lg:items-center lg:p-4 p-0 rounded-lg bg-primary_bg bg-[url("/arrowdown3.png")]`}
    >
      <div
        className={`${styles.projectImg} bg-[url(https://riganapi.pythonanywhere.com${imgs})] bg-cover bg-center bg-no-repeat lg:px-6 h-full`}
        data-aos="fade-right"
      >
        <div
          className={`description absolute z-10 w-[90%] bg-primary_bg2/30 backdrop-blur-lg text-[15px] p-4 rounded-lg `}
          contentEditable="false"
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></div>
        <Image
          src={imgs}
          width={400}
          height={300}
          alt={"Project view"}
          className=""
        />
      </div>
      <div
        className="lg:w-[50%] lg:border-l-[1px] border-l-blur_texts w-full relative lg:h-full flex flex-col justify-between lg:py-0 p-0 lg:pl-8"
        data-aos="flip-left"
      >
        <div className="projectTitle border-b-[1px] border-blur_texts">
          <p className={`text-primary1 text-[13px]`}>Feautured Project</p>
          <h1
            className={`text-var_color font-[700] text-[1.5rem] lg:mb-0 mb-4`}
          >
            {name}
          </h1>
        </div>

        <div className="displayComments h-[60%]">
          {apiData == !null ? (
            <div className="eachComment">
              <div className="name"></div>
            </div>
          ) : (
            <div className="h-full flex justify-center items-center flex-col gap-0">
              <h1 className="font-bold lg:text-xl text-var_color">
                No comments yet.
              </h1>
              <p className="text-blur_texts">Start the conversations!.</p>
            </div>
          )}
          <div className="eachComment">
            <div className="name"></div>
          </div>
        </div>
        <div className="flex lg:flex-row justify-between items-center flex-col pt-2.5 border-t-[1px] border-blur_texts">
          <p>0 stars</p>
          <div className={` flex gap-4`}>
            <span className="flex-1"></span>

            <a href={live} target="_blank">
              <div
                className={`bg-[url(/live1.png)] hover:bg-[url(/live2.png)] w-6 h-6 gird place-content-center bg-cover`}
              ></div>
            </a>
            <a href={github} target="_blank">
              <div
                className={`bg-[url(/github-line.png)] hover:bg-[url(/github-lineh.png)] w-6 h-6 gird place-content-center bg-cover`}
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
        <div className="flex justify-between items-center border-t-[1px] border-blur_texts pt-2 px-2  ">
          <input
            type="text"
            id="name"
            onChange={handleChange}
            value={userComment.name}

            className="outline-none border-none bg-transparent"
            placeholder="Add a comment..."
          />
          <input
            type="email"
            id="email"
            value={userComment.email}
            onChange={handleChange}
            className="outline-none border-none bg-transparent"
            placeholder="Add a comment..."
          />
          <input
            type="text"
            id="comment"
            value={userComment.comment}
            onChange={handleChange}
            className="outline-none border-none bg-transparent"
            placeholder="Add a comment..."
          />
          <button onClick={handleComment}>Comment</button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default CommentModal;
