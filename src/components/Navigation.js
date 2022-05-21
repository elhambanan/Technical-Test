import { NavLink } from "react-router-dom";

const items = [
  {name: "HomePage", to:"/"},
  {name: "character", to:"/character"},
  {name: "episode", to:"/episode"},
  {name: "location", to:"/location"},

]



const Navigation = () => {
    return ( 
        <nav>
          <ul>
            {items.map((item) => {
              return(
                <li key={item.to}>
                  <NavLink 
                    to={item.to}
                    className={(navData) => (navData.isActive ? "activeLink" : "")}
                  >
                    {item.name}
                  </NavLink>
                </li>
              )
              
            })}
          </ul>
        </nav> 
     );
}
 
export default Navigation;