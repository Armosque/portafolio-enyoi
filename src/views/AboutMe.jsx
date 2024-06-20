import "./AboutMe.css"
import { MdOutlineCastForEducation } from "react-icons/md";
import { GrAchievement } from "react-icons/gr";
import { GoGoal } from "react-icons/go";
import { GiStairsGoal } from "react-icons/gi";

export const AboutMe = () => {

    return (
    
        <div className="timeline">
            <div className="container left-container">
                <MdOutlineCastForEducation size = {80}  className="text-blue-600 icon"/>
                <div className="text-box">
                    <h1>Educación</h1>
                    <ul>
                        <li>Economista - Universidad Nacional de Colombia 2008</li>
                        <li>Analista de datos - Le Wagon 2024</li>
                        <li>Ciberseguridad - Google 2024</li>
                    </ul>
                </div>
            </div>
            
            <div className="container right-container">
                <GrAchievement size = {60}  className="text-yellow-600 icon"/>
                <div className="text-box">
                    <h1>Logros</h1>
                    <ul>
                        <li>Beca Banco Interamericano de Desarrollo (BID) - Le Wagon 2023</li>
                        <li>Convocatoria Google -Colnado - Ciberseguridad 2023</li>
                        <li>Convocatoria MinTics - DataScience for All (DS4A) 2022</li>
                    </ul>
                </div>
            </div>
            <div className="container left-container">
                <GoGoal size = {80}  className="text-red-600 icon"/>
                <div className="text-box">
                    <h1>Skills</h1>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Python</li>
                        <li>MongoDB</li>
                        <li>ML - Scikit learn - AutoML - Knime</li>
                        <li>SQL</li>
                        <li>Power BI</li>
                        <li>Excel</li>
                    </ul>
                </div>
            </div>
            <div className="container right-container">
                <GiStairsGoal size = {60}  className="text-green-600 icon"/>
                <div className="text-box">
                    <h1>Soft Skills</h1>
                        <ul>
                            <li>Comunicación efectiva</li>
                            <li>Colaboración y Trabajo en equipo</li>
                            <li>Atención al detalle</li>
                            <li>Adaptabilidad</li>
                            <li>Autodisciplina</li>
                            <li>Aprendizaje continuo</li>
                            <li>Pensamiento crítico</li>
                        </ul>
                </div>
            </div>
            


        </div>
    );
};

