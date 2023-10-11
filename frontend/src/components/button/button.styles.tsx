import styled from "styled-components";
import { theme } from "../../resources/theme";

export type ButtonProps = {
    background: string;
  };
  
export const Button = styled.button<ButtonProps>`
    width: 135px;
    height: 50px;
    background-color: ${props => props.background};
    border: 1px solid ${props => props.background};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    &:hover {
      cursor: pointer;
      background-color: ${theme.colors.black};
      border: 1px solid ${theme.colors.black};
    }
`;