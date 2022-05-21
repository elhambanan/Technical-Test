const Episode = ({id,name, air_Date, episode, onClick}) => {
    return (          
        <div className="episode" onClick={onClick}>
            <p>name: {name}</p>
            <p>airData: {air_Date}</p>
            <p>episide: {episode}</p>
        </div>
    
     );
}
 
export default Episode;