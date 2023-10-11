import { FC, memo } from "react";
import { StyledHamburger } from "./hamburger.styles";

export type HamburgerProps = {
    open: boolean;
    setOpen: (v: boolean) => void;
};

export const Hamburger : FC<HamburgerProps> = memo(({
    open,
    setOpen,
}) => (
    <StyledHamburger open={open} onClick={()=> setOpen(!open)}>
        <div />
        <div />
        <div />
    </StyledHamburger>
));