import styled from "styled-components"
export default function Header(){
    return(
        <>
        <Cabeçalho>
        <Name>TrackIt</Name>
        <img src="Rectangle 14.png" />
        </Cabeçalho>
        <MeusHabitos>
            <Subtitulo>Meus hábitos</Subtitulo>
            <ion-icon name="add-circle"></ion-icon>
        </MeusHabitos>
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
const MeusHabitos= styled.div`
display:flex;
justify-content: space-between;
margin-top: 30px;
ion-icon{
    color: #52B6FF;
    width: 75px;
    height: 40px;

}

`
const Subtitulo= styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 600;
font-size: 25px;
color: #126BA5;
margin-left: 10px;

`


