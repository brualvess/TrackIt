import React from 'react';
import styled from 'styled-components';
export default function Cadastro(){
    return(
        <>
        <Logo>
            <Foto src="logo (1).png" />
        </Logo>
        <Form>
            <input placeholder="email" />
            <input placeholder="senha" />
            <input placeholder="nome" />
            <input placeholder="foto" />
            <Botao>
            <h1>Cadastrar</h1>
        </Botao>
        </Form>
        <Login>Já tem uma conta? Faça login!</Login>

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
color: #DBDBDB;
margin-top: 5px
  }
`
const Botao = styled.div`
background: #52B6FF;
border-radius: 4.63636px;
width: 80%;
height: 50px;
margin-top: 7px;
align-self: center;

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
const Login = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
text-align: center;
text-decoration-line: underline;
color: #52B6FF;
margin-top: 30px
`