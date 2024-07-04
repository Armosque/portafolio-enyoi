import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
//import img from "../assets/log3.jpeg"

export const Footer = () => {
  return (
    <>
      <footer className="mt-[150px] ">
        <div className="flex flex-row align-items-center justify-center mb-2 gap-4">
          <div className="flex justify-center gap-4 items-center">
            <Link
              to="https://www.linkedin.com/in/ana-mosquera-99aml/"
              target="_blank"
              rel="noopener noreferrer">
              <CiLinkedin
                size={30}
                className="transition-transform transform hover:scale-110"
              />
            </Link>
            <Link
              to="https://github.com/Armosque?tab=repositories"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub
                size={30}
                className="text-black-500 transition-transform transform hover:scale-110"
              />
            </Link>
            <Link
              to="https://api.whatsapp.com/send?phone=+573014349681&text=Hola%20estoy%20interesado%20en%20tu%20proyecto"
              target="_blank"
              rel="noopener noreferrer">
              <FaWhatsapp
                size={30}
                className="transition-transform transform hover:scale-110"
              />
            </Link>
          </div>
        </div>

        <div>
          <hr className="w-full mb-2" />
          <p className="text-center text-sm"> armosqueral@yahoo.es</p>

          <p className="text-center text-sm mb-[60px]">Copyright © 2024</p>
        </div>
      </footer>
    </>
  );
};
