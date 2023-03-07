import styled from 'styled-components';

export const StyledFormAddContacts = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  width: 400px;
  border: 1px solid #454545;

  & button {
    align-self: center;
    min-width: 200px;
    height: 40px;
    font-size: 18px;
    letter-spacing: 0.02em;
    color: #000;
    background-color: transparent;
    border: 2px solid #47946a;
    border-radius: 3px;
    transition: background-color 250ms linear;
  }

  & button:hover {
    color: #fff;
    background-color: #47946a;
  }

  & .label {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  & input {
    margin-top: 5px;
    border: 2px solid #b9c4be;
    border-radius: 2px;
    height: 30px;
  }
`;
