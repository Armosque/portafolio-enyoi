import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import {Link } from "react-router-dom"


export const Footer = () => {
    return (
        <footer className="flex flex-col">

        <div className="flex justify-center items-center h-full gap-6 mt-[80px] pt-10">
        <Link to="https://www.linkedin.com/in/ana-mosquera-99aml/" target="_blank" rel="noopener noreferrer">
            <CiLinkedin size={50} className="text-blue-500 transition-transform transform hover:scale-110"/>
        </Link>
        <Link to="https://github.com/Armosque" target="_blank" rel="noopener noreferrer">
            <FaGithub size={50} className="text-black-500 transition-transform transform hover:scale-110"/>
        </Link>
        <Link to="https://api.whatsapp.com/send?phone=+573014349681&text=Hola%20estoy%20interesado%20en%20tu%20proyecto" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={50} className="text-green-500 transition-transform transform hover:scale-110"/>
        </Link>
        
        </div>
        <div className="flex justify-center items-center h-full gap-10 mt-5">
            <Link to="/">
                <h2 className="text-xl transition-transform transform hover:scale-110">Home</h2>
            </Link>
            <Link to="/about">
                <h2 className="text-xl transition-transform transform hover:scale-110">About</h2>
            </Link>
            <Link to="/contact">
                <h2 className="text-xl transition-transform transform hover:scale-110">Contact</h2>
            </Link>
            
        </div>
        <div>
            <p className="text-center mt-5 mb-5">Copyright © 2024 - Desing By AML</p>
        </div>
        
        </footer>
    )
}
