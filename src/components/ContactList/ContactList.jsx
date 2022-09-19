import { List, Item, Button } from './ContactListStyled';
import PropTypes from 'prop-types';

export const ContactList = ({ items, onRemove }) => {
  const itemList = items.map(({ id, name, number }) => {
    return (
      <Item key={id}>
        {name}: {number}
        <Button type="button" onClick={() => onRemove(id)}>
          Delete
        </Button>
      </Item>
    );
  });

  return <List>{itemList}</List>;
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  onRemove: PropTypes.func.isRequired,
};
