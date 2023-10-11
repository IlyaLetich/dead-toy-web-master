import styled from "styled-components";
import { theme } from "../../resources/theme";

export type MainModalProps ={
    active: boolean
}

export const MainModal = styled.div<MainModalProps>`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${({ active }) => active? 1 : 0};
    pointer-events: ${({ active }) => active? "all" : "none"};
    transition: 0.5s;
`

export const ModalContent = styled.div`
    padding: 20px;
    border-radius: 12px;
    background-color: white;
    width: 620px;
    height: 285px;
    background: ${theme.colors.background};
    border: 5px solid ${theme.colors.foreground};
    box-shadow: 2px 1px 0px #000000;
    border-radius: 10px;
    transition: 0.4 all;
    @media (max-width: 960px) {
        width: 270px;
        height: 180px;
    }
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .logo-container {
        cursor: pointer;
        position: absolute;
        top: 10px; /* Измените значения top и right по вашему усмотрению */
        right: 10px; /* Измените значения top и right по вашему усмотрению */
    }
`
