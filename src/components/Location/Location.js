const Location = ({id,name, type, dimension, onClick}) => {
    return (          
        <div className="character" onClick={onClick}>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>type: {type}</p>
            <p>dimension: {dimension}</p>
        </div>
    
     );
}
 
export default Location;