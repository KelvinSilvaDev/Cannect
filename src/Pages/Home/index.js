import { HomeHeader } from "../../Components/Header/HeaderStyle";
import { Header } from "../../Components/Header/Header"
import styled from "styled-components";
import { useState } from 'react';
import { MenuMobile } from "../../Components/Header/MenuMobile";
import mobileMenuIcon from "../../Assets/mobileMenu.svg";

const MainHeader = styled.div``;

export function Home() {
    const [menuIsVisible, setMenuIsVisible] = useState();
    return (

        < MainHeader >
            <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible}><img src={mobileMenuIcon} onClick={setMenuIsVisible} /></MenuMobile>
            <Header menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
        </MainHeader >

    )
}