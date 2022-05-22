import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Character from "./Charatcter";
import { getAllCharacters} from "../services/getAllCharactersServices";

const MainComp = () => {
    const [listedData, setListedData] = useState(null);
    const [pageInfo, setPageInfo] = useState(null);
    const [error, setError] = useState(false);
    const navigate = useNavigate();


    const queryString = require('query-string');
    let location = useLocation();
    const pageNum = location.search;

    const query = queryString.parse(location.search);

    useEffect(()=> {
        getCharacters();
    },[])
    useEffect(()=> {
        getCharacters();
    },[pageNum])

    async function getCharacters() {
        try {
            const response = await getAllCharacters(pageNum);
            setListedData(response.data.results)
            setPageInfo(response.data.info)

        } catch (error) {
            setError(true)
        }
    }
    const advanceSearch = (e) => {
        e.preventDefault();
        const [name, status, gender] = e.target.elements;
        let params=""
        if(!!name.value)
        params=`name=${name.value}`

        if(!!status.value)
        params=`${params}&status=${status.value}`

        if(!!gender.value)
        params=`${params}&gender=${gender.value}`

        if(params.startsWith("&"))
        params.replace("&","")

        params=`?${params}`
        navigate(`/character${params}`)
    }   

    return ( 
        <div className="mainBox">
            <div className="sideBar">
                <form  onSubmit={advanceSearch}>
                    <div className="formControl">
                        <input type="text" placeholder="character ..." name="name"/>  
                    </div>                
                    <div className="formControl">
                        <label for="status">Status:</label>        
                        <select name="status" >
                            <option value="" selected>All</option>
                            <option value="Alive">Alive</option>
                            <option value="Dead">Dead</option>
                            <option value="unknown">unknown</option>
                        </select>
                    </div>
                    <div className="formControl">
                        <label for="gender">Gender:</label>        
                        <select name="gender">
                            <option value="" selected>All</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="unknown">unknown</option>
                        </select> 
                    </div>             
                    <button type="submit">Advanced Search</button>       
                </form>  
            </div>           
            <div className="mainComp">
                {listedData 
                    ? listedData.map((data) => 
                    <Link to={`/character/${data.id}`} key={data.id}>
                        <Character 
                            image={data.image}
                            name={data.name}
                        />
                    </Link>
                    )
                    : (
                    <div className="error">
                        <h2>DATA NOT EXISTING</h2>
                        <br/>
                        <Link to={`/character/`}><p>back to home page</p></Link>
                    </div>
                    )
                }
            </div>
            <div className="pagination">
                {pageInfo 
                    ? (<div className="paginateComp">
                        <Link to={pageInfo.prev ? `/${pageInfo.prev.slice(32)}` : "character/?page=1"}>
                            <button disabled={!pageInfo.prev} 
                                style={{backgroundColor: pageInfo.prev ? '#8b5cf6':'#c4b5fd'}}>
                                prev
                            </button>
                        </Link>
                        <Link to= {pageNum}>
                            <button>
                                {query.page || "1"} 
                            </button>
                        </Link>
                        <Link 
                            to={pageInfo.next ? `/${pageInfo.next.slice(32)}` : "character/?page=42"}>
                                <button disabled={!pageInfo.next}
                                style={{backgroundColor: pageInfo.next ? '#8b5cf6':'#c4b5fd'}}
                                 >
                                    next
                                </button>
                        </Link>
                    </div>)
                    : (<p>Page Loading</p>)
                } 
            </div>
        </div>
     );
}
 
export default MainComp;