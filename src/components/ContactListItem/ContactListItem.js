import PropTypes from "prop-types"; 
import css from "./ContactListItem.module.css"
const ContactListItem = ({name, number, deleteButton }) => {
  
return (<li>{name} {number} <button className={css.delete} type="submit" onClick={deleteButton} name={name}>Delete</button></li>)
}
 ContactListItem.propTypes = {
    name:PropTypes.string.isRequired,
    number:PropTypes.string.isRequired,
    deleteButton:PropTypes.func.isRequired
 }
export default ContactListItem;