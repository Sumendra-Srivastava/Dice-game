import styled from 'styled-components'

export const Button=styled.button`
padding: 10px 18px;
min-width: 220px;
border: none;
background-color: #000000;
border-radius: 5px;
color: #946c22;
font-size: 16px;
cursor: pointer;
border: 1px solid black;
transition: 0.4s background ease-in;

&:hover{
  background-color: white;
  color: black;
  border: 1px solid black;
  transition: 0.3s background ease-in;
  font-weight:bold;
  text-decoration:underline


}
    
`;