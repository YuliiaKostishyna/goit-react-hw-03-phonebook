import css from "./ContactForm.module.css"
import PropTypes from "prop-types"; 
const ContactForm = ({handleSubmit, nameInputId, handleChange, handleChangeNumber} ) => {
return (
<form className= {css.form} onSubmit={handleSubmit}> 
      <label htmlFor={nameInputId}>Name</label>
     <input
  type="text"
  name="name" 
  onChange={handleChange}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required id = {nameInputId}
/>
<label>Number</label>
<input
  type="tel"
  name="number"
  onChange={handleChangeNumber}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
<button className={css.add} type="submit">Add contact</button>
     </form>
   )
}
ContactForm.propTypes = {
  handleSubmit:PropTypes.func.isRequired,
  nameInputId:PropTypes.string.isRequired,
  handleChange:PropTypes.func.isRequired,
  handleChangeNumber:PropTypes.func.isRequired
}
     export default ContactForm;