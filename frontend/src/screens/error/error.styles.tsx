import { styled } from "styled-components";



export const AchievementContainer = styled.div`
    margin-top: 70px;
    @media screen and (max-width: 960px) {
        margin-top: 20px;
    }
`;

export const BackgroundError = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: auto;
        }
        div{
            text-align: center;
        }
    }

    @media (max-width: 960px) {
        div{
            div{
                width: auto;
                padding-left: 25px;
                padding-right: 25px;
            }
        }
    }
`;