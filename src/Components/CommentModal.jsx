import React, { useEffect, useState } from "react";
import styles from "../styles/SomeProjects.module.css";
import Image from "next/image";
import Link from "next/link";
import "../styles/SomeProjects.module.css";
import { API_KEY } from "@/Api_handling/API_KEY";
import { fetchDataByUrl, postData } from "@/Api_handling/GetPostAPI";
import { ToastContainer, toast } from "react-toastify";
import { Circles } from "react-loader-spinner";
import "../styles/Comment.module.css"
const CommentModal = ({ name, description, imgs, live, github, projectId }) => {
  const [apiData, setApiData] = useState(null);
  const [message, setMessage] = useState(null);
  const [Loading, setLoading] = useState(false);
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
  const handleComment = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("api_token", API_KEY);
    formData.append("project_id", projectId); // integer
    formData.append("name", userComment.name);
    formData.append("email", userComment.email);
    formData.append("comment", userComment.comment);
    formData.append("star", 4);
    const url =
      "https://riganapi.pythonanywhere.com/api/v2/comments/add_comment/";

    const InputsFilled =
      userComment.name.length >= 3 &&
      userComment.email.length >= 3 &&
      userComment.comment.length !== 0;
    InputsFilled
      ? ""
      : toast.warn("All inputs are required", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
    if (InputsFilled) {
      try {
        setLoading(true);
        const response = await postData(url, formData);
        // setSuccess(response.status);
        // setErrm(response.message);
        setLoading(false);
        toast.success("Message sent successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setuserComment({ name: "", email: "", comment: "" });
      } catch (err) {
        setLoading(false);
        toast.error("Check your connection!🧐", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  const GetComment = () => {};
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
  console.log(apiData);

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
          className={`description absolute z-10 w-[90%] bg-primary_bg2 backdrop-blur-lg text-[15px] p-4 rounded-lg `}
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

        <div className="displayComments h-[60%] overflow-y-scroll  w-full">
          {apiData !== null && apiData.length >= 1 && !Loading ? (
            apiData.map((a) => (
              <div className="eachComment flex items-center gap-2 border-b-[1px] border-b-blur_texts pb-2 mb-2">
                <div className="img h-12 w-12 border-primary1 border-[1.5px] border-b-[1px] border-b-blur_texts animate-pulse rounded-full bg-primary_bg2 text-white flex justify-center items-center text-3xl">
                  {a.name.slice(0, 1).toUpperCase()}
                </div>
                <div className="content">
                  <div className="name flex gap-2">
                    <strong className="text-var_color hover:text-var_color/50">
                      {a.name}
                    </strong>{" "}
                    <p className="whitespace-normal"> {a.comment}</p>
                  </div>
                  <div className="reply flex w-1/2 justify-between">
                    <p>{a.date.slice(0, 10)}</p>
                    <p>Reply</p>
                  </div>
                </div>
              </div>
            ))
          ) : !Loading ? (
            <div className="h-full w-full flex justify-center items-center">
               <Circles
                    height="20"
                    width="20"
                    color="#64ffda"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
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
        <div className="flex justify-between flex-wrap items-center border-t-[1px] border-blur_texts pt-2 px-2  ">
          <input
            required
            type="text"
            id="name"
            onChange={handleChange}
            value={userComment.name}
            className="outline-none border-none bg-transparent"
            placeholder="Enter name"
          />
          <input
            required
            type="email"
            id="email"
            value={userComment.email}
            onChange={handleChange}
            className="outline-none border-none bg-transparent"
            placeholder="Enter your email"
          />
          <input
            required
            type="text"
            id="comment"
            value={userComment.comment}
            onChange={handleChange}
            className="outline-none border-none bg-transparent"
            placeholder="Add a comment..."
          />
          <button onClick={handleComment}>
            Comment
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default CommentModal;
