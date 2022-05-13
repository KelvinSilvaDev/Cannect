import "./App.css";
import styled from "styled-components";
import logo from "./Frame 2566.svg";
import desconto from "./desconto.svg";
import gift from "./gift.svg";
import frete from "./frete.svg";

const MainHeader = styled.div``;
const HeaderWrapp = styled.div``;
const TopBar = styled.div`
background: #125950;
display: flex;
flex-wrap: nowrap;
flex-direction: row;
align-content: center;
align-items: center;
justify-content: space-between;
`;
const HomeHeader = styled.div`
  background: #5b945b;
  color: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 64px;
  align-content: center;
  align-items: center;
`;

function App() {
  return (
    <div className="App">
      <MainHeader>
        <HeaderWrapp>
          <TopBar>
            <div className="desconto">
              <img src={desconto} className="descontoIcon" />
              <p>Desconto de 10% na primeira compra</p>
            </div>
            <div className="giftCard">
              <img src={gift} className="giftIcon" />
              <p>Ganhe R$ 50,00</p>
            </div>
            <div className="frete">
              <img src={frete} className="freteIcon" />
              <p>Entrega de até 48 horas para RJ e SP</p>
            </div>
          </TopBar>
          <HomeHeader>
            <div className="logo">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="menu">
              <nav>
                <a href="#">Notícias</a>
                <a href="#">Tratamentos</a>
                <a href="#">Produtos</a>
                <a href="#">Soluções Cannect</a>
              </nav>
            </div>
            <div className="btns">
              <button>Profissionais</button>
              <button>Pacientes</button>
            </div>
          </HomeHeader>
        </HeaderWrapp>
      </MainHeader>
    </div>
  );
}

export default App;
