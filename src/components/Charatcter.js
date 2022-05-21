const Character = ({image,name, id, status,onClick}) => {
    return ( 
        <div className="character" onClick={onClick}>
            <div className="avatar">
             <img src={image}></img>
            </div>
            <p>{name}...</p>
        </div>
     );
}
 
export default Character;