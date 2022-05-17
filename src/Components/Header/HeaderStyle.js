import styled from "styled-components";
import { keyframes } from "styled-components";
import { verdeEscuro, verdeClaro, textoEscuro } from "../UI/variaveis";

// const cabecalho = styled.div`
// background: 
// `;

export const HeaderWrapp = styled.div`
width: 100%;
overflow-x: hide;
position: relative;
`;

// const scroll = keyframes`
//   from {
//     margin-right:0;
//   }
//   to {
//     margin-right:-100%;
//   }
// `;

//animation: ${scroll} 4s linear infinite; 

export const TopBar = styled.div`
  background: ${verdeEscuro};
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  height: 50px;
  width: 100%;

`;



export const TopBarWrapp = styled.div`
width:100%;
display:flex;
@media(max-width: 800px) {
  width: 100%;
  overflow-x: auto;
  &::-webkit-scrollbar{
    width: 0 !important;
    display: none;
  }
  position: absolute;
  
  
  
}
`;

export const LogoDesktop = styled.div`
@media(max-width: 800px){
  display: none;
}
`;
export const HomeHeader = styled.div`
  background: #5b945b;
  color: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 64px;
  align-content: center;
  align-items: center;
  padding-top: 60px;
  @media(max-width: 800px) {
    
    padding: 24px 14px;
    
  }
`;

export const Desconto = styled.div`
  width: 18%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-weight: 600;
  padding-top: 12px;
  padding-left: 16px;
  padding-bottom: 9px;
  @media(max-width: 800px) {
    min-width: 100%;
  }
`;

export const ButtonHeader = styled.div`

@media (max-width: 800px) {
  display: none;
}

`;


export const ButtonHeaderM = styled.div`
margin-top: 0;
width: 80%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-content: space-around;
justify-content: space-between;
align-items: center;
margin-right: 20px;
`;

export const MenuMobileTogler = styled.image`
margin-top:50px;
width:100%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-content: space-between;
justify-content: space-between;
align-items: center;
@media (min-width: 800px) {
  display: none;
}
`;



export const GiftCard = styled.div`
  width: 32%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
  font-weight: 600;
  padding-top: 12px;
  padding-left: 16px;
  padding-bottom: 9px;
  align-content: center;
  @media(max-width: 800px) {
    min-width: 100%;
  }
`;

export const FreteP = styled.p`
  color: #fff;
  margin-right: 16px;
  margin-left: 16px;
`;
export const Frete = styled.div`
  width: 32%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-end;
  align-items: center;
  @media(max-width: 800px) {
    min-width: 100%;
  }
`;

export const Button = styled.button`
  margin-left: 24px;
  padding: 16px;
  background-color: ${(props) => props.dark ? verdeEscuro : verdeClaro};
  color: ${(props) => props.primary ? "#fff" : textoEscuro};
  border: solid 1px;
  border-color: ${(props) => props.primary ? "#fff" : verdeEscuro};
  border-radius: 13px;
`;

export const MenuMButton = styled.button`
  margin-top: 120px;
  margin-left: 24px;
  padding: 16px;
  background-color: ${(props) => props.primary ? verdeEscuro : verdeClaro};
  color: ${(props) => props.primary ? "#fff" : textoEscuro};
  border: ${(props) => props.primary ? "none" : "solid 1px"};
  border-color: ${(props) => props.primary ? "#fff" : verdeEscuro};
  border-radius: 13px;
`;


export const Menu = styled.nav`
  margin: 0 16px;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-family: 'ITC Avant Garde Gothic Std';
  font-size: 16px;
  line-height: 24px;
  @media (max-width: 800px){
    display: none;
  }
`;

export const MenuLink = styled.a`
  margin: 0 16px;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-family: 'ITC Avant Garde Gothic Std';
  font-size: 16px;
  line-height: 24px;
`;