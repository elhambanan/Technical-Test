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

    const query = queryString.parse(location.search)
    console.log(location, query)

    
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
            console.log(error)
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
        console.log(e.target.value);
        if (e.target.value === ""){
            axios.get(`https://rickandmortyapi.com/api/character/${location.search}`)
             .then((res) => { setListedData(res.data.results)

            })
             .catch((err) => console.log(err)) 
        }else {
            axios.get(`https://rickandmortyapi.com/api/character/?name=${location.search}`)
             .then((res) => { 
                 console.log(res.data.results)
                 setListedData(res.data.results
                   .filter( d => d.name.toLowerCase().includes(e.target.value.toLowerCase())))}
                   )
                 .catch((err) => console.log(err)) 
        }   
    }
    const advanceSearch = () => {
        console.log("advanse search")
    }
    const changeHandler = (e) =>{
        console.log(e.target.name, e.target.value)
    }

    return ( 
        <div className="mainBox">
            <div className="sideBar">  
                <form onSubmit={advanceSearch}>
                    <input type="text" placeholder="by name..."
                        name="name"
                        // onChange={changeHandler}
                        />
                    <input type="text" placeholder="by statuse..."
                        name="status"
                        // onChange={changeHandler}
                        /> 
                    <input type="text" placeholder="by gender..."
                        name="gender"
                        // onChange={changeHandler}
                        />     
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
                        : <p>Data Loading...</p>
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