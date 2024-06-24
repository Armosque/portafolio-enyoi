import logo from "../assets/perfil11.jpg";
import CV from "../assets/CV-AML.pdf";
import { FaHtml5, FaPython, FaNode, FaRegFileExcel } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiJavascript, SiMongodb, SiScikitlearn, SiPowerbi, SiGooglebigquery } from "react-icons/si";
import { MdCss } from "react-icons/md";
import { TbSql } from "react-icons/tb";
import { Projects } from "../views/Projects";

export const Home = () => {
    return (
        <>
        <section className="pt-10 pb-16  md:flex justify-between items-center gap-8">
            <figure className="md:order-1 md:mx-auto">
            <img src={logo} alt="Profile" className="w-[50%] mx-auto    object-cover electric-border rounded-full my-10 transition-transform transform hover:scale-110" />
            </figure>

            <article className="text-center mt-8 w-[90%] md:text-left items-center px-4">
                <h1 className="text-3xl md:text-3xl">Hi, I am Ana Mosquera</h1>
                <p className="text-gray-color  md:text-3xl mt-3 mb-6 text-gradient h-auto font-extrabold">Web Developer & Data Analyst</p>

                <div className="flex flex-col justify-items-center mb-8">
                    <p className="text-base text-gray-color mx-auto w-[400] justify-items-center text-justify md:text-sm">
                    Apasionada total por la tecnología, la programación, los datos, la automatización, el No Code, la RPA, el Machine Learning y la aplicación de la IA en las soluciones empresariales.
                    Mi viaje hasta aquí ha sido impulsado por una curiosidad insaciable y una determinación constante por aprender y crecer.
                    </p>
                </div>

                <div className="flex flex-row auto-rows-[60px] gap-6 max-w-lg mx-auto md:mx-0">
                    <a href={CV} download="CV" className="bg-green-color flex items-center justify-center py-2 px-4  md:w-[50%] h-auto">
                    Download CV
                    </a>
                    <a href="/about" className="flex items-center justify-center border-white border py-2 px-4  md:w-[50%] h-auto">
                    Learn More
                    </a>
                </div>
            </article>
        </section>

        <section className="text-center">
            <h2 className="text-3xl  my-[20px]">Stack</h2>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
            <FaHtml5 size="60" className="text-orange-600" />
            <MdCss size="60" className="text-blue-600" />
            <SiJavascript size="60" className="text-yellow-500" />
            <RiReactjsFill size="60" className="text-blue-600" />
            <SiMongodb size="60" className="text-green-600" />
            <FaPython size="60" className="text-yellow-400" />
            <FaNode size="60" className="text-green-600" />
            <SiScikitlearn size="60" className="text-orange-600" />
            <SiPowerbi size="60" className="text-blue-600" />
            <FaRegFileExcel size="60" className="text-green-600" />
            <TbSql size="60" className="text-blue-600" />
            <SiGooglebigquery size="60" className="text-blue-600" />
            </div>
        </section>

        <section className="text-center mt-16">
            <Projects />
        </section>
        </>
    );
    };
