const Character = ({image,name, id, status,onClick}) => {
    return ( 
        <div className="character" onClick={onClick}>
            <div className="avatar" >
             <img src={image}></img>
             {/* <a class="img" href={image} style={{backgroundImage: `${image}`}}></a> */}
            </div>
            <p>{name}...</p>
        </div>
     );
} 
export default Character;