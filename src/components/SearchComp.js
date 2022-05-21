const SearchBar = ({SearchHandler}) => {
    return ( 
        <div>
            <input 
                type="text" 
                placeholder="Search by name..."
                // value={value}
                onChange={(e) => SearchHandler(e)}/>
        </div>
     );
}
 
export default SearchBar;