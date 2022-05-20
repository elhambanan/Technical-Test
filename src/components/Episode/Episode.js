const Episode = ({id,name, air_Date, episode, onClick}) => {
    return (          
        <div className="character" onClick={onClick}>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>airData: {air_Date}</p>
            <p>episide: {episode}</p>
        </div>
    
     );
}
 
export default Episode;