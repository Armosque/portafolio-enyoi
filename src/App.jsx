import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AboutMe } from "./views/AboutMe/AboutMe";
import { Home } from "./views/Home";
import { Projects } from "./views/Projects";
import { Contact } from "./views/Contact/Contact";
import { ProjectDetails } from "./views/ProjectDetails";
import { Page404 } from "./views/Page404";
import { EnConstruccion } from "./views/EnConstruccion";
function App() {
  return (
    <>
      <div className="font-dm-sans bg-color-bg text-white">
        <div className="w-[90%] mx-auto overflow-hidden max-w-screen-xl">
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<AboutMe />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:id" element={<ProjectDetails />} />
                <Route path="contact" element={<Contact />} />
                <Route path="enConstruccion" element={<EnConstruccion />} />
                <Route path="*" element={<Page404 />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
