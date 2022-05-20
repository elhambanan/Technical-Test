import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOneCharacter } from "../services/getOneCharacterServices";

const FullDataComp = () => {
    const params = useParams();
    const characterId = params.id;
    const [data, setData] = useState(null);

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
            <div>
                FullData
                <p>id : {data.id}</p>
               { data.episode.map((m) => (
                   <Link to="https://rickandmortyapi.com/api/episode/1">
                    <p>{m}</p>
                   </Link>
               ))}
                <p>created :{data.created}</p>
            </div>
        )
    }
    return dataDetail;
}
 
export default FullDataComp;