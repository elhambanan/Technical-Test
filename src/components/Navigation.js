import { NavLink } from "react-router-dom";

const items = [
  // {name: "HomePage", to:"/"},
  {name: "Character", to:"/character"},
  {name: "Episode", to:"/episode"},
  {name: "Location", to:"/location"},

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