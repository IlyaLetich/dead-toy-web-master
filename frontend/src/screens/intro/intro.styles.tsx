import { styled } from "styled-components";

export const BlureBackground = styled.div`
    width: 100%;
    background: rgba(44, 38, 38, 0.61);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    div{
        img{
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 231px;
            margin-bottom: 15px;
            @media screen and (max-width: 960px) {
                width: 138px;
            }
        }
    }
`;

export const IntroDescriptionText = styled.div`
    padding: 0 18px;
    text-align: center; 
    @media screen and (max-width: 960px) {
        margin: 10px 0;
        color: white;
        font-size: 14px;
        padding: 0 18px;
    }
`;


export type IntroBannerProps = {
    backgroundImage: string
};

export const IntroBanner = styled.div<IntroBannerProps>`
    margin-top: 0;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
`;



