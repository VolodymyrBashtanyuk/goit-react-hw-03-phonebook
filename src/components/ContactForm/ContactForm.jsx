import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './ContactFormStyle';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  submitContacts = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContacs({ name, number });
    this.setState({
      name: '',
      number: '',
    });
  };

  inputChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const nameId = nanoid(5);
    const numberId = nanoid(5);
    return (
      <Form onSubmit={this.submitContacts}>
        <Label htmlFor={nameId}>Name</Label>
        <Input
          autoComplete="off"
          id={nameId}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.inputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor={numberId}>Number</Label>
        <Input
          autoComplete="off"
          id={numberId}
          value={this.state.number}
          onChange={this.inputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
