import  'react-circular-progressbar/dist/styles.css' ;
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


function Progress(){
    let navigate = useNavigate();
     const frase = "Hoje"
     return(
         <Circulo onClick={()=>navigate("/hoje")}> 
             <CircularProgressbar  value = {70} text={frase} 
             styles={buildStyles({
                textSize: '25px',
                backgroundColor:'#52B6FF',
                textColor: '#52B6FF',
               

             })}
             />
        </Circulo>
       
     )
}
export default function Footer(){
    let navigate = useNavigate();
    return(
        <>
        <Rodape> 
        <Habit onClick={()=>navigate("/habitos")}>Hábitos</Habit>
        <Progress/>
        <Historico onClick={()=>navigate("/historico")}>Histórico</Historico>
        </Rodape>
        </>
    )
}
const Rodape = styled.div`
display: flex;
width:100%;
bottom: 0;
position: fixed;
justify-content: space-between;
`
const Habit = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 600;
font-size: 20px;
color: #52B6FF;
align-self: center;
margin-left: 20px;
`
const Historico = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 600;
font-size: 20px;
color: #52B6FF;
align-self: center;
margin-right: 20px;
`
const Circulo = styled.div`
width: 80px;
height: 80px;
margin-bottom: 25px;


`