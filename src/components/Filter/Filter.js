import PropTypes from "prop-types";
const Filter = ({filter}) => {
  
return (
    <input
     name="filter"
     onChange={filter}
     />
)
}
Filter.propTypes = {
    filter:PropTypes.func.isRequired
}
export default Filter;