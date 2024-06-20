import logo from "../assets/perfil2.jpeg"
import CV from "../assets/CV-AML.pdf"
import { FaHtml5,  FaPython,FaNode, FaRegFileExcel} from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiJavascript, SiMongodb, SiScikitlearn, SiPowerbi,  SiGooglebigquery  } from "react-icons/si";
import { MdCss } from "react-icons/md";
import { TbSql } from "react-icons/tb";



export const Home = () => {
    return (
        <>
        <section className="pt-10 pb-16 md:flex justify-between items-center gab-8">
        <figure className="md:order-1">
            <img src={logo} alt="" className="w-72 aspect-square object-cover rounded-full max-w-sm mx-auto" />
        </figure>

        <article className="text-center mt-8 md:w-1/2 md:text-left items-center">
            <h1 className="text-4xl md:text-5xl">Hi, I am Ana Mosquera</h1>
            <p className="text-gray-color text-4xl mt-3 mb-6">Web Developer & Data Analyst</p>
            <p className="text-2xl  text-gray-color pb-10">Apasionada total por la tecnología, la programación, los datos, la automatización, el No Code, la RPA, el Machine Learning y la aplicación de la IA en las soluciones empresariales. 
            </p> 
            <p className="text-2xl  text-gray-color pb-10"> Mi viaje hasta aquí ha sido impulsado por una curiosidad insaciable y una determinación constante por aprender y crecer.</p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] auto-rows-[60px] gap-8 max-w-lg mx-auto md:mx-0">
                <a href={CV} download="CV" className="bg-green-color flex items-center justify-center">Download CV</a>
                <a href="/about" className="flex items-center justify-center border-white border">Learn More</a>
            </div>
        </article>
        </section>
        <section className="py-16 text-center">
                <h2 className="text-4xl md:text-5xl pb-12">Stack</h2>
        
                <div>
                    <section className="w-full mx-auto  flex flex-wrap  gap-4">
                        <FaHtml5 size="80" className="text-orange-600 rounded-full"/>
                        <MdCss size="80" className="text-blue-600" />
                        <SiJavascript size="80" className="text-yellow-500 rounded-3xl"/>
                        <RiReactjsFill size="80" className="text-blue-600" />
                        <SiMongodb size="80" className="text-green-600" />
                        <FaPython size="80" className="text-yellow-400" />
                        <FaNode size="90" className="text-green-600" />
                        <SiScikitlearn size="80" className="text-orange-600" />
                        <SiPowerbi size="80" className="text-blue-600" />
                        <FaRegFileExcel size="80" className="text-green-600" />
                        <TbSql size="80" className="text-blue-600" />
                        <SiGooglebigquery size="80" className="text-blue-600" />
    
                    </section>
                </div>

            </section>
            <section className="py-16 text-center">
                <h2 className="text-4xl md:text-5xl pb-12">Projects</h2>
        
                <div>
                    <section className="w-full mx-auto  flex flex-wrap  gap-4">
                        
                        
    
                    </section>
                </div>

            </section>


        </>
    )
}
