import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #e2e2e2;
  border: 1px solid black;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
  padding: 20px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 280px;
  padding: 5px;
  margin-bottom: 10px;
`;
export const Button = styled.button`
  width: 100px;
  background-color: #aec4e2;
  border: transparent;
  margin-right: auto;
  margin-left: auto;
  padding: 5px;
  cursor: pointer;
  :hover,
  :focus {
    background-color: #4f94f3;
  }
`;
