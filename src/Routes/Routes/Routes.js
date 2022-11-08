import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOuts/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    }
])