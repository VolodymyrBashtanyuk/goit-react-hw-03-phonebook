import PropsType from 'prop-types';
import { nanoid } from 'nanoid';
import { Wrapper } from './FilterContactStyle';
import { Label, Input } from 'components/ContactForm/ContactFormStyle';

const filterId = nanoid(5);

export const Filter = ({ onChange, value }) => {
  return (
    <Wrapper>
      <Label htmlFor={filterId}>Find contacts by name</Label>
      <Input
        autoComplete="off"
        id={filterId}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
    </Wrapper>
  );
};

Filter.propTypes = {
  onChange: PropsType.func.isRequired,
};
