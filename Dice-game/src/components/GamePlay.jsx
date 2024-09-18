import React from 'react'
import Totlescore from './Totlescore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RoleDice from './RoleDice';
import { useState } from "react";
import { Button } from '../Styled/Button';
import Rules from './Rules';

const GamePlay = () => {

  const [score, setscore]= useState(0);
  const [SelectedNumber,setSelectedNumber]=useState();
  
  const [currentDice, setcurrentDice] = useState(1);
  const[Error,setError]=useState("");

  const [ShowRules,setShowRules]=useState(false);

  const generateRandomNumber= (min, max) => {
    return Math.floor(Math.random() * (max-min) + min);
};

const roleDice = ()=>{
  if(!SelectedNumber){
    setError("You have not selected any number");
    return;
}
    
    const randomNumber =generateRandomNumber(1,7);

setcurrentDice((prev)=> randomNumber);


    if(SelectedNumber === randomNumber){
      setscore((prev) => prev+randomNumber);
    }else{
      setscore(prev => prev-2);
    }

    setSelectedNumber(undefined);
};

const ResetScore=()=>{
  setscore(0)
}

  return (
   <MainContainer>

   <div className='top-section'>
     <Totlescore score={score}/>
   <NumberSelector 
    Error={Error}
    setError={setError}
   
   SelectedNumber={SelectedNumber}
   setSelectedNumber={setSelectedNumber}/>
   </div>
   <RoleDice currentDice={currentDice}
   roleDice={roleDice}/>
   <div className='btns'>
    <Button onClick={ResetScore}>Reset</Button>
    <Button  onClick={()=>setShowRules(prev=>!prev)}>{ShowRules ? "Hide" : "Show" } Rules</Button>

   </div>
   {ShowRules &&<Rules/>}
   </MainContainer>
  );
};

export default GamePlay;

const MainContainer =styled.main`
padding-top: 30px;
.top-section{
  display: flex;
  justify-content: space-around;
  align-items: end;
}
.btns{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  margin-top:40px;
}

`;

