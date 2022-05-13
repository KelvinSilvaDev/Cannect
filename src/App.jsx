import './App.css';
import logo from './Frame 2566.svg';
import desconto from './desconto.svg';
import gift from './gift.svg';
import frete from './frete.svg';


function App() {
  return (
    <div className="App">
      <header className="MainHeader">
        <div className='HeaderWrapp'>
          <div className='topBar'>
            <div className='desconto'>
              <img src={desconto} className='descontoIcon' />
              <p>Desconto de 10% na primeira compra</p>
            </div>
            <div className='giftCard'>
              <img src={gift} className='giftIcon' />
              <p>Ganhe R$ 50,00</p>
            </div>
            <div className='frete'>
              <img src={frete} className='freteIcon' />
              <p>Entrega de até 48 horas para RJ e SP</p>
            </div>
          </div>
          <div className='HomeHeader'>
            <div className='logo'>
             <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className='menu'>
              <nav>
                <a href="#">Notícias</a>
                <a href="#">Tratamentos</a>
                <a href="#">Produtos</a>
                <a href="#">Soluções Cannect</a>
              </nav>
            </div>
            <div className='btns'>
              <button>Profissionais</button>
              <button>Pacientes</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
