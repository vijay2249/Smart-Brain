import styled from 'styled-components';

export const Label = styled.label`
font-size:20px;
text-align:left;
margin-left: 15%;
margin-top: 5px;
`;

export const Input = styled.input`
  margin: auto;
  width: 70%;
  border-radius: 5px;
  font-size: 25px;
  margin-bottom: 5%;
  border: none;
  background: transparent;
  border-bottom: 2px solid #1161EE;
  &:focus{
    outline:none;
  }
  &[type=submit]{
    color: #fff;
  background-color: #1161EE;
  cursor: pointer;
  border-radius: 10px;
  width: 40%;
  }
`;

export const Hr = styled.hr`
  color:white;
  opacity: 0.7;
  height: 3px;
  width: 90%;
  background: white;
  border-radius: 5px;
  position:relative;
  margin:auto;
`;