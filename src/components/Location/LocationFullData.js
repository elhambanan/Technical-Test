import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOneLocation } from "../../services/getOneLocationServices";
const LocationFullData = ({id,name, type, dimension,residents, onClick}) => {
    const params = useParams();
    const locationId = params.id;
    const [data, setData] = useState(null);

    useEffect(() =>{
        if(locationId) {
            getOneLocation(locationId)
             .then((res) => {setData(res.data)})
             .catch((err) => console.log(err)) }  
    },[locationId])
    let dataDetail = <p>Please select a data !</p>

    if(locationId) dataDetail = <p>loading ...</p>

    if(data) {
        dataDetail = (
            <div>
                FullData of Episode

                <p>id : {data.id}</p>
                <p>name : {data.name}</p>
                <p>type :{data.type}</p>
                <p>dimension: {data.dimension}</p>
               { data.residents.map((m) => (
                   <Link to={m}>
                    <p>{m}</p>
                   </Link>
               ))}
                
            </div>
        )
    }
    return dataDetail;
}
 
export default LocationFullData;