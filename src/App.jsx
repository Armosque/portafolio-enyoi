import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Layout} from "./components/Layout"
import {AboutMe} from "./views/AboutMe"
import {Home} from "./views/Home"
import {Projects} from "./views/Projects"
import {Contact} from "./views/Contact"
function App() {
  

  return (
    <>
      <div className="font-dm-sans bg-color-bg text-white">
        <div className="w-[90%] mx-auto overflow-hidden max-w-screen-xl">
          <BrowserRouter>
            <Routes>
              <Route element={<Layout/>}>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<AboutMe />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
              </Route>
            </Routes>
          </BrowserRouter>

        </div>
      </div>
    </>
  )
}

export default App
