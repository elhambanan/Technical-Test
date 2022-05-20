import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import MainComp from "./components/MainComp";
import EpisodePage from "./pages/EpisodePage";
import LocationPage from "./pages/LocationPage";
import FullDataPage from "./pages/FullDataPage";


const routes = [
    {path: "/character", element:<MainComp/>},
    {path: "/character/:id", element:<FullDataPage />}, 
    {path: "/character/?page=:id", element:<MainComp />}, 
    
    
    {path: "/episode", element:<EpisodePage/>},
    {path: "/location", element:<LocationPage/>},
    {path: "*", element:<NotFound/>},


    

]
 export default routes;