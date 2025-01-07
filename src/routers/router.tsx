import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/home/Home"
import NotFoundPage from "../pages/NotFoundPAge/NotFoundPage";
import About from "../pages/about/About";
import Pricing from "../pages/Pricing/Pricing";
import Faq from "../pages/FAQ/Faq";
import BookADemo from "../pages/Demo/BookADemo";
import SignUp from "../pages/Sign up and Login/SignUp";
import Login from "../pages/Sign up and Login/Login";
import Access from "../Access";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/Pricing",
                element: <Pricing/>
            },
            {
                path: "/FAQ",
                element: <Faq/>
            }
            
        ],
        errorElement: <NotFoundPage/>
    },
    {
        path: "/",
        element: <Access/>,
        children: [
            {
                path: "/sign-up",
                element: <SignUp/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/book-a-demo",
                element: <BookADemo/>
            },
        ],
        errorElement: <NotFoundPage/>
    }
])

export default router; 