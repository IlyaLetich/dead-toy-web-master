import styled from "styled-components";
import { theme } from "../../resources/theme";

export type StyledMenuProps = {
    open: boolean;
};

export const StyledMenu = styled.nav<StyledMenuProps>`
  top: 0;
  right: 0;
  height: 100vh;
  width: 356px;
  position: absolute;
  background-color: ${theme.colors.background};
  z-index: 3;
  box-shadow: -4px 0 4px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  @media (max-width: 600px) {
    width: 100%;
  }
`;


export const MenuContainer = styled.div`
    height: 70%;
`

export const MenuContainerContent = styled.div`
    margin: 0 20px 20px 20px;
    height: 100vh;
`

export const MenuContainerHeader = styled.div`

`

export const MenuNameCompany = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    a{
      height: auto;
      div{
      }
    }
    @media screen and (max-width: 960px){
      height: 54px;
    }
`

export const MenuContainerLinks = styled.div`
    margin-top: 41px;
    margin-bottom: 21px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 250px;
    a{
      display: flex;
      align-items: center;
      img{
        margin-left: 5px;
        width: 20px;
        height: 20px;
        display: none;
      }
      &:hover{
        img{
          display: inline;
        }
      }
    }

`

export const MenuFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 27%;
    @media screen and (max-height: 570px) {
      display: none;
    }
`

export const MenuFooterSocialNetwork = styled.div`
    background: ${props => props.color};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    height: 135px;
    align-items: center;
    background-color: #F3F3F3;
    justify-content: center;
    display: flex;
`


export const MenuFooterSocialNetworkLogos = styled.div`
    display: flex;
    width: 190px;
    height: 100px;
    margin-top: auto;
    margin-bottom: auto;
    flex-wrap: wrap;
    justify-content: space-between;
    a{
      img{
        width: 40px;
        height: 40px;
      }
    }
    
`
