import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { NavBar } from "./NavBar"

export const Layout = () => {
    return (
        <div className="site-wrapper">
        <NavBar />
        <main>
            <Outlet />
        </main>
        <Footer/>
    </div>
    )
}
