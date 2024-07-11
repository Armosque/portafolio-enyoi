import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projectsData } from "../data/projectsData";
import { Link } from "react-router-dom";

export function PauseOnHover() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div>
      <h2 className="text-2xl text-center md:text-2xl my-20">Proyectos</h2>
      <Slider {...settings} className= "mb-20">
        {projectsData.map((image) => (
          <div key={image.id} className="flex justify-center items-center px-2">
            <Link to={`/projects/${image.id}`}>
              <img
                src={image.img}
                alt={`Slide ${image.nombre}`}
                className="w-96 h-52 object-cover transition-transform transform hover:scale-105 mb-4"
              />
              <h2 className="text-center mb-12">{image.nombre}</h2>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
