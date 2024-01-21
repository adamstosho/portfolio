import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { API_KEY } from "@/Api_handling/API_KEY";
import { fetchDataByUrl, postData } from "@/Api_handling/GetPostAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Circles } from "react-loader-spinner";
import styles from "../../styles/Comment.module.css";
import EachComment from "./EachComment";


const CommentModal = ({ name, description, imgs, live, github, projectId }) => {
  const [apiData, setApiData] = useState(null);
  const [message, setMessage] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [Loading2, setLoading2] = useState(false);

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
    setLoading(true);

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
        const response = await postData(url, formData);
        toast.success("Comment sent successfully", {
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
        setApiData((apiData) => [response.data, ...apiData]);
      } catch (err) {
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

  useEffect(() => {
    const url = `https://riganapi.pythonanywhere.com/api/v2/comments/get_comments/?project_id=${projectId}&api_token=${API_KEY}`;
    const fetchDataForPage1 = async () => {
      setLoading2(true);
      try {
        const result = await fetchDataByUrl(url);
        result.data !== undefined ? setApiData(result.data) : setApiData("");
        setMessage(result.status);
        setLoading2(false);
      } catch (error) {
        setLoading2(false);
        console.log(error);
      }
    };
    fetchDataForPage1();
  }, []);

  return (
    <div
      className={`projectW flex w-full lg:gap-10 lg:space-y-0 space-y-4 gap-0 h-full lg:items-center lg:p-4 p-0 rounded-lg bg-primary_bg bg-[url("/arrowdown3.png")] overflow-hidden`}
    >
      <div
        className={`${styles.projectImg} relative h-full w-[50%] lg:flex hidden justify-center items-center bg-[url(https://riganapi.pythonanywhere.com${imgs})] bg-cover bg-center bg-no-repeat lg:px-6 h-full`}
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
          className="w-[100%] h-[90%]"
        />
      </div>
      <div
        className="lg:w-[50%] lg:px-0 px-4 w-full lg:border-l-[1px] border-l-blur_texts relative lg:h-full flex flex-col justify-between lg:py-0 p-0 lg:pl-8"
        data-aos="flip-left"
      >
        <div className="projectTitle border-b-[1px] border-blur_texts lg:block hidden">
          <p className={`text-primary1 text-[13px]`}>Feautured Project</p>
          <h1
            className={`text-var_color font-[700] text-[1.5rem] lg:mb-0 mb-4`}
          >
            {name}
          </h1>
        </div>
        <header className="text-center border-b-[1px] mb-4 border-var_color w-full ">
          Comments
        </header>

        <EachComment apiData={apiData} Loading={Loading2} />
        <div className="flex lg:flex-row justify-between items-center flex-col py-2.5 border-t-[1px] border-blur_texts">
          <p>0 stars</p>
          <div
            className={` lg:flex hidden justify-center items-center  lg:gap-4`}
          >
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
              <p className="w-6 h-0 bg-center bg-cover "></p>
              View
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t-[1px] border-blur_texts pt-2 px-2  ">
          <div className="inputTop flex lg:flex-row flex-col lg:gap-0 gap-2 items-center justify-around">
            <input
              required
              type="text"
              id="name"
              onChange={handleChange}
              value={userComment.name}
              className="outline-[1px] focus:text-primary1 h-8 pl-2  border-var_color rounded-lg  border-[1px] focus:border-none bg-transparent"
              placeholder="Enter name"
            />
            <input
              required
              type="email"
              id="email"
              value={userComment.email}
              onChange={handleChange}
              className="outline-[1px] focus:text-primary1 h-8 pl-2  border-var_color rounded-lg  border-[1px] focus:border-none bg-transparent"
              placeholder="Enter your email"
            />
          </div>
          <div className="inputbottom flex lg:flex-row flex-col   items-center lg:gap-6 gap-2">
            <textarea
              required
              type="text"
              id="comment"
              value={userComment.comment}
              onChange={handleChange}
              className="resize-none w-full outline-[1px] focus:text-primary1 h-11 pl-2  border-var_color rounded-lg  border-[1px] focus:border-none bg-transparent"
              placeholder="Add a comment..."
            />
            <button onClick={handleComment}>
              Post
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
    </div>
  );
};

export default CommentModal;
