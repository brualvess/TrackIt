import Footer from "./Footer";
import Header from "./Header";
import styled from 'styled-components';

export default function Historico() {
    return (
        <>
            <Header />
            <Subtitulo>Histórico</Subtitulo>
            <Historic>
            Em breve você poderá ver o histórico dos seus hábitos aqui!
            </Historic>
            <Footer />
        </>
    )
}
const Historic = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 600;
font-size: 20px;
color: #666666;
margin-top: 30px;
margin-left: 15px;


`
const Subtitulo = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 600;
font-size: 25px;
color: #126BA5;
margin-left: 10px;
margin-top: 120px;

`