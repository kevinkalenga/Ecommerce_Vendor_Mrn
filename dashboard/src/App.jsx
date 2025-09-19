import { useState,  Suspense, useEffect } from "react";
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoutes";
import { getRoutes } from "./router/routes";


function App() {
   const [allRoutes, setAllRoutes] = useState([...publicRoutes]);
  //  console.log(allRoutes)

   useEffect(() => {
      const routes = getRoutes()
      setAllRoutes([...allRoutes, routes])
   }, [])
   
   return (
             <Suspense fallback={<div>Chargement...</div>}>
               <Router allRoutes={allRoutes} />
             </Suspense>
          ) 

}

export default App;
