import styled from "styled-components";

export type BackgroundProps = {
    color: string;
};

export const Background = styled.div<BackgroundProps>`
    box-shadow: ${({ color }) => {
    if (color !== "transparent") {
      return "0px 4px 4px rgba(0, 0, 0, 0.25)";
    } else {
      return "0px 4px 4px rgba(0, 0, 0, 0)";
    }
    }};
    background: ${props => props.color};
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px){
        height: 54px;
    }
`;

export const NameCompany = styled.a`
    width: auto;
    height: auto;
    margin-left: 3vw;
    a{
        div{
            text-shadow: 15px 4px 4px rgba(0, 0, 0, 0.5);
        }
    }
`;