import {useParams} from 'react-router-dom'
import {projectsData} from '../data/projectsData'
import { FaGithub} from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import {Link} from 'react-router-dom'
import { SiGooglecolab } from "react-icons/si";

export const ProjectDetails = () => {
    const {id} = useParams()
    const project = projectsData.find(p => p.id ===  parseInt(id))

    if (!project) {
        return <div>Proyecto no encontrado</div>;
    }
    return (
        <div className="flex flex-col md:flex-row items-center bg-gray-800 text-white p-8 mt-[100px] md:p-16">
        <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
            <img src={project.img} alt={project.nombre} className="w-full rounded-lg shadow-lg max-w-xs md:max-w-sm transition-transform transform hover:scale-110" />
        </div>
            <div className="md:w-1/2 w-full md:pl-12">
            <h2 className="text-xl font-bold mb-4">{project.nombre}</h2>
            <p className="text-lg text-justify">{project.descripcion}</p>
            <div className="flex flex-row mt-4 gap-4 items-center">
                <Link to={project.git || project.colab || "https://es.wikipedia.org/wiki/Archivo:Proyecto_en_construccion.jpg" } 
                target="_blank" rel="noopener noreferrer">

                { project.git ? <FaGithub size={40} className="text-black-500 transition-transform transform hover:scale-110 mt-4"/> : 
                <SiGooglecolab size={40} className="text-black-500 transition-transform transform hover:scale-110 mt-4"/>
                }
                </Link>
                
                <Link to={project.deploy} target="_blank" rel="noopener noreferrer">
                {project.deploy ? <CiLink size={50} className="text-black-500 transition-transform transform hover:scale-110 mt-4"/> : ''}
        
                </Link>
            </div>

        </div>
    </div>
    )
}
