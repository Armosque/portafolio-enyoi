import "./AboutMe.css"
import { MdOutlineCastForEducation } from "react-icons/md";
import { GrAchievement } from "react-icons/gr";
import { GoGoal } from "react-icons/go";
import { GiStairsGoal } from "react-icons/gi";
import { FaHtml5,  FaPython,FaNode, FaRegFileExcel} from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiJavascript, SiMongodb, SiScikitlearn, SiPowerbi,  SiGooglebigquery  } from "react-icons/si";
import { MdCss } from "react-icons/md";
import { TbSql } from "react-icons/tb";

export const AboutMe = () => {

    return (
    
        <div className="timeline">
            <div className="container">
                <MdOutlineCastForEducation size = {80}  className="text-blue-600 icon"/>
                <div className="text-box">
                    <h1>Educación</h1>
                    <ol>
                        <li>Economista - Universidad Nacional de Colombia 2008</li>
                        <li>Analista de datos - Le Wagon 2024</li>
                        <li>Ciberseguridad - Google 2024</li>
                    </ol>
                    
                </div>
            </div>
            
            <div className="container">
                <GrAchievement size = {60}  className="text-yellow-600 icon mb-2"/>
                <div className="text-box">
                    <h1>Logros</h1>
                    <ol>
                        <li>Beca Banco Interamericano de Desarrollo (BID) - Le Wagon 2023</li>
                        <li>Convocatoria Google -Colnado - Ciberseguridad 2023</li>
                        <li>Convocatoria MinTics - DataScience for All (DS4A) 2022</li>
                    </ol>
                </div>
            </div>
            <div className="container">
                <GoGoal size = {80}  className="text-red-600 icon mb-2"/>
                <div className="text-box">
                    <h1>Skills</h1>
                    <div className="w-full mx-auto  flex flex-wrap  gap-4 mt-4 bg-black justify-center pt-4">
                        
                        <FaHtml5 size="80" className="text-orange-600 rounded-full "/>
                        <MdCss size="80" className="text-blue-600 animate-moveUpDown" />
                        <SiJavascript size="80" className="text-yellow-500 rounded-3xl "/>
                        <RiReactjsFill size="80" className="text-blue-600 animate-moveUpDown" />
                        <SiMongodb size="80" className="text-green-600 " />
                        <FaPython size="80" className="text-yellow-400 animate-moveUpDown" />
                        <FaNode size="90" className="text-green-600 animate-moveUpDown" />
                        <SiScikitlearn size="80" className="text-orange-600 " />
                        <SiPowerbi size="80" className="text-blue-600 " />
                        <FaRegFileExcel size="80" className="text-green-600 animate-moveUpDown" />
                        <TbSql size="80" className="text-blue-600" />
                        <SiGooglebigquery size="80" className="text-blue-600 animate-moveUpDown" />
                    
                    </div>
    
                </div>
            </div>
            <div className="container">
                <GiStairsGoal size = {60}  className="text-green-600 icon"/>
                <div className="text-box">
                    <h1>Soft Skills</h1>
                        <ol>
                            <li>Comunicación efectiva</li>
                            <li>Colaboración y Trabajo en equipo</li>
                            <li>Atención al detalle</li>
                            <li>Adaptabilidad</li>
                            <li>Autodisciplina</li>
                            <li>Aprendizaje continuo</li>
                            <li>Pensamiento crítico</li>
                            <li>Curiosidad</li>
                        </ol>
                </div>
            </div>
            


        </div>
    );
};

