import Select from 'react-select';

const options = [
    { value: '', label: 'All' },
    { value: 'Alive', label: 'Alive' },
    { value: 'Dead', label: 'Dead' },
    { value: 'unknown', label: 'unknown' },
  ];
  
const FilterDataComp = ({filterHandler, selectedOption}) => {

   
    return ( 
        <div className="filterComp" onChange={(e) => filterHandler(e)}>
            <p>filter data based on : </p>
            {/* <Select 
                onChange={(e) => filterHandler(e)}
                options={options}
                value={selectedOption}
            /> */}
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