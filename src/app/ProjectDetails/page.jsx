"use client";
import { API_KEY, base_url } from "../../Api_handling/API_KEY";
import { fetchDataByUrl } from "../../Api_handling/GetPostAPI";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
const ProjectDetailsComponent = () => {
  const [apiData, setApiData] = useState([]);
  const [message, setMessage] = useState("");

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
              >
              </div>
            </section>
          </div>
          <section className="iframesection flex flex-col gap-5">
          <iframe
            className="w-[90vw] h-[90vh] rounded-xl border-[0.1px] border-primary1 bg-white"
            src={apiData.live_url}
            frameborder="0"
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
