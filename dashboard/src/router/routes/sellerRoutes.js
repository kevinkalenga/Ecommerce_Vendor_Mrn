// you must be an admin or seller so as to access Home Page
import { lazy } from "react";

const Home = lazy(() => import('../../views/Home'));
const SellerDashboard = lazy(() => import('../../views/seller/SellerDashboard'))



export const sellerRoutes = [
    {
        path: '/',
        element : <Home />,
        ability : ['admin', 'seller']
    },
    {
        path: '/seller/dashboard',
        element : <SellerDashboard />,
        ability : ['seller']
    }
]