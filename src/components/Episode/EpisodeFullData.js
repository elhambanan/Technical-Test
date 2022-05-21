import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOneEpisode } from "../../services/getOneEpisodeServices";

const EpisodeFullData = () => {
    const params = useParams();
    const episodeId = params.id;
    const [data, setData] = useState(null);
    const navigate = useNavigate();

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
               <table>
                    <tr>
                        <th>name</th>
                        <td>{data.name}</td>
                    </tr>
                    <tr>
                        <th>air_date</th>
                        <td>{data.air_date}</td>
                    </tr>
                    <tr>
                        <th>episode</th>
                        <td>{data.episode}</td>
                    </tr>
                    <tr>
                        <th>url</th>
                        <td>
                            <Link to={""}>
                            {data.url}
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <th>created</th>
                        <td>{data.created}</td>
                    </tr>
                    <tr>
                        <th>episode</th>
                        { data.characters.map((m) => (
                        <Link to={m.slice(32)}>
                            <td>{m}</td>
                            <br/>
                        </Link>
                        ))}
                    </tr>      
                    <tr>
                        <th>episode</th>
                        
                    </tr>     
               </table>
            </div>
        )
    }
    return dataDetail;
}
 
export default EpisodeFullData;