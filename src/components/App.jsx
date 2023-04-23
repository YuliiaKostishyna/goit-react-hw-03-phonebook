import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import css from "./App.module.css"
import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  componentDidMount = () => {
    const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localStorageContacts) {
      this.setState({ contacts: localStorageContacts });
    }
  };

  componentDidUpdate = () => {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleChangeNumber = event => {
    this.setState({ number: event.target.value });
  };



  handleSubmit = event => {
    event.preventDefault();
const newContact =  { id: nanoid(), name: this.state.name, number: this.state.number }
    this.componentDidUpdate(newContact);
    this.state.contacts.find(contactName => 
        contactName.name.toLowerCase() === this.state.name.toLowerCase()
    )
      ? window.alert(`${this.state.name} is already in contacts`)
      : this.setState({
          contacts: [
            ...this.state.contacts,
            newContact,
          ],
        });

    event.target.name.value = '';
    event.target.number.value = '';
  };

  handleChangeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  deleteButton = event => {
    this.setState(contactDelete => ({contacts: contactDelete.contacts.filter(contact => contact.name!== event.target.name)}))
    
  }

  nameInputId = nanoid();

  render() {
    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          
        }}
      >
        <p className={css.p}>Phonebook</p>
        <ContactForm
          handleSubmit={this.handleSubmit}
          nameInputId={this.nameInputId}
          handleChange={this.handleChange}
          handleChangeNumber={this.handleChangeNumber}
          handleChangeFilter={this.handleChangeFilter}
        ></ContactForm>
        <p className={css.p}>Contacts</p>

        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          handleChangeFilter={this.handleChangeFilter}
          deleteButton = {this.deleteButton}
        ></ContactList>
      </div>
    );
  }
}
