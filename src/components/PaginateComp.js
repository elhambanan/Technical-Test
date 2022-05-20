import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const items = [
    {name : "page-1", to: "/?page=1"},
    {name : "page-2", to: "/?page=2"},
    {name : "page-3", to: "/?page=3"}
];

const PaginateComp = ({pageHandler}) => {
    

    return ( 
        <div className="paginateComp">
            {items.map((item, index) => {
                return (
                    <li >
                        <Link to={{pathname: item.to}}>
                            <button onClick={() => pageHandler(item.to)}>{item.name}</button>
                        </Link>
                    </li>
                )
            })}
        </div>
     );
}
 
export default PaginateComp;