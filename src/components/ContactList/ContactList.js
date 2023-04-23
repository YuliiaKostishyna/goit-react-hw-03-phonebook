import PropTypes from "prop-types"; 
import ContactListItem from "components/ContactListItem/ContactListItem";
import css from "./ContactList.module.css"
import Filter from "../Filter/Filter";
const ContactList = ({contacts, filter, handleChangeFilter, deleteButton}) => {
  
    return (<div className={css.contacts}>
        <Filter filter = {handleChangeFilter}></Filter>
        <ul> 
{
filter? 
contacts.filter(filterContact => filterContact.name.toLowerCase().includes(filter.toLowerCase())).map(addContact => <ContactListItem key = {addContact.id} name = {addContact.name} number = {addContact.number} deleteButton = {deleteButton}></ContactListItem>):
contacts.map(addContact =><ContactListItem key = {addContact.id} name = {addContact.name} number = {addContact.number} deleteButton = {deleteButton}></ContactListItem>)
   }  </ul></div>
    )
}
ContactList.propTypes = {
    contacts:PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
      filter:PropTypes.string.isRequired,
      handleChangeFilter:PropTypes.func.isRequired,
      deleteButton:PropTypes.func.isRequired
}
export default ContactList;