import React, { Component } from 'react';
import logo from "../../Frame 2566.svg";
import desconto from "../../desconto.svg";
import gift from "../../gift.svg";
import frete from "../../frete.svg";
import { MenuMobile } from './MenuMobile';
import mobileMenuIcon from "../../Assets/mobileMenu.svg";




import { Desconto, Frete, FreteP, GiftCard, HeaderWrapp, TopBarWrapp, HomeHeader, LogoDesktop,  Menu, MenuLink, ButtonHeader, MenuMobileTogler, TopBar, Button } from "./HeaderStyle";





export function Header({ menuIsVisible, setMenuIsVisible }) {

    return (

        <HeaderWrapp>
            <TopBar>
                <TopBarWrapp>
                    <Desconto>
                        <img src={desconto} className="descontoIcon" />
                        <p>Desconto de 10% na primeira compra</p>
                    </Desconto>
                    <GiftCard>
                        <img src={gift} className="giftIcon" />
                        <p>Ganhe R$ 50,00</p>
                    </GiftCard>
                    <Frete>
                        <img src={frete} className="freteIcon" />
                        <FreteP>Entrega de até 48 horas para RJ e SP</FreteP>
                    </Frete>
                </TopBarWrapp>
            </TopBar>
            <HomeHeader>
                <LogoDesktop>
                    <img src={logo} className="App-logo" alt="logo" />
                </LogoDesktop>
                <MenuMobileTogler menuIsVisible={menuIsVisible}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <img src={mobileMenuIcon} onClick={() => setMenuIsVisible(true)} />
                </MenuMobileTogler>
                <Menu>
                    <MenuLink href='#'>Notícias</MenuLink>
                    <MenuLink href='#'>Tratamentos</MenuLink>
                    <MenuLink href='#'>Produtos</MenuLink>
                    <MenuLink href='#'>Soluções Cannect</MenuLink>

                </Menu>
                <ButtonHeader>
                    <Button primary href="#">Profissionais</Button>
                    <Button primary href="#">Pacientes</Button>
                </ButtonHeader>
            </HomeHeader>
        </HeaderWrapp>

    );
}

export default Header;