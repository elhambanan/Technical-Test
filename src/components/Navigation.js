import { NavLink } from "react-router-dom";

const items = [
  {name: "character", to:"/character"},
  {name: "location", to:"/location"},
  {name: "episode", to:"/episode"}

]



const Navigation = () => {
    return ( 
      <header>
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
      </header>
     );
}
 
export default Navigation;