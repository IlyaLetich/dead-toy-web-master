import styled from "styled-components";

export const Background = styled.div`
    background: ${props => props.color};
    width: 100%;
`;

export const ContainerLine = styled.div`
    width: 100%;
    margin-top: 12px;
    margin-bottom: 25px;
    height: 1px;
    background-color: ${props => props.color};
    @media screen and (max-width: 1000px) {
        display: none;
    }
`; 
export const FooterContainer = styled.div`
    padding: 35px 64px 45px 64px;
    @media screen and (max-width: 1000px) {
        padding: 20px;
    }
`
export const FooterMenuNavigation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        justify-content: center;
    }
`
export const FooterNameCompany = styled.div`
    display: flex;
    align-items: flex-end;
    @media screen and (max-width: 1000px) {
        display: none;
    }
`

export const FooterNavigationLinks = styled.div`
    display: flex;
    justify-content: space-between;
    width: 615px;
    a{
        margin-top: auto;
        margin-bottom: 18px;
        display: inline-block;
    }
    @media screen and (max-width: 1000px) {
        display: none;
    }
`

export const FooterLogoCompany = styled.img`
    width: 60px;
    margin-top: auto;
    margin-bottom: auto;
    @media screen and (max-width: 1000px) {
        width: 100px;
        height: 88px;
        margin-left: auto;
        margin-right: auto;
    }
`

export const FooterSocialNetwork = styled.div`
    width: 37%;
    @media screen and (max-width: 1000px) {
        text-align: center;
        width: 100%;
        margin-top: 15px;
    }
`
export const FooterLanguageControl = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 20%;
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`
export const FooterInformationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1000px) {
        flex-direction: column-reverse;
    }
`
export const FooterEmailPhone = styled.div`
    display: none;
    margin-top: 15px;
    text-align: center;
    @media screen and (max-width: 1000px) {
        display: block;
    }
`
export const FooterDeadtoyConnection = styled.div`
    text-align: right;
    width: 37%; 
    @media screen and (max-width: 1000px) {
        text-align: center;
        width: 100%;
    }
    @media screen and (max-width: 1000px) {
        div{
            &:last-child{
            display: none;
            }
        }
    }
`
export const FooterEmail = styled.div`
    display: flex;
    justify-content: flex-end;
    img{
        margin-right: 5px;
    }
    @media screen and (max-width: 1000px) {
        display: none;
    }
`

export const FooterPhoneLaw = styled.div`
    margin-top: 15px;
    text-align: center;
    @media (min-width: 1000px) {
        display: none;
    }
`

export const FooterSocialNetworkContainerLogos = styled.div`
    display: flex;
    img{
        display: block;
        width: 40px;
        height: 40px;
        margin-right: 3px;
    }
    @media screen and (max-width: 1000px) {
        justify-content: center;
        flex-wrap: wrap;
        display: flex;
    }
    @media (min-width: 384px) and (max-width: 1000px) {
        display: flex;
        img{
            margin-bottom: 5px;
        }
    }
`