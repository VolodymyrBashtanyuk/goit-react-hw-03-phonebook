import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-right: auto;
  margin-left: auto;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  width: 100px;
  background-color: #aec4e2;
  border: #9db6da;

  padding: 5px;
  cursor: pointer;
  :hover,
  :focus {
    background-color: #4f94f3;
  }
`;
