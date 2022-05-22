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
            <div className="locationTable">
                <h2>location {data.id} full data table</h2>
                <table >
                        <tr>
                            <th>name</th>
                            <td>{data.name}</td>
                        </tr>
                        <tr>
                            <th>type</th>
                            <td>{data.type}</td>
                        </tr>
                        <tr>
                            <th>dimension</th>
                            <td>{data.dimension}</td>
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
                            <th>residents</th>
                            { data.residents.map((m) => (
                            <Link to={`/character/${m.slice(42)}`}>
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
 
export default LocationFullData;