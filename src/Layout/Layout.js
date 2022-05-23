import Header from "../components/Header";
import routes from "../routes.js"
import { Route, Routes} from "react-router-dom";


const Layout = ({Children}) => {
    return ( 
        <div className="layout">
            <Header />
            {Children}
            <Routes> 
                  {routes.map((route, index) =>  (
                    <Route {...route} key={index}/>
                  ))}
            </Routes>             
        </div>
     );
}
 
export default Layout;