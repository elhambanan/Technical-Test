
const Character = ({name, id, status,onClick}) => {
    return ( 
        <div className="character" onClick={onClick}>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>status: {status}</p>
        </div>
     );
}
 
export default Character;