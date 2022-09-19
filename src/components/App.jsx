import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './FilterContact/FilterContact';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Title, SubTitle } from './AppStyle';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  isDublicate = ({ name }) => {
    const { contacts } = this.state;
    const result = contacts.find(item => item.name === name);
    return result;
  };

  addContacts = data => {
    if (this.isDublicate(data)) {
      return alert(`${data.name} is already in contacts `);
    }
    this.setState(prevState => {
      const newContact = {
        id: nanoid(5),
        ...data,
      };
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  removeContact = id => {
    this.setState(prevState => {
      const newContact = prevState.contacts.filter(item => item.id !== id);
      return { contacts: newContact };
    });
  };

  filterChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  getFilter = () => {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }
    const normalaizedFilter = filter.toLowerCase();
    const filterContact = contacts.filter(({ name }) => {
      const normalaizedName = name.toLowerCase();
      const result = normalaizedName.includes(normalaizedFilter);
      return result;
    });
    return filterContact;
  };

  render() {
    return (
      <>
        <Title>Phonebook</Title>
        <ContactForm onAddContacs={this.addContacts} />
        {this.state.contacts.length !== 0 && (
          <>
            <SubTitle>Contacts</SubTitle>
            <Filter onChange={this.filterChange} value={this.state.filter} />
            <ContactList
              items={this.getFilter()}
              onRemove={this.removeContact}
            />
          </>
        )}
      </>
    );
  }
}
