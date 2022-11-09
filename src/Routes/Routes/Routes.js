import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOuts/Main";
import FoodDetails from "../../Pages/FoodDetails/FoodDetails";
import Foods from "../../Pages/Foods/Foods";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import Register from "../../Pages/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/food')
            },
            {
                path: '/foods',
                element: <Foods></Foods>,
                loader: () => fetch('http://localhost:5000/foods')
            },
            {
                path: '/foods/:_id',
                element: <FoodDetails></FoodDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/foods/${params._id}`)
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])