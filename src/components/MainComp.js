import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Character from "./Charatcter";
import SearchBar from "./SearchComp";
import { getAllCharacters} from "../services/getAllCharactersServices";

const MainComp = () => {
    const [listedData, setListedData] = useState(null);
    const [pageInfo, setPageInfo] = useState(null);
    const [error, setError] = useState(false);
    const [status, setStatus] = useState("Alive");


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
    const selectPageHandler = (pageNum) => {     
    }
    const filterHandler = (e) => {
        if (e.target.value === ""){
            axios.get(`https://rickandmortyapi.com/api/character/${location.search}`)
             .then((res) => {
                setListedData(res.data.results);
                setStatus(e.target.value)              
            })
             .catch((err) => console.log(err)) 
        }else {
            axios.get(`https://rickandmortyapi.com/api/character/${location.search}`)
                 .then((res) => setListedData(res.data.results.filter( d => d.status === e.target.value))
                 .catch((err) => console.log(err))
                 )
        }   
    }
    const SearchHandler = (e) => {
        if (e.target.value === ""){
            axios.get(`https://rickandmortyapi.com/api/character/${location.search}`)
             .then((res) => { setListedData(res.data.results)

            })
             .catch((err) => console.log(err)) 
        }else {
            axios.get(`https://rickandmortyapi.com/api/character/?name=${location.search}`)
             .then((res) => { 
                 setListedData(res.data.results
                   .filter( d => d.name.toLowerCase().includes(e.target.value.toLowerCase())))}
                   )
                 .catch((err) => console.log(err)) 
        }   
    }
    const advanceSearch = (e) => {
        console.log(e.target.value)
    }
    // const changeHandler = (e) =>{
    //     console.log(e.target.name, e.target.value)
    // }

    return ( 
        <div className="mainBox">
            <div className="sideBar">  
                <form onSubmit={advanceSearch}>
                    <label for="name">Input Name</label>
                    <input type="text" placeholder="name..."
                        name="name"
                        />                  
                     <label for="status">Status:</label>        
                     <select name="status">
                        <option value="" selected>All</option>
                        <option value="Alive">Alive</option>
                        <option value="Dead">Dead</option>
                        <option value="unknown">unknown</option>
                    </select>
                    <br/>
                    <label for="gender">Gender:</label>        
                     <select name="gender">
                        <option value="" selected>All</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="unknown">unknown</option>

                    </select>
                    {/* <input type="radio" name="gender" onChange={changeHandler}/> */}
   
                    <button type="submit">Advanced Search</button>       
                </form>             
              
            </div>
            <div className="mainComp">
                <div className="searchDiv">
                    {/* <SearchBar SearchHandler={SearchHandler}/> */}
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
               
            </div>
            <div className="pagination">
                {pageInfo 
                    ? (<div className="paginateComp">
                        <Link to={pageInfo.prev ? `/${pageInfo.prev.slice(32)}` : "character/?page=1"}>
                            <button 
                                disabled={!pageInfo.prev} 
                                onClick={() => selectPageHandler()}>
                                prev
                            </button>
                        </Link>
                        <Link to= {pageNum}>
                            <button onClick={() => selectPageHandler()}>
                                {query.page ? `${query.page}` : "1"}
                            </button>
                        </Link>
                        <Link 
                        to={pageInfo.next ? `/${pageInfo.next.slice(32)}` : "character/?page=42"}>
                            <button 
                                disabled={!pageInfo.next} 
                                onClick={() => selectPageHandler()}>
                                next
                            </button>
                        </Link>
                        {/* <Link 
                        to={pageInfo.pages ? `/character/?page=${pageInfo.pages}` : ""}>
                            <button 
                                disabled={!pageInfo.next} 
                                onClick={() => selectPageHandler()}>
                                {pageInfo.pages}
                            </button>
                        </Link> */}
                    </div>)
                    : (<p>Page Loading</p>)
                } 
            </div>
        </div>
     );
}
 
export default MainComp;