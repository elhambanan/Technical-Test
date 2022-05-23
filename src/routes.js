import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import MainComp from "./components/MainComp";
import EpisodePage from "./pages/EpisodePage";
import LocationPage from "./pages/LocationPage";
import FullDataPage from "./pages/FullDataPage";
import EpisodeFullData from "./components/Episode/EpisodeFullData";
import LocationFullData from "./components/Location/LocationFullData";


const routes = [
    {path: "/", element:<MainComp/>},

    {path: "/character", element:<MainComp/>},
    {path: "/character/:id", element:<FullDataPage />}, 
    {path: "/character/?page=:id", element:<MainComp />}, 
    
    {path: "/episode", element:<EpisodePage/>},
    {path: "/episode/:id", element:<EpisodeFullData />},
    {path: "/episode/?page=:id", element:<EpisodePage />}, 
 
    {path: "/location", element:<LocationPage/>},
    {path: "/location/:id", element:<LocationFullData/>},
    {path: "/location/?page=:id", element:<LocationPage />}, 

    {path: "*", element:<NotFound/>},
]

export default routes;