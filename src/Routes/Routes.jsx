import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: "about-us",
                Component: About
            },
            {
                path: "profile",
                Component: Profile
            }
        ]
    }
])
export default router