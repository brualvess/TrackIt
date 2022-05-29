import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";
export default function Cadastro() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [senha, setSenha] = useState("");
  function cadastrar(){
    setLoading("desabilitou")
    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
    {
      email: email,
      name: name,
      image: image,
      password: senha
    })
    promise.catch(tratarError)
    promise.then(tratarSucesso)
   
  }
  function tratarError(){
    alert("Falha no cadastro")
    setLoading("")
}
function tratarSucesso(){
    navigate("/")
}
  
  return (
    <>
      <Logo>
        <Foto src="logo (1).png" />
      </Logo>
      {
      (loading == "") ?
      <>
      <Form>
        <input type='email' placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type='password' placeholder="senha"value={senha} onChange={e => setSenha(e.target.value)} />
        <input placeholder="nome" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="foto" value={image} onChange={e => setImage(e.target.value)}/>
        <Botao>
          <h1 onClick={cadastrar}>Cadastrar</h1>
        </Botao>
      </Form>
      </>
      :
      <>
      <Form>
        <input type='email' placeholder="email" value={email} onChange={e => setEmail(e.target.value)} disabled/>
        <input type='password' placeholder="senha"value={senha} onChange={e => setSenha(e.target.value)} disabled />
        <input placeholder="nome" value={name} onChange={e => setName(e.target.value)} disabled />
        <input placeholder="foto" value={image} onChange={e => setImage(e.target.value)} disabled/>
        <Botao>
        <ThreeDots color="white" height='50px' />
        </Botao>
      </Form>
      </>
      }
       <Login onClick={()=>navigate("/")}>Já tem uma conta? Faça login!</Login>
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
display:flex;
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