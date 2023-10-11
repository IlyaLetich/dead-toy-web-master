import styled from "styled-components";
 
export type StyledHamburgerProps = {
    open: boolean;
};

export const StyledHamburger = styled.button<StyledHamburgerProps>`
    position: fixed;
    right: 3vw;
    top: 24px;
    width: 32px;
    height: 32px;
    padding: 0;
    background: transparent;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    border: none;
    cursor: pointer;
    outline: none;
    z-index: 1000;

    div {
        position: relative;
        width: 100%;
        height: 0.25rem;
        border-radius: 10px;
        transition: all 0.3s linear;
        transform-origin: 1px;
        background-color: ${({ open }) =>
          open ? "#000000" : "#FCF7F7"};

        &:first-child {
            transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
        }

        &:nth-child(2) {
            width: 60%;
            margin-left: auto;
            margin-right: 0px;
            opacity: ${({ open }) => (open ? "0" : "1")};
            transform: ${({ open }) => (open ? "translateX(-10px)" : "translateX(0)")};
        }

        &:nth-child(3) {
          transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
        }
    } 
    @media (max-width: 960px){
        width: 28px;
        height: 28px;
        top: 13px;
    }
`;