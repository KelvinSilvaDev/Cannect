import styled, { css } from "styled-components";
import {verdeEscuro, verdeClaro, textoEscuro} from "../../UI/variaveis";


export const NavLink = styled.a `
    font-size: 18px;
    text-decoration: none;
    color: #fff;
`;

export const NavMobile = styled.nav `
    display: flex;
    position: absolute;
    top: 100px;
`;


export const Container = styled.section`
    position: absolute;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${verdeClaro};

    opacity: 0;
    pointer-events: none;
    transform: translateY(50px);

    transition: .5s;
    

    flex-direction: column;
    
    
    
    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        transform: rotate(45deg);
        transition: .7s;
    }

    > img {
        position: absolute;
        top: 1.25rem;
        left: 1rem;
    }
    
    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
        transform: scale(0.7);
        transition: .7s;
    }
    
    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0px);
        
        > svg {
            transform: rotate(0deg);
        }

        > nav {
            transform: scale(1);
        }
        
    `};
`;