import styled from 'styled-components';

export const Label = styled.label`
font-size:20px;
text-align:left;
margin-left: 15%;
margin-top: 5px;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border-radius: 13px;
  border-bottom: 3px solid gray;
  box-shadow: 0 0 0 2px gray;
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
    background: transparent;
  }
  &[type=submit]{
    color: #fff;
    background-color: #1161EE;
    cursor: pointer;
    border-radius: 10px;
    width: 40%;
  }
  &[name=confirmPassword]{
    margin-bottom: 2%;
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

export const Link = styled.a`
  margin: 5% 15%;
  font-size: 25px;
  font-weight: 300%;
  transition: transform 400ms ease;
  &:hover{
    text-decoration: underline;
    transform: scale(1.07);
    transition: transform 400ms ease;
  }
`;

export const Backup = styled.p`
  cursor:pointer;
  margin: auto;
  font-size: 15px;
  content: 'Forgot Password';
  opacity: 0.6;
  text-decoration: underline;
  color: white;
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
`;