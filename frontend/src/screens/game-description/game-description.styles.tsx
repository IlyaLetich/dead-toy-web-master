import { styled } from "styled-components";



export const GameContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 1500px) {
        flex-direction: column;
    }
`;

export const GameImage = styled.img`
    flex: 0 0 451px;
    width: 526px;
    height: 451px;
    @media (min-width: 500px) and (max-width: 1500px) {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 40px;
    }
    @media screen and (max-width: 960px) {
        width: 288px;
        height: 245px;
        flex: 0 0;
        margin-bottom: 40px;
    }
    @media (max-width: 330px) {
        width: 221px;
        height: 188px;
        flex: 0 0;
        margin-bottom: 40px;
    }
`;

export const DescriptionGame = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    margin-left: 80px;
    @media screen and (max-width: 1500px) {
        margin-left: 0px;
    }
`;

export const GridGenre = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-row-gap: 15px;
    justify-content: center;
    @media screen and (max-width: 960px) {
        margin-top: 20px;
    }
    @media (max-width: 400px) {
        display: flex;
        flex-direction: column;
        margin-left: 15px;
        margin-top: 25px;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    width: 280px;
    @media screen and (max-width: 320px) {
        justify-content: space-between;
        flex-direction: column;
        height: 120px;
        width: 100%;
        button{
            margin-left: auto;
            margin-right: auto;
        }
    }
`;