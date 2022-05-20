import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOneEpisode } from "../../services/getOneEpisodeServices";

const EpisodeFullData = ({id,name, airData, episode, character, onClick}) => {
    const params = useParams();
    const episodeId = params.id;
    const [data, setData] = useState(null);

    useEffect(() =>{
        if(episodeId) {
            getOneEpisode(episodeId)
             .then((res) => {setData(res.data)})
             .catch((err) => console.log(err)) }  
    },[episodeId])
    let dataDetail = <p>Please select a data !</p>

    if(episodeId) dataDetail = <p>loading ...</p>

    if(data) {
        dataDetail = (
            <div>
                FullData of Episode

                <p>id : {data.id}</p>
                <p>name : {data.name}</p>
                <p>air_Date :{data.airData}</p>
                <p>episode : {data.episode}</p>
               { data.characters.map((m) => (
                   <Link to={m}>
                    <p>{m}</p>
                   </Link>
               ))}
                
            </div>
        )
    }
    return dataDetail;
}
 
export default EpisodeFullData;