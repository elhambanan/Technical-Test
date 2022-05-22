const SearchBar = ({SearchHandler}) => {
    return ( 
        <div className="searchBox">
            <input 
                type="text" 
                placeholder="Search by name..."
                // value={value}
                onChange={(e) => SearchHandler(e)}/>
        </div>
     );
}
 
export default SearchBar;