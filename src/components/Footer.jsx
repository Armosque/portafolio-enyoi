import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import {Link } from "react-router-dom"
//import img from "../assets/log3.jpeg"


export const Footer = () => {
    return (
        <>
            
                <footer className="mt-[150px] ">
                
                    <div className="flex flex-row align-items-center justify-center mb-2 gap-4">
                        {/*<div className="flex justify-center gap-4 ">
                            <img src={img} alt="logo" className="w-[25px] rounded-full"/>
                            <h1>GET IN TOUCH</h1>
                        </div>*/}
                        <div className="flex justify-center gap-4 items-center">
                            <Link to="https://www.linkedin.com/in/ana-mosquera-99aml/" target="_blank" rel="noopener noreferrer">
                                <CiLinkedin size={30} className="text-blue-500 transition-transform transform hover:scale-110"/>
                            </Link>
                            <Link to="https://github.com/Armosque" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={30} className="text-black-500 transition-transform transform hover:scale-110"/>
                            </Link>
                            <Link to="https://api.whatsapp.com/send?phone=+573014349681&text=Hola%20estoy%20interesado%20en%20tu%20proyecto" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp size={30} className="text-green-500 transition-transform transform hover:scale-110"/>
                            </Link>

                        </div>
                        {/*<div className="">
                            <Link to="/">
                                <h2 className="text-sm transition-transform transform hover:scale-110">Home</h2>
                            </Link>
                            <Link to="/about">
                                <h2 className="text-sm transition-transform transform hover:scale-110">About</h2>
                            </Link>
                            <Link to="/contact">
                                <h2 className="text-sm transition-transform transform hover:scale-110">Contact</h2>
                            </Link>
                            
                        </div>*/}
                    </div>
                
                    <div>
                        <hr className="w-full mb-2"/>
                        <p className="text-center text-sm"> Diseñado por Ana Mosquera</p>
                       
                        <p className="text-center text-sm mb-[20px]">Copyright © 2024
                        </p>
                    </div>
                    


                    </footer>
                    
            </>
    )
}
