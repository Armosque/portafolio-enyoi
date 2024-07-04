import logo from "../assets/perfil11.jpg";
import CV from "../assets/CVDef.pdf";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <section className="pt-10 pb-16  md:flex justify-between items-center gap-8">
        <figure className="md:order-1 md:mx-auto">
          <img
            src={logo}
            alt="Profile"
            className="w-[50%] mx-auto object-cover electric-border rounded-full my-10 transition-transform transform hover:scale-110"
          />
        </figure>

        <article className="text-center mx-auto mt-8 w-[90%] md:text-left items-center px-4">
          <h1 className="text-2xl md:text-3xl">Soy Ana Mosquera</h1>
          <p className="text-2xl text-gray-color  md:text-2xl mt-3 mb-6 text-gradient h-auto font-black">
            Desarrolladora Web y Analista de Datos
          </p>

          <div className="flex flex-col justify-items-center mb-8">
            <p className="text-base text-gray-color mx-auto w-[400] justify-items-center text-justify md:text-sm">
              Apasionada total por la tecnología, la programación, los datos, la
              automatización, el No Code, la RPA, el Machine Learning y la
              aplicación de la IA en las soluciones empresariales. Mi viaje
              hasta aquí ha sido impulsado por una curiosidad insaciable y una
              determinación constante por aprender y crecer.
            </p>
          </div>

          <div className="flex flex-row auto-rows-[60px] gap-6 max-w-lg mx-auto md:mx-0">
            <a
              href={CV}
              download="CV"
              className="bg-green-color flex items-center justify-center py-2 px-4  md:w-[50%] h-auto">
              Descargar CV
            </a>
            <Link
              to="/about"
              className="flex items-center justify-center border-white border py-2 px-4  md:w-[50%] h-auto">
              Conocer más
            </Link>
          </div>
        </article>
      </section>
    </>
  );
};
