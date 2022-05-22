const Episode = ({id,name, air_Date, episode, onClick}) => {
    return (          
        <div className="episode" onClick={onClick}>
            <p>episide: {episode}</p>
            <p>name: {name}</p>
            <p>airData: {air_Date}</p>
        </div>
    
     );
}
 
export default Episode;