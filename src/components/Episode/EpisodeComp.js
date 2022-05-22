import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation} from "react-router-dom";
import { getAllEpisodes } from "../../services/getAllEpisodesServices";
import Episode from "./Episode";
import FilterDataComp from "../FilterComp";
import SearchBar from "../SearchComp";

const EpisodeComp = () => {
    const [listedEpisode, setListedEpisode] = useState(null);
    const [pageInfo, setPageInfo] = useState(null);
    const [error, setError] = useState(false);


    const queryString = require('query-string');
    let location = useLocation();
    const pageNum = location.search;

    const query = queryString.parse(location.search)
    console.log(location, query)
    console.log(pageInfo, listedEpisode)

  
    // useEffect(()=>{
    //     axios.get(`https://rickandmortyapi.com/api/character/${location.search}`)
    //          .then((res) => { 
    //             setListedData(res.data.results)
    //         })
    //          .catch((err) => console.log(err))
    // },[]);
    
    useEffect(()=> {
        getEpisodes();
    },[])
    useEffect(()=> {
        getEpisodes();
    },[pageNum])

    async function getEpisodes() {
        try {
            const response = await getAllEpisodes(pageNum)
            setListedEpisode(response.data.results)
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
            axios.get(`https://rickandmortyapi.com/api/episode/${location.search}`)
             .then((res) => { setListedEpisode(res.data.results)})
             .catch((err) => console.log(err)) 
        }else {
            axios.get(`https://rickandmortyapi.com/api/episode/${location.search}`)
                 .then((res) => setListedEpisode(res.data.results.filter( d => d.status === e.target.value))
                 .catch((err) => console.log(err))
                 )
        }   
    }
    const SearchHandler = (e) => {
        console.log(e.target.value)
        if (e.target.value === ""){
            axios.get(`https://rickandmortyapi.com/api/episode/${location.search}`)
             .then((res) => { setListedEpisode(res.data.results)})
             .catch((err) => console.log(err)) 
        }else {
            axios.get(`https://rickandmortyapi.com/api/episode/${location.search}`)
             .then((res) => { 
                 console.log(res.data.results)
                 setListedEpisode(res.data.results
                    .filter( d => d.name.toLowerCase().includes(e.target.value.toLowerCase())))})
             .catch((err) => console.log(err)) 
        }   
    }
    return ( 
        <div className="episodeBox">
                <SearchBar SearchHandler={SearchHandler}/>
            <div className="mainComp">
                {listedEpisode 
                    ? listedEpisode.map((data) => 
                    <Link to={`/episode/${data.id}`} key={data.id}>
                        <Episode 
                            name={data.name}
                            air_Date={data.air_date}
                            episode={data.episode}
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
 
export default EpisodeComp;