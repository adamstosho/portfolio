import React, { useEffect, useState } from "react";
import Headings from "./Headings";
import Image from "next/image";
import styles from "../styles/SomeProjects.module.css";
import Eachproject from "./Eachproject";
import { fetchDataByUrl } from "../Api_handling/GetPostAPI";
import { API_KEY, Image_base_url, base_url } from "../Api_handling/API_KEY";
import { Circles } from "react-loader-spinner";
import Modal from "react-modal";
import CommentModal from "../Components/Comment/CommentModal";

const SomeProjects = () => {
  const [apiData, setApiData] = useState([]);
  const [message, setMessage] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = (selectedProject) => {
    setModalIsOpen(true);
    setSelectedProject(selectedProject);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };
  const url = `${base_url}/projects/get_projects/?api_token=${API_KEY}&per_page=3&sort_by=created`;

  useEffect(() => {
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
    <div className={styles.somprojectW} id="work">
      <Headings
        num={"03."}
        text={"Some of my projects"}
        position={"start"}
        width={"w-0"}
      />
      <div className="h-auto w-full flex flex-col lg:space-y-20 space-y-10 ">
        {apiData.length !== 0 && message == "success" ? (
          apiData.map((a, i) => (
            <Eachproject
              key={i}
              onClick={openModal}
              project={a}
              // img={`${Image_base_url + a.image !== null ? a.image : "/rolex.png"}`}
              img={`${
                a.image !== null ? Image_base_url + a.image : "/rolex.png"
              }`}
              name={a.title}
              description={a.description}
              abs_pos={i % 2 !== 1 ? "right-8" : "left-8"}
              text_pos={"text-left"}
              lang1={a.frameworks[0]?.title}
              lang2={a.frameworks[1]?.title}
              lang3={a.frameworks[2]?.title}
              lang4={a.frameworks[3]?.title}
              lang5={a.frameworks[4]?.title}
              end={"justify-start"}
              flex_Dir={
                i % 2 == 0
                  ? "lg:flex-row flex-col-reverse"
                  : "lg:flex-row-reverse flex-col-reverse"
              }
              live={a.live_url}
              github={a.github_url}
              top={"top-[25%]"}
              projectId={a.id}
              commentDirection={i % 2 == 0 ? "items-end" : ""}
            />
          ))
        ) : (
          <div className="grid place-content-center">
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

        <section className="commentSections">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={false}
            contentLabel="Project Details"
            overlayClassName={""}
            style={{
              overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(17, 34, 64, 0.5)",
                backdropFilter: "blur(4px)",
                zIndex: "10",
              },
              content: {
                position: "absolute",
                top: "30px",
                left: "30px",
                right: "30px",
                bottom: "30px",
                border: "1px solid #64ffda",
                backgroundColor: "rgba(17, 34, 64, 1)",
                // overflow: 'hidden',
                // WebkitOverflowScrolling: 'touch',
                borderRadius: "4px",
                outline: "none",
                padding: "0px",
              },
            }}
          >
            {selectedProject && (
              <div className="h-full">
                <CommentModal
                  imgs={`${
                    selectedProject.image !== null
                      ? Image_base_url + selectedProject.image
                      : "/rolex.png"
                  }`}
                  projectId={selectedProject.id}
                  description={selectedProject.description}
                  name={selectedProject.title}
                  live={selectedProject.live_url}
                  github={selectedProject.github_url}
                />
                <button
                  onClick={closeModal}
                  className="fixed text-var_color hover:text-primary1 top-1 z-30 right-4 text-3xl font-bold"
                >
                  x
                </button>
              </div>
            )}
          </Modal>
         
        </section>
      </div>
    </div>
  );
};

export default SomeProjects;
