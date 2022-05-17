import styled from "styled-components";
import { Button } from "../Header/HeaderStyle";
import bg1 from "../../Assets/img/imgRight.png";
import bg2 from "../../Assets/img/imgLeft.png";
import { verdeEscuro } from "../UI/variaveis";

export const Left = styled.div`
    float: left;
    background: url(${bg1});
    background-size: cover;
    background-position: center center;
    height: 50vh;
    padding-left: 64px;
    width: 50%;
    background-repeat: no-repeat;
    /* background-position-x: -125px; */
    > Button {
        border: 1px solid #FFF;
            color: #FFF;
            background: none;
    }
    @media(max-width: 800px) {
        padding-left: 24px;
        background-position: bottom right;
        background-position-x: -200px;
        > Button {
            margin-top: -25px;
        }
    }
`;

export const H31 = styled.h3`
margin-top: 64px;
text-align: left;
color: #fff;
font-size: 3.5rem;
padding: 20px;
line-height: 48px;
font-weight: 600;
margin-bottom: 16px;
font-family: 'ITC Avant Garde Gothic Std';
@media(max-width: 800px) {
    margin-top: 24px;
    font-style: normal;
    font-weight: 700 !important;
    font-size: 16px;
    line-height: 24px;
    color: #ECECE2;
    text-align: center;
}
`;

export const H32 = styled.h3`
margin-top: 230px;
text-align: left;
color: ${verdeEscuro};
font-size: 3.5rem;
padding: 20px;
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 48px;
display: flex;
align-items: flex-end;
margin-bottom: 16px;
font-family: 'ITC Avant Garde Gothic Std';

@media(max-width: 800px) {
    margin-top: 150px;
    font-style: normal;
    font-weight: 700 !important;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
}
`;

export const Right = styled.div`
float: right;
width: 50%;
background: url(${bg2});
    background-size: cover;
    background-position: center center;
    height: 50vh;
    padding-left: 64px;
    width: 50%;
    background-repeat: no-repeat;
    /* background-position-x: -125px; */
    > Button {
        border: 1px solid ${verdeEscuro};
            color: ${verdeEscuro};
            background: none;
    }
    @media(max-width: 800px) {
        padding-left: 24px;
        background-position: bottom right;
        background-position-x: -250px;
        > Button {
            padding: 15px 10px;
            margin-top: -25px;
        }
    }

`;

// export const Button = styled.button `
// margin-top: 16px;
// `;

export function Hero() {
    return (
        <section>
            <Left>
                <H31>Somos o maior <br /> Ecossistema de Cannabis <br /> Medicinal da America <br /> Latina</H31>
                <Button>Entenda Mais</Button>
            </Left>
            <Right>
                <H32>Encontre um profissional</H32>
                <Button>Agende Uma Consulta</Button>
            </Right>
        </section>
    );
}