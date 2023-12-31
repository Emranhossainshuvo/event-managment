import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/pages/Home/Home";
import ErrorPage from "../components/layout/ErrorPage/ErrorPage";
import Login from "../components/layout/Login/Login";
import Register from "../components/layout/Register/Register";
import DetailsPage from "../components/layout/DetailPage/DetailsPage";
import PrivetRoute from "./PrivetRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('services.json')

            },
            {
                path: '/:id',
                element: <PrivetRoute><DetailsPage></DetailsPage></PrivetRoute>,
                loader: () => fetch('services.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router; 