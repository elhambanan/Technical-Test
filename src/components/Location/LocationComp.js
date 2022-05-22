import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation} from "react-router-dom";
import Location from "./Location";
import FilterDataComp from "../FilterComp";
import SearchBar from "../SearchComp";
import { getAllLocation } from "../../services/getAllLocationServices";

const LocationComp = () => {
    const [listedLocation, setListedLocation] = useState(null);
    const [pageInfo, setPageInfo] = useState(null);
    const [error, setError] = useState(false);


    const queryString = require('query-string');
    let location = useLocation();
    const pageNum = location.search;

    const query = queryString.parse(location.search)
    
    useEffect(()=> {
        getLocations();
    },[])
    useEffect(()=> {
        getLocations();
    },[pageNum])

    async function getLocations() {
        try {
            const response = await getAllLocation(pageNum)
            setListedLocation(response.data.results)
            setPageInfo(response.data.info)
            console.log(response.data.info)

        } catch (error) {
            console.log(error)
            setError(true)
        }
    }
    const selectPageHandler = (pageNum) => {
        
    }
    const filterHandler = (e) => {
        if (e.target.value === ""){
            axios.get(`https://rickandmortyapi.com/api/location/${location.search}`)
             .then((res) => { setListedLocation(res.data.results)})
             .catch((err) => console.log(err)) 
        }else {
            axios.get(`https://rickandmortyapi.com/api/location/${location.search}`)
                 .then((res) => setListedLocation(res.data.results.filter( d => d.status === e.target.value))
                 .catch((err) => console.log(err))
                 )
        }   
    }
    const SearchHandler = (e) => {
        console.log(e.target.value)
        if (e.target.value === ""){
            axios.get(`https://rickandmortyapi.com/api/location/${location.search}`)
             .then((res) => { setListedLocation(res.data.results)})
             .catch((err) => console.log(err)) 
        }else {
            axios.get(`https://rickandmortyapi.com/api/location/${location.search}`)
             .then((res) => { 
                 console.log(res.data.results)
                 setListedLocation(res.data.results
                    .filter( d => d.name.toLowerCase().includes(e.target.value.toLowerCase())))})
             .catch((err) => console.log(err)) 
        }   
    }
    return ( 
        <div className="episodeBox">
                <SearchBar SearchHandler={SearchHandler}/>
            <div className="mainComp">
                {listedLocation 
                    ? listedLocation.map((data) => 
                    <Link to={`/location/${data.id}`} key={data.id}>
                        <Location 
                            name={data.name}
                            type={data.type}
                            dimension={data.dimension}
                        />
                    </Link>
                    )
                    : <p>Data Loading...</p>
                }
            </div>
            <div className="pagination">
                {pageInfo 
                    ? (<div className="paginateComp">
                        <Link
                        to={pageInfo.prev ? `/${pageInfo.prev.slice(32)}` : "character/?page=1"}>

                            <button 
                                disabled={!pageInfo.prev} 
                                onClick={() => selectPageHandler()}>
                            prev
                            </button>
                        </Link>
                        <Link to= {pageNum}>
                            <button onClick={() => selectPageHandler()}>
                                {query.page}
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
                    </div>)
                    : (<p>Page Loading</p>)
                } 
            </div>
        </div>
     );
}
 
export default LocationComp;