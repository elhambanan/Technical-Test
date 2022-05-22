import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOneCharacter } from "../services/getOneCharacterServices";

const FullDataComp = () => {
    const params = useParams();
    const characterId = params.id;
    const [data, setData] = useState(null);

    console.log(data)
    useEffect(() =>{
        if(characterId) {
            getOneCharacter(characterId)
             .then((res) => {setData(res.data)})
             .catch((err) => console.log(err)) }  
    },[characterId])
   

    // dataId ?
    // data ?
    
    let dataDetail = <p>Please select a data !</p>

    if(characterId) dataDetail = <p>loading ...</p>

    if(data) {
        dataDetail = (
            <div className="fullCharacter">
                <div><img src={data.image}/></div>            

                <table>
                    <tr>
                        <th>name</th>
                        <td>{data.name}</td>
                    </tr>
                    <tr>
                        <th>status</th>
                        <td>{data.status}</td>
                    </tr>
                    <tr>
                        <th>species</th>
                        <td>{data.species}</td>
                    </tr>
                    <tr>
                        <th>type</th>
                        <td>{data.type}</td>
                    </tr>
                    <tr>
                        <th>gender</th>
                        <td>{data.gender}</td>
                    </tr>
                  
                    <tr>
                        <th>origin</th>
                        <td>
                            {data.origin.name}
                            <br></br>
                            <Link to={`/location/${data.origin.url.slice(41)}`}>{data.origin.url}</Link>
                        </td>
                    </tr>
                    <tr>
                        <th>location</th>
                        <td>
                            {data.location.name}
                            <br></br>
                            <Link to={`/location/${data.location.url.slice(41)}`}>{data.location.url}</Link>
                        </td>
                    </tr>
                    <tr>
                        <th>url</th>
                        <td>
                           <Link to={`/character/${data.id}`}>
                           <button >
                                {data.url}
                            </button>
                           </Link>
                         </td>
                    </tr>
                    <tr>
                        <th>created</th>
                        <td>{data.created}</td>
                    </tr>
                    <tr>
                        <th>episode</th>
                        { data.episode.map((m) => (
                        <Link to={`/episode/${m.slice(40)}`}>
                            <td>{m}</td>
                            <br/>
                        </Link>
                        ))}
                    </tr>         
                </table>
           </div>
        )
    }
    return dataDetail;
}
 
export default FullDataComp;