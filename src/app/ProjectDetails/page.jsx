"use client";
import EachComment from "@/Components/Comment/EachComment";
import { API_KEY, base_url } from "../../Api_handling/API_KEY";
import { fetchDataByUrl } from "../../Api_handling/GetPostAPI";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
const ProjectDetailsComponent = () => {
  const [apiData, setApiData] = useState([]);
  const [message, setMessage] = useState("");
  const [CommentapiData, setCommentApiData] = useState(null);
  const [Loading, setLoading] = useState(false);

  const [userComment, setuserComment] = useState({
    name: "",
    email: "",
    comment: "",
  });
  useEffect(() => {
    const selectedID = localStorage.getItem("selectedID");
    const url = `${base_url}projects/get_project/?api_token=${API_KEY}&project_id=${selectedID}`;
    const fetchDataForPage1 = async () => {
      try {
        const result = await fetchDataByUrl(url);
        result.data !== undefined ? setApiData(result.data) : setApiData("");
        setMessage(result.status);
        console.log(result.data.length);
      } catch (error) {
        setMessage(error.message);
        console.log(error);
      }
    };

    fetchDataForPage1();
  }, []);

  const handleComment = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("api_token", API_KEY);
    formData.append("project_id", selectedID); // integer
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
        // setLoading(false)
        const response = await postData(url, formData);
        // setSuccess(response.status);
        // setErrm(response.message);
        // setLoading(false);
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

  const handleChange = (e) => {
    setuserComment({ ...userComment, [e.target.id]: e.target.value });
  };

  return (
    <div className='h-screen w-full bg-primary_bg bg-[url("/arrowdown3.png")]'>
      {message === "success" ? (
        <div className='h-auto w-full bg-primary_bg bg-[url("/arrowdown3.png")] flex flex-col items-center gap-8 py-6 px-20'>
          <h1 className="text-primary1 text-4xl font-bold">{apiData.title}</h1>
          <div className="w-full">
            <h3>Used Technology</h3>
            <section className="grid grid-cols-2 justify-center items-center">
              <ul className="grid grid-cols-2 gap-y-2 w-3/4">
                {apiData?.frameworks.map((f, i) => (
                  <li key={i}>
                    <span className="text-primary1 font-bold text-xl">▹</span>{" "}
                    {f.title}
                  </li>
                ))}
              </ul>
              <div
                contentEditable="false"
                dangerouslySetInnerHTML={{
                  __html: apiData.description,
                }}
              ></div>
            </section>
          </div>
          <section className="iframesection flex flex-col gap-5">
            <iframe
              className="lg:w-[90vw] lg:h-[90vh] h-screen lg:max-w-[1024px] max-w-[645px] w-screen rounded-xl border-[0.1px] border-primary1 bg-white"
              src={apiData.live_url}
              frameborder="0"
              width="100%"
              // style={{maxWidth:"600px"}}
              
            ></iframe>
            <div className={`clickales flex gap-4 justify-end`}>
              <a href={apiData.live_url} target="_blank">
                <div
                  className={`bg-[url(/live1.png)] hover:bg-[url(/live2.png)] w-8 h-8 grid place-content-center bg-cover`}
                ></div>
              </a>
              <a href={apiData.github_url} target="_blank">
                <div
                  className={`bg-[url(/github-line.png)] hover:bg-[url(/github-lineh.png)] w-8 h-8 grid place-content-center bg-cover`}
                ></div>
              </a>
            </div>
          </section>
          <section className="commentSection">
            {/* <EachComment/> */}
            <div className="flex flex-col gap-3 border-t-[1px] border-blur_texts pt-2 px-2  ">
              <div className="inputTop flex  items-center justify-around">
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
              <div className="inputbottom flex  items-center gap-6">
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
          </section>
        </div>
      ) : message === "Failed to fetch" ? (
        <div>
          <div className="h-screen w-full overflow-hidden flex justify-center items-center flex-col px-5 text-center">
            Please check your network connection or{" "}
            <Link href={"/"} className="text-primary1">
              Go Back Home
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid place-content-center h-screen">
          <div className="lg:block hidden">
            <Circles
              height="80"
              width="80"
              color="#64ffda"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
          <div className="lg:hidden block">
            <Circles
              height="50"
              width="50"
              color="#64ffda"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailsComponent;
