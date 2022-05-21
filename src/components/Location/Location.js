const Location = ({name, type, dimension, onClick}) => {
    return (          
        <div className="location" onClick={onClick}>
            <p><h5>name :</h5> {name}</p>
            <p><h5>type :</h5>{type}</p>
            <p><h5>dimension :</h5>{dimension}</p>
        </div>
    
     );
}
 
export default Location;