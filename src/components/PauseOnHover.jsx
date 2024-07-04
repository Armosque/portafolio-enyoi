import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projectsData } from "../data/projectsData";
import { Link } from "react-router-dom";
//import img1 from '../assets/p1.jpg';
//import img2 from '../assets/p2.jpg';
//import img3 from '../assets/p6.jpg';
//import img4 from '../assets/p4.jpg';
//import img5 from '../assets/p5.jpg';
//import img6 from '../assets/p7.jpg';

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
      <h2 className="text-3xl md:text-3xl my-20">Projects</h2>
      <Slider {...settings}>
        {projectsData.map((image) => (
          <div key={image.id} className="flex justify-center items-center px-2">
            <Link to={`/projects/${image.id}`}>
              <img
                src={image.img}
                alt={`Slide ${image.nombre}`}
                className="w-96 h-52 object-cover transition-transform transform hover:scale-105 mb-4"
              />
              <h2 className="text-center">{image.nombre}</h2>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
