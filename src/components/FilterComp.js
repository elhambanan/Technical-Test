const FilterDataComp = ({filterHandler, selectedOption}) => {

   
    return ( 
        <div className="filterComp" onChange={(e) => filterHandler(e)}>
            <p> status : </p>
            <select>
                <option value="">All</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">unknown</option>
            </select>
        </div>
     );
}
 
export default FilterDataComp;