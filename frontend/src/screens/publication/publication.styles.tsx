import { styled } from "styled-components";
import { theme } from "../../resources/theme";



export const PublicationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`;

export const HeaderLine = styled.div`
    width: 229px;
    height: 1px;
    background: ${props => props.color};
`;

export const PublicationContainerSpaceItem = styled.div`
    flex: 0 0 191px;
    @media (max-width: 960px) {
        flex: 0 0 0;
    }
    &:last-child {
        justify-content: flex-end;
        flex-direction: column;
        align-items: center;
        display: flex;

    }
`;
export const PublicationContent = styled.div`
    width: 100%;
`;

export const PublicationImageItem = styled.img`
    height: auto;
    width: 100%;
    display: block;
    border-radius: 10px;
`;

export const TimerReady = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    div{
        margin-left: 5px;
    }
`;

export const PublicationFinal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const NewsRandom = styled.div`
    display:grid;
    grid-template-columns: 280px 280px 280px;
    grid-gap: 16px;
    justify-content: center;
    @media screen and (max-width: 1500px) {
       justify-content: center;
       grid-template-columns: 280px;
    }
`;

export const ButtonSwipeTop = styled.button`
    width: 48px;
    height: 48px;
    background: ${theme.colors.foreground};
    cursor: pointer;
    border-radius: 24px;
    @media screen and (max-width: 960px) {
       display: none;
    }
`;