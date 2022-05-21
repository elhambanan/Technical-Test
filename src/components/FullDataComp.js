import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
                            {data.origin.url}
                        </td>
                    </tr>
                    <tr>
                        <th>location</th>
                        <td>
                            {data.location.name}
                            <br></br>
                            {data.location.url}
                        </td>
                    </tr>
                    <tr>
                        <th>url</th>
                        <td>{data.url}</td>
                    </tr>
                    <tr>
                        <th>created</th>
                        <td>{data.created}</td>
                    </tr>
                    <tr>
                        <th>episode</th>
                        { data.episode.map((m) => (
                        <Link to={m.slice(32)}>
                            <td>{m}</td>
                            <br/>
                        </Link>
                        ))}
                    </tr>         
                </table>
                <div><img src={data.image}/></div>            
           </div>
        )
    }
    return dataDetail;
}
 
export default FullDataComp;