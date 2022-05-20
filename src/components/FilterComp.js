const FilterDataComp = ({filterHandler}) => {

   
    return ( 
        <div className="filterComp" onChange={(e) => filterHandler(e)}>
            <p>filter data based on : </p>
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