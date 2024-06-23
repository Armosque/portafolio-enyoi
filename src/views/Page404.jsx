
import { Link } from "react-router-dom"
import img from "../assets/404.jpeg"
export const Page404 = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-20 ">
            <Link to="/" className="link-button">
                <button className=" hover:bg-blue-700 text-white font-bold text-lg py-4 px-4 rounded">Return to Home</button>
            </Link>
            <img src={img} alt="404" className="w-[60%]"/>
        
        </div>
    )
}
