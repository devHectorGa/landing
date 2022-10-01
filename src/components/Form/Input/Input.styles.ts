import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  padding: 20px;
`;

export const Input = styled.input`
  -webkit-appearance: none;
  margin: 0;
  outline: none;
  resize: vertical;
  font-size: 0.9em;
  box-sizing: border-box;
  padding: 10px 15px;
  width: 100%;
  border-radius: 0px 5px 5px 0px;
  border: 1px solid #ddd;
  &:read-only {
    color: #888;
    background-size: 12px auto;
    background-position: right 20px top 15px;
    background-image: url(./lock.svg);
    background-repeat: no-repeat;
  }
  &:last-child {
    order: 2;
    border-radius: 5px;
  }
  &:focus {
    border-top-color: #000;
    border-right-color: #000;
    border-bottom-color: #000;
  }
  &:focus {
    border-top-color: #000;
    border-right-color: #000;
    border-bottom-color: #000;
  }
  &:last-child:focus {
    border-left-color: #000;
  }
  &:focus + label {
    border-color: #000;
  }
`;

export const InputLabel = styled.label`
  white-space: nowrap;
  order: -1;
  border: 1px solid #ddd;
  border-right: none;
  border-radius: 5px 0px 0px 5px;
  text-align: right;
  display: block;
  font-size: 0.7em;
  padding: 13px 15px;
  padding-right: 1.5em;
  background: rgb(247, 247, 247);
`;
