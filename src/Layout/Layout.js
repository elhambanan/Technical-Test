import Header from "../components/Header";
import Footer from "../components/Footer";
import routes from "../routes.js"
import { Route, Routes} from "react-router-dom";


const Layout = ({Children}) => {
    return ( 
        <>
            <Header />
            {Children}
            <Routes> 
                  {routes.map((route, index) =>  (
                    <Route {...route} key={index}/>
                  ))}
            </Routes>  
            {/* <Footer /> */}

        </>
     );
}
 
export default Layout;