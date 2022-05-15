import { Container, NavMobile, NavLink } from "./styles"
import Logo from "../../../Assets/Frame 2566.svg";
import mobileMenuClose from "../../../Assets/X.svg";
import { IoClose } from "react-icons/io5"
import { ButtonHeaderM, Button, MenuMButton } from "../HeaderStyle"
import { useEffect } from "react";

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible]);
    return (

        <Container isVisible={menuIsVisible}>
            <img src={Logo} className="App-logo" alt="logo" />
            <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
            {/* <img src={mobileMenuClose} size={35} onClick={() => setMenuIsVisible(false)} /> */}
            {/* <a href="#" onClick={() => setMenuIsVisible(false)}>X</a> */}
            <NavMobile>
                <NavLink href="#">Notícias</NavLink>
                <NavLink href="#">Tratamentos</NavLink>
                <NavLink href="#">Produtos</NavLink>
                <NavLink href="#">Soluções Cannect</NavLink>
            </NavMobile>
            <ButtonHeaderM>
                <MenuMButton primary href="#">Profissionais</MenuMButton>
                <MenuMButton primary  href="#">Pacientes</MenuMButton>
            </ButtonHeaderM>
        </Container>

    )
}