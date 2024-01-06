
import { API_KEY, base_url } from "@/Api_handling/API_KEY";
import { fetchDataByUrl } from "@/Api_handling/GetPostAPI";
import React, { useEffect, useState } from "react";
const ProjectDetailsComponent = ({projectId}) => {
    const [apiData, setApiData] = useState([]);
    const [message, setMessage] = useState("");
    const url = `${base_url}projects/get_project/?api_token=${API_KEY}&project_id=${projectId}`

    useEffect(() => {
      const fetchDataForPage1 = async () => {
        try {
          const result = await fetchDataByUrl(url);
          result.data !== undefined ? setApiData(result) : setApiData("");
          setMessage(result.status);
          alert("SUccessss")
        } catch (error) {
          console.log(error);
          alert("ERRRORR")
        }
      };
  
      fetchDataForPage1();
    }, [projectId]);
    console.log(apiData)
  return (
    <div>
      <div className='bg-primary_bg h-auto w-full bg-[url("/arrowdown3.png")] flex flex-col items-center gap-8 py-6'>
        <h1 className="text-primary1 text-4xl font-bold">Rolex WristWatch</h1>
        <div className="w-full">
          <h3>Used Technology</h3>
          <section className="grid grid-cols-2 justify-center items-center">
            <ul className="grid grid-cols-2 gap-y-2 w-3/4">
              <li>
                <span className="text-primary1 font-bold text-xl">▹</span> NetJs
              </li>
              <li>
                <span className="text-primary1 font-bold text-xl">▹</span>{" "}
                JavaScript (ES6)
              </li>
              <li>
                <span className="text-primary1 font-bold text-xl">▹</span>{" "}
                Tailwind css
              </li>
              <li>
                <span className="text-primary1 font-bold text-xl">▹</span>{" "}
                Tailwind css
              </li>
            </ul>
            <div>
              WebOpt is a dynamic web application developed for Startup to
              enhance user experience and engagement. By leveraging modern
              front-end technologies and responsive design, the project aimed to
              provide seamless access and optimal usability across devices. This
              project was Implemented in collaboration with other developers,
              which I worked on the whole FrontEnd
            </div>
          </section>
        </div>
        <iframe
          className="w-[80vw] h-[90vh]  rounded-xl border-[0.1px] border-primary1"
          src=""
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default ProjectDetailsComponent;