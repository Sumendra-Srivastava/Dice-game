import { useState } from "react";
import styled from "styled-components"

const NumberSelector = ( {setError,Error,SelectedNumber, setSelectedNumber}) => {
  const arrNumber=[1,2,3,4,5,6];
  const numberselector=(value)=>{
    setSelectedNumber(value)
    setError("")
  }
  

  return (
    <NumberSelectorContainer>
      <p className="error">{Error}</p>
    <div className="flex">
    {
        arrNumber.map((value,i)=>(
          <Box 
          isSelected={value === SelectedNumber}
          key={i}
          onClick={() =>numberselector(value) }>{value}</Box>
        ))}
    </div>
    <p>Select Number</p>
      
    </NumberSelectorContainer>
  );
};

export default NumberSelector;
const NumberSelectorContainer =styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
  display: flex;
  gap: 24px;
  


}
p{
  font-size: 24px;
  font-weight: 700;
}
.error{
    color: red;
  }

  
`;

const Box =styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
cursor: pointer;
background-color: ${(props) => props.isSelected ? "black" : "white"};
color: ${(props) => (!props.isSelected ? "black" : "white")};
    
`;
