import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOuts/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Blogs from "../../Pages/Blogs/Blogs";
import Error from "../../Pages/ErrorPage/Error";
import FoodDetails from "../../Pages/FoodDetails/FoodDetails";
import Foods from "../../Pages/Foods/Foods";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import Register from "../../Pages/Register/Register";
import UserReviews from "../../Pages/UserReviews/UserReviews";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://dhekur-server.vercel.app/food')
            },
            {
                path: '/foods',
                element: <Foods></Foods>,
                loader: () => fetch('https://dhekur-server.vercel.app/foods')
            },
            {
                path: '/foods/:_id',
                element: <FoodDetails></FoodDetails>,
                loader: ({ params }) => fetch(`https://dhekur-server.vercel.app/foods/${params._id}`)
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/myreviews',
                element: <PrivateRoutes><UserReviews></UserReviews></PrivateRoutes>
            },
            {
                path: '/addfoods',
                element: <PrivateRoutes><AddServices></AddServices></PrivateRoutes>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/*',
                element: <Error></Error>
            }
        ]
    }
])