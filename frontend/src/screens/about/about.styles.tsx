import { styled } from "styled-components";

export const Background = styled.div`
    background: #F8F4F4;
`;

export const AboutContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1120px) {
        flex-direction: column;
    }
`;

export const AboutImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 353px;
    flex: 0 0 353px;
    height: 650px;
    background: ${props => props.color};
    border-radius: 10px;
    @media screen and (max-width: 1120px){
        width: 100%;
        height: 290px;
        margin-bottom: 20px;
    }
    @media screen and (max-width: 460px) {
        img{
            width: 200px;
            height: 200px;
        }
    }
`;

export const AboutInformation = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    margin-left: 25px;
    @media screen and (max-width: 1120px){
        margin-left: 0px;
    }
`;

export const NameHeader = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    height: 50px;
`;

export const HeaderLine = styled.div`
    width: 229px;
    height: 1px;
    margin-top: 24px;
    margin-bottom: 24px;
    background: ${props => props.color};

    @media screen and (max-width: 1120px) {
        width: 143px;
        margin-top: 0px;
        margin-bottom: 15px;
    }
`;

export const AboutInformationContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
`;

export const AboutImageListDesign = styled.div`
    width: 64px;
    height: 100%;
    display: flex;
    align-items: center;
    @media screen and (max-width: 1120px) {
        display: none;
    }
`;

export const AboutInformationList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 24px;
    @media screen and (max-width: 1120px) {
        margin-left: 0px;
    }
`;

export const AboutInformationItem = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: auto;
    @media screen and (max-width: 960px) {
        margin-top: 0px;
    }
`;

export const AchievementContainer = styled.div`
    margin-top: 70px;
    @media screen and (max-width: 960px) {
        margin-top: 20px;
    }
`;
export const AchievementContainerText = styled.div`
    div{
        margin-bottom: 45px;
        &:last-child {
            margin-bottom: 0px;
        }
        &:nth-child(3) {
            margin-bottom: 0px;
        }
        @media screen and (max-width: 960px) {
        margin-bottom: 25px;
        }
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
        margin-left: auto;
        margin-right: auto;
        align-items: center;
    }
`;
