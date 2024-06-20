
import logo from '../assets/log3.jpeg'
import { Link } from 'react-router-dom'
export const NavBar = () => {
    return (
        <nav className="flex h-20 items-center justify-between">
            <a href="/" className="w-1/2 max-w-[200px]">
            <div className="flex items-center gap-3">
                
                <img src={logo} alt="logo" className="w-43 h-10"/>
                <h1 className="text-3xl font-bold">Full Stack</h1>
            </div>
                
            </a>
            <input type="checkbox" id="menu" className="peer/menu hidden" />
            <label htmlFor="menu" className="w-10 h-10 bg-open-menu bg-cover bg-center bg-green-color rounded-lg cursor-pointer peer-checked/menu:bg-close-menu transition-all z-40 md:hidden"></label>
            <ul className=" text-xl fixed inset-0 bg-menu-color px-[5%] grid gap-10 auto-rows-max content-center justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full transition-[clip-path] duration-500 md:clip-circle-full md:relative md:grid-flow-col md:p-0 md:bg-transparent">
            <Link to="/about">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            </ul>
        </nav>
    )
}
