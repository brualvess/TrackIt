import axios from "axios"
import Footer from "./Footer"
import Header from "./Header"
import { useContext } from "react";
import * as dayjs from 'dayjs'
import UserContext from './UserContext';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'dayjs/locale/pt-br'
function HabitosHoje(props) {
    const { usuario } = useContext(UserContext)
    const { habitos, setHoje } = props
    const { name, done, currentSequence, highestSequence, id } = habitos
    const config = {
        headers: {
            "Authorization": `Bearer ${usuario.token}`
        }
    }
    function concluido(){
       
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,null, config)
        promise.then(sucesso)
    }
    function desmarcar(){
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, null,config)
        promise.then(sucesso)
    }
    function sucesso(){
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
        promise.then(resposta => setHoje(resposta.data))
    }

    return (
        <>
            <Caixinha>
                <Dados>
                    <Nome>{name} </Nome>
                    <Sequencia>Sequência atual: {currentSequence} dias
                    </Sequencia>
                    <Record>Seu recorde: {highestSequence} dias
                    </Record>
                </Dados>
                {
                    (done==false) ? 
                    
                    <Done onClick={concluido}><ion-icon name="checkbox-outline"></ion-icon></Done>
                    :
                    <DoneGreen onClick={desmarcar}><ion-icon name="checkbox-outline"></ion-icon></DoneGreen> 

                }
                
            </Caixinha>

        </>
    )
}
export default function RotaHoje() {
    const { usuario } = useContext(UserContext)
    const dia = dayjs().locale('pt-br').format('dddd, DD/MM')
    const [hoje, setHoje] = useState([])
    console.log(dia)
    console.log(hoje)

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${usuario.token}`
            }
        }
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
        promise.then(resposta => setHoje(resposta.data))
    }, [])
    return (
        <>
            <Header />
            <Container>
                <Dia>{dia}</Dia>
                {hoje.map((habitos, index) => <HabitosHoje habitos={habitos} key={index} setHoje={setHoje} />)}
            </Container>
            <Footer />
        </>


    )
}
const Dia = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
color: #126BA5;


`
const Container = styled.div`
margin-top: 100px;



`
const Caixinha = styled.div`
display:flex;
justify-content: space-between;
width: 80%;
margin-left: 40px;




`
const Dados = styled.div`
margin-top: 20px;



`
const Nome = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 600;
font-size: 20px;
color: #666666;


`
const Sequencia = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 500;
font-size: 15px;
color: #666666;


`
const Record = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 500;
font-size: 15px;
color: #666666;



`
const Done = styled.div`

ion-icon{
color:  #EBEBEB;
border-radius: 5px;
width: 60px;
height: 60px;
}

`
const DoneGreen = styled.div`
ion-icon{
color:  #8FC549;;
border-radius: 5px;
width: 60px;
height: 60px;
}
`
