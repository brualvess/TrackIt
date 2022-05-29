import { useContext } from "react";
import UserContext from "./UserContext";
import styled from "styled-components"
export default function Header(){
    const {usuario}=useContext(UserContext)
    return(
        <>
        <Cabeçalho>
        <Name>TrackIt</Name>
        <img src={usuario.image} />
        </Cabeçalho>
       
        </>
       
    )
}
const Cabeçalho = styled.div`
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
height: 80px;
width: 100%;
display: flex;
justify-content: space-between;
position:fixed;
top:0;


img{
width: 51px;
height: 51px;
margin-top: 15px;
margin-right: 10px;
}

`
const Name = styled.div`
font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 38.982px;
color: #FFFFFF;
margin-top: 15px;
margin-left: 10px;

`



