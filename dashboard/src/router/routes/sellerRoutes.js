// you must be an admin or seller so as to access Home Page
import { lazy } from "react";

const Home = lazy(() => import('../../views/Home'));



export const sellerRoutes = [
    {
        path: '/',
        element : <Home />,
        ability : ['admin', 'seller']
    }
]