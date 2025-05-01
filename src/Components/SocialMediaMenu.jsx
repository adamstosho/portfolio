import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaMailBulk,
} from "react-icons/fa";

export default function SocialRadialMenu({ apiData }) {
  const [isOpen, setIsOpen] = useState(false);
  const icons = [
    { icon: <FaTwitter />, link: apiData.twitter },
    { icon: <FaGithub />, link: apiData.github },
    { icon: <FaMailBulk />, link: apiData.email },
    { icon: <FaLinkedin />, link: apiData.linkedin },
    { icon: <FaInstagram/>, link: apiData.instagram },
  ];

  const radius = 70; // reduced for tighter spacing
  return (
    <div className="fixed bottom-8 transform -translate-x-1/2 z-50">
      <div className="relative w-16 h-16">
        <AnimatePresence>
          {isOpen &&
            icons.map((item, index) => {
              const angle = Math.PI * (index / (icons.length - 1)); // 0 to π (180°)
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * -radius; // negative to move upward

              return (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0.3 }}
                  animate={{ x, y, opacity: 1, scale: 1 }}
                  exit={{ x: 0, y: 0, opacity: 0, scale: 0.3 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary_bg2 border-[1px] border-primary1 text-blue-600 p-3 rounded-full shadow-md hover:scale-110 transition-all duration-500`}
                >
                  {item.icon}
                </motion.a>
              );
            })}
        </AnimatePresence>

        {/* Central Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            isOpen ? "rotate-[315deg]" : "rotate-0"
          } transition-all ease-out duration-500 absolute grid place-content-center w-14 h-14 border-primary1 border-[2px] text-xs left-6 top-6 rounded-full text-white shadow-lg bg-primary_bg2`}
        >
          <p className="h-1 w-6 bg-primary1 rotate-90 relative bottom-[0.5px]"></p>
          <p className="h-1 w-6 bg-primary1 rotate-180 bottom-[4px] relative"></p>
        </button>
      </div>
    </div>
  );
}
