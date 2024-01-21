import React from "react";
import styles from "../../styles/Comment.module.css";
import { Circles } from "react-loader-spinner";

const EachComment = ({ apiData, Loading }) => {
  return (
    <div className={`${styles.displayComments}  w-full`}>
      {apiData !== null && apiData.length >= 1 && !Loading ? (
        apiData.map((a, i) => (
          <div
          key={i}
            className={`${styles.eachComment} flex items-start gap-2 border-b-[1px] border-b-blur_texts py-2 mb-2`}
          >
            <div
              className={`${styles.img}  border-primary1 border-[1.5px] border-b-[1px] border-b-blur_texts animate-pulse rounded-full bg-primary_bg2 text-white flex justify-center items-center lg:text-3xl `}
            >
              {a.name.slice(0, 1).toUpperCase()}
            </div>
            <div className="content">
              <div className="name flex gap-2">
                <strong className="font-[500]">
                  <span className="text-var_color hover:text-var_color/50"> {a.name}</span> {a.comment}
                </strong>{" "}
              </div>
              <div className="reply flex gap-4 lg:gap-8 pt-1">
                <p>{a.date.slice(0, 4)}</p>
                <p>Reply</p>
              </div>
            </div>
          </div>
        ))
      ) : Loading === true ? (
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
  );
};

export default EachComment;
