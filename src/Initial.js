import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./UserContext";


export default function Initial() {
    const {setUsuario}=useContext(UserContext)
    let navigate = useNavigate();
    const [loading, setLoading] = useState("")
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    function login() {
        setLoading("desabilitou")
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', {
            email: email,
            password: senha
        })
      
        promise.catch(tratarError)
        promise.then(tratarSucesso)
    }
    function tratarError(){
            alert("Falha no login")
            setLoading("")
    }
    function tratarSucesso(resposta){
            navigate("/hoje")
            setUsuario(resposta.data)
    }

    return (
        <>
            <Logo>
                <Foto src="logo (1).png" />
            </Logo>
            <Form>
                {
                (loading == "") ?
                <>
                <input type='email' placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type='password' placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} />
                <Botao onClick={login}>
                    <h1>Entrar</h1>
                </Botao>
                </>
                :
                <>
                 <input type='email' placeholder="email" value={email} disabled />
                <input type='password' placeholder="senha" value={senha} disabled />
                <Botao >
                <ThreeDots color="white" height='50px' />
                </Botao>
                </>
                
                }
            </Form>
            <Cadastro onClick={()=>navigate("/cadastro")}>Não tenho uma conta? Cadastre-se!</Cadastro>

        </>
    )
}
const Logo = styled.div`
display: flex;
justify-content: center;
`
const Foto = styled.img`
align-self:center;
margin-top: 200px;
width: 230px;
height: 200px;
`
const Form = styled.form`
display: flex;
justify-content: center;
flex-direction: column;
margin-top: 20px;

  input{
width: 80%;
height: 50px;
align-self:center;
border-radius: 5px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
margin-top: 5px
  }
input::placeholder{
    color: #DBDBDB;
}
input:disabled{
    background-color:#F2F2F2;
    color:#AFAFAF
}
`

const Botao = styled.div`
background: #52B6FF;
border-radius: 4.63636px;
width: 80%;
height: 50px;
margin-top: 7px;
align-self: center;
display: flex;
justify-content: center;

h1{
color: white;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 25px;
text-align: center;
margin-top: 10px;
}


`

const Cadastro = styled.div`
font-family: 'Lexend Deca'; 
font-style: normal;
font-weight: 400;
font-size: 20px;
text-align: center;
text-decoration-line: underline;
color: #52B6FF;
margin-top: 30px
`