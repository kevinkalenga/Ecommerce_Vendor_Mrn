import { useState,  Suspense } from "react";
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoutes";


function App() {
   const [allRoutes, setAllRoutes] = useState([...publicRoutes]);
   console.log(allRoutes)
   return (
             <Suspense fallback={<div>Chargement...</div>}>
               <Router allRoutes={allRoutes} />
             </Suspense>
          ) 

}

export default App;
