"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/Contact.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postData } from "../Api_handling/GetPostAPI";
import { API_KEY, base_url } from "../Api_handling/API_KEY";
import { Circles } from "react-loader-spinner";

const Contact = () => {
  const [success, setSuccess] = useState("");
  const [errM, setErrm] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.id]: e.target.value });
  };

  const handleSubmits = async (e) => {
    e.preventDefault();
    const InputsFilled =
      details.firstname.length >= 3 &&
      details.lastname.length >= 3 &&
      details.message.length !== 0 &&
      details.email.length != 0;
    setShow(!InputsFilled);
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
        const url = `${base_url}/messages/add_message/`;
        const formData = new FormData();
        formData.append("api_token", API_KEY);
        formData.append("name", `${details.firstname} ${details.lastname}`);
        formData.append("email", details.email);
        formData.append("message", details.message);
        const response = await postData(url, formData);
        setSuccess(response.status);
        setErrm(response.message);
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
        setDetails({ firstname: "", lastname: "", email: "", message: "" });
      } catch (err) {
        setErrm(err.message);
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
        console.log(errM);
      }
    }
  };

  return (
    <div className={styles.contactW} id="contact">
      <p className="text-primary1 text-[13px]">
        <span className="text-primary1">04.</span> What&lsquo;s Next?
      </p>
      <h1 className="text-[2rem] font-bold text-var_color">Get In Touch</h1>
      <section className="contactFormWrapper lg:grid grid-cols-2 gap-x-10 flex flex-col-reverse">
        <form
          action=""
          method="post"
          className="contactForm flex flex-col items-center gap-6"
          onSubmit={handleSubmits}
        >
          <h1 className="text-[1.5rem] font-bold text-var_color">
            Drop a Message
          </h1>
          <div className={`${styles.eachInput}`}>
            <input
              required
              className=""
              type="text"
              id="firstname"
              onChange={handleChange}
              value={details.firstname}
              placeholder=""
              name="first name"
            />
            <label htmlFor="name" className="">
              First name
            </label>
          </div>
          <div className={`${styles.eachInput}`}>
            <input
              required
              type="text"
              id="lastname"
              onChange={handleChange}
              value={details.lastname}
              className=""
              placeholder=""
              name="last name"
            />
            <label htmlFor="name" className="">
              Last name
            </label>
          </div>
          <div className={`${styles.eachInput}`}>
            <input
              required
              type="email"
              id="email"
              onChange={handleChange}
              value={details.email}
              className=""
              placeholder=""
              name="email"
            />
            <label htmlFor="name" className="">
              E-mail
            </label>
          </div>
          <div className={`${styles.eachInput}`}>
            <textarea
              className="resize-none"
              required
              id="message"
              onChange={handleChange}
              value={details.message}
              name=""
              placeholder=""
            ></textarea>
            <label htmlFor="name" className="">
              Enter your message
            </label>
          </div>

          <button
            data-aos="fade-up"
            onClick={handleSubmits}
            className={`opacity-90`}
          >
            <p className={`${styles.sayHello} ${styles.send}`}>
              <span>
                {loading ? (
                  <Circles
                    height="20"
                    width="20"
                    color="#64ffda"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  />
                ) : (
                  "Submit"
                )}
              </span>
            </p>
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
        </form>
        <p
          className="lg:w-[100%] text-center flex justify-center items-start pt-20"
          data-aos="flip-up"
        >
          {
            "I am excited about the potential of working together to create stunning web experiences that not only meet but exceed expectations. If you would be interested in exploring a collaboration or discussing potential projects, I would be thrilled to set up a time to chat. Please let me know if you would like to schedule a call or if there's any other way I can provide additional information. Thank you🥰😍"
          }
        </p>
      </section>
      {/* <a
        href="https://api.whatsapp.com/send?phone=2349135619423&text=Hello%20I%20will%20like%20to%20Hire%20You"
        target="_blank"
        rel="noopener noreferrer"
        data-aos="fade-up"
      >
        <p className={styles.sayHello}></p>
      </a> */}
    </div>
  );
};

export default Contact;
// I am excited about the potential of working together to create stunning web experiences that not only meet but exceed expectations. If you would be interested in exploring a collaboration or discussing potential projects, I would be thrilled to set up a time to chat. Please let me know if you would like to schedule a call or if there's any other way I can provide additional information.

{
  /* <p className='lg:w-[60%] text-center'> I&rsquo;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&lsquo;ll try my best to get back to you!</p> */
}
