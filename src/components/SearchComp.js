const SearchBar = ({SearchHandler}) => {
    return ( 
        <div>
            <input 
                type="text" 
                placeholder="Search for ..."
                // value={value}
                onChange={(e) => SearchHandler(e)}/>
        </div>
     );
}
 
export default SearchBar;