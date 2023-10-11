import { FC, ReactNode, memo, useEffect } from "react";
import { MainModal, ModalContent } from "./modal.styles";
import closeButtom from "../../images/modal/close.svg"
import { Logo } from "../logo";

export type ModalProps = {
    active : boolean,
    setActive: (value : boolean) => void,
    children: ReactNode
};

export const Modal: FC<ModalProps> = memo(({ active, setActive, children }) => {
    useEffect(() => {
        const handleScroll = (event: Event) => {
          if (active) {
            event.preventDefault();
            event.stopPropagation();
          }
        };
    
        if (active) {
          document.body.style.overflow = "hidden";
          document.body.addEventListener("scroll", handleScroll, {
            passive: false,
          });
        } else {
          document.body.style.overflow = "";
          document.body.removeEventListener("scroll", handleScroll);
        }
    
        return () => {
          document.body.style.overflow = "";
          document.body.removeEventListener("scroll", handleScroll);
        };
    }, [active]);

    return(
        <MainModal active={active} onClick={() => setActive(false)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <div className="logo-container">
                    <Logo src={closeButtom} onClick={() => setActive(false)} />
                </div>
                {children}
            </ModalContent>
        </MainModal>
    )
});