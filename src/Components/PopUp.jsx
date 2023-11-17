"use client";
import React, { useState } from "react";

export default function PopUp() {
  const [pop, setPop] = useState(false);
  const [first, setfirst] = useState(true);

  setTimeout(() => {
    setPop(true);
  }, 120000);

  const handleCancel = () => {
    setPop(false);
    setfirst(false);
  };
  return (
    <div
      className={`fixed w-full h-full bg-primary_bg2/[1%] backdrop-blur-[5px] z-20 grid place-content-center px-2 duration-300 ease-in-out ${
        pop && first ? "scale-1" : "scale-0"
      }`}
    >
      {/* <ContactForm/> */}
      <div
        className="popW lg:w-80 w-[90%] m-auto lg:h-60 bg-primary_bg2 p-4 rounded-xl border-4 border-primary_bg2 border-dashed cursor-auto relative"
        onClick={() => setPop(true)}
      >
        <h1 className="text-center lg:text-xl text-lg cursor-auto text-[#99d9ee]">{`Do you mind saying Hi?, Let's talk business.`}</h1>
        <div>
          <div
               onClick={()=> handleCancel()}

            className="cursor-pointer absolute -right-2 -top-8 w-8 h-8 rounded-full flex justify-center items-center"
          >
            <p className="h-[2px] w-6 bg-primary1 origin-center absolute rotate-[135deg]"></p>
            <p className="h-[2px] w-6 bg-primary1 origin-center absolute -rotate-[135deg]"></p>
          </div>

          <div className="whatsapp flex gap-4 mt-8 justify-start items-center">
            <a
              href="mailto:Uthmanabdullahi2020@gmail.com?subject=Let%20do%20something%20together&body="
              className=""
            >
              <div
                className={` bg-[url("/whatsapp-line.png")] hover:bg-[url("/whatsapp-lineh.png")] w-6 h-6 gird place-content-center`}
              ></div>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=2349135619423&text=Hi%20Abdullahi!"
              target="blank"
              rel="noopener noreferrer"
              className="block w-[6.5rem] h-[2.5rem] bg-primary1 rounded-md relative "
            >
              <p className="text-primary1 bg-primary_bg2 border-[1px] rounded-md border-primary1 absolute w-full h-full grid place-content-center bottom-0 hover:bottom-1 right-0 hover:right-1">
                Say Hello
              </p>
            </a>
          </div>

          <div className="email flex gap-4 mt-8 justify-start items-center">
            <a href="mailto:Uthmanabdullahi2020@gnail.com?subject=Let%20do%20something%20together&body=">
              <div
                className={` bg-[url("/mail-line.png")] hover:bg-[url("/mail-lineh.png")] w-6 h-6 gird place-content-center`}
              ></div>
            </a>
            <a
              href="mailto:Uthmanabdullahi2020@gnail.com?subject=Let%20do%20something%20together&body="
              target="blank"
              className="block w-[6.5rem] h-[2.5rem] bg-primary1 rounded-md relative "
            >
              <p className="text-primary1 bg-primary_bg2 border-[1px] rounded-md border-primary1 absolute w-full h-full grid place-content-center bottom-0 hover:bottom-1 right-0 hover:right-1">
                Say Hello
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
