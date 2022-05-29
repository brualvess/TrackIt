import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useContext } from "react";
import UserContext from './UserContext';
function Dias(props){
    const {numero, dia, setDias}=props 
    const [cor, setCor] = useState("")
    function alteracoes(){
        setCor("selecionado")
        setDias([...[numero]])

    }
    return(
        <>
        {
           
            (cor=="")?
        
            <Day onClick={alteracoes}>{dia}</Day>
            :
            <Dia>{dia}</Dia>

           
        }
         </>
    
    )
    
}
function CriarHabito() {
    const [dias, setDias]= useState([])
    return (
        <>
        <DadosHabit>
            <DadosDoHabito>
                <input placeholder='nome do hábito' />
            </DadosDoHabito>
            <Days>
                <Dias numero={0} setDias={setDias} dia='D'/>
                <Dias numero={1} setDias={setDias} dia='S'/>
                <Dias numero={2} setDias={setDias} dia='T'/>
                <Dias numero={3} setDias={setDias} dia='Q'/>
                <Dias numero={4} setDias={setDias} dia='Q'/>
                <Dias numero={5} setDias={setDias} dia='S'/>
                <Dias numero={6} setDias={setDias} dia='S'/>
             
            </Days>
            <CancSalvar> 
            <Cancelar>Cancelar</Cancelar>
            <Salvar><Save>Salvar</Save></Salvar>
            </CancSalvar>
            </DadosHabit>
        </>

    )
}
export default function Habitos() {
    const [addHabito, setAddHabito]=useState("")
    const { usuario } = useContext(UserContext)
    const [listar, setListar] = useState([])

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${usuario.token}`
            }
        }
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
        promise.then(resposta => setListar(resposta.data))
    }, [])
    console.log(listar)
    return (
        <>
            <Header />
            <MeusHabitos>
                <Subtitulo>Meus hábitos</Subtitulo>
                <ion-icon onClick={()=>setAddHabito('add')} name="add-circle"></ion-icon>
            </MeusHabitos>
            {
                (addHabito != "") ? <CriarHabito /> : ""
            }
            {
                (listar.length == 0) ?
                    <SemHabitos>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </SemHabitos>
                    :
                    <SemHabitos>BIRINBAU</SemHabitos>
            }
             
            <Footer />
        </>

    )
}
const MeusHabitos = styled.div`
display:flex;
justify-content: space-between;
margin-top: 110px;

ion-icon{
    color: #52B6FF;
    width: 75px;
    height: 40px;

}

`

const Subtitulo = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 600;
font-size: 25px;
color: #126BA5;
margin-left: 10px;

`
const SemHabitos = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 600;
font-size: 18px;
color: #666666;
margin-top: 25px;
margin-left: 15px;


`
const DadosDoHabito = styled.div`
width: 100%;
height: 30px;
align-self: center;
display:flex;
justify-content:center;
input{
border-radius: 5px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
margin-top: 5px;
height: 35px;
align-self:center;

  }
input::placeholder{
    color: #DBDBDB;
}
`
const Days = styled.div`
width: 100%;
display: flex;
margin-top: 20px;
margin-left: 62px;



`
const Day = styled.div`

width: 30px;
height: 30px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
color: #DBDBDB;

`
const CancSalvar = styled.div`
display:flex;
margin-top: 30px;
align-self: flex-end;
margin-right: 75px;


`
const Salvar = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 600;
font-size: 17px;
text-align: center;
color: #FFFFFF;
background: #52B6FF;
border-radius: 4.63636px;
height: 30px;
width: 75px;
margin-left: 10px;
margin-bottom:15px;



`
const Cancelar = styled.div`

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 600;
font-size: 17px;
color: #52B6FF;
margin-right: 5px;

`
const DadosHabit = styled.div`
display:flex;
flex-direction: column;
margin-top: 30px;
`
const Save = styled.div`
margin-top: 5px;
`

const Dia = styled.div`

width: 30px;
height: 30px;
background: #CFCFCF;
border: 1px solid #D5D5D5;
border-radius: 5px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
color: #FFFFFF;

`








