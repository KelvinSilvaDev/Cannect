import "./App.css";
import styled from "styled-components";
//import Header from "./Components/Header/Header";
import { GlobalStyle } from "./Components/GlobalStyle";
import {Home} from "./Pages/Home/";


const MainHeader = styled.div``;



function App() {
  
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
