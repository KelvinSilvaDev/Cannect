import { HomeHeader } from "../../Components/Header/HeaderStyle";
import { Header } from "../../Components/Header/Header"
import { Hero, Right, Left } from "../../Components/Hero/"
import styled from "styled-components";
import { useState } from 'react';
import { MenuMobile } from "../../Components/Header/MenuMobile";
import mobileMenuIcon from "../../Assets/mobileMenu.svg";
import Services from "../../Components/Services";
import servicesCard1 from "../../Assets/ICONE - Produtos nacionais.svg";
import servicesCard2 from "../../Assets/Icon - Importados.svg";
import servicesCard3 from "../../Assets/DNA.svg";
import Carousel from 'react-elastic-carousel';
import CarouselCards from '../../Components/CarouselCards';

import img1 from "../../Assets/prancheta.svg";
import img2 from "../../Assets/Frame2.svg";
import img3 from "../../Assets/Frame3.svg";
import img4 from "../../Assets/Frame4.svg";
import PassoApasso from "../../Components/CarouselCards/passo-a-passo";

const MainHeader = styled.div``;


const ServicesWrapp = styled.section`
    
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding: 20px;
    background: #ECECE2;

    @media(max-width: 800px){
        flex-direction: column;
        padding: 20px 24px;
    }

`;

const CenterH2 = styled.h2 `
text-align: center;
`;

const SectionCarousel = styled.section`
background-color: #FAFAFA;
padding: 20px 24px;
padding-top: 46px;
`;

const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 500, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},
]

export function Home() {
    const [menuIsVisible, setMenuIsVisible] = useState();
    return (
        <>
            <section>
                < MainHeader >
                    <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible}><img src={mobileMenuIcon} onClick={setMenuIsVisible} /></MenuMobile>
                    <Header menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
                    <Hero>
                        <Right></Right>
                        <Left></Left>
                    </Hero>
                </MainHeader >
            </section>
            <ServicesWrapp>
                <Services icon={servicesCard1} title="Entrega imediata" span="Menor tempo de entrega" />
                <Services icon={servicesCard2} title="Produtos importados" span="Encontre marcas internacionais" />
                <Services icon={servicesCard3} title="Teste Genético" span="Tratamento efetivo para você" />
            </ServicesWrapp>
            <SectionCarousel>
                <Carousel breakPoints={breakPoints}>
                    <CarouselCards img={img1} title="Cannect Assistente" content="Te ajudamos na tarefa de prescrever Cannabis medicinal. Encontramos o melhor custo benefício para seus pacientes." />
                    <CarouselCards img={img2} title="Cannect Educa" content="Oferecemos cursos, podcasts, artigos e workshops para você conhecer sobre a cannabis medicinal e seus benefícios a seus pacientes." />
                    <CarouselCards img={img3} title="Cannect Cuida" content="Serviço de saúde continuada da Cannect. A cannect quer cuidar de você, sempre." />
                    <CarouselCards img={img4} title="Comunidade Cannect" content="Conheças as histórias reais de quem confia na gente" />
                </Carousel>
            </SectionCarousel>
            <section>
                <CenterH2>Inicie seu tratamento com cannabis medicinal</CenterH2>
                <PassoApasso video="https://www.youtube.com/embed/pVE92TNDwUk" passo="Consulta Médica" span="Faça uma consulta presencial ou remota com nossos especialistas" link="#" linkdescription="Agende Agora" />
                <PassoApasso/>
            </section>
        </>

    )
}