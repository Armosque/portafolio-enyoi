
import logo from '../assets/log3.jpeg'
import { Link } from 'react-router-dom'
export const NavBar = () => {
    return (
        <nav className="flex h-20 items-center justify-between">
            <Link to="/" className="w-1/2 max-w-[200px]">
            <div className="flex items-center gap-3">
                
                <img src={logo} alt="logo" className="w-43 h-10 transition-transform transform hover:scale-110"/>
                <h1 className="text-xl font-bold transition-transform transform hover:scale-110 md:text-3xl">Full Stack</h1>
            </div>
                
            </Link>
            <input type="checkbox" id="menu" className="peer/menu hidden" />
    <label htmlFor="menu" className="w-10 h-10 bg-open-menu bg-cover bg-center bg-green-color rounded-lg cursor-pointer peer-checked/menu:bg-close-menu transition-all z-40 md:hidden"></label>
    <ul className="text-xl absolute top-[70px]  px-[5%] gap-8 flex justify-between text-center mr-4 content-center justify-items-center  mb-10 clip-circle-0 peer-checked/menu:clip-circle-full transition-[clip-path] duration-500 md:clip-circle-full md:relative md:p-0 md:bg-transparent z-50">
        <Link to="about" className="transition-transform transform hover:scale-110 text-2xl">About Me</Link>
        <Link to="projects" className="transition-transform transform hover:scale-110 text-2xl  ">Projects</Link>
        <Link to="contact" className="transition-transform transform hover:scale-110  text-2xl ">Contact</Link>
    </ul>
        </nav>
    )
}
