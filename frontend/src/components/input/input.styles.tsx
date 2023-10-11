import styled from "styled-components";
import { theme } from "../../resources/theme";

export const Input = styled.input`
background: ${theme.colors.background};
border: 2px solid #000000;
border-radius: 10px;
border-color: ${theme.colors.grey};
width: 100%;
font-family: ${theme.fonts.i.family};
font-size: ${theme.fonts.i.desktopSize};
height: 60px;
box-sizing: border-box;
padding-left: 16px;
color: ${theme.colors.grey};
&::placeholder {
    color: ${theme.colors.grey};
  }

&:focus {
    outline: none;
    border-color: ${theme.colors.black};
    color: ${theme.colors.black};
  }
`;

export const InputArea = styled.textarea`
background: ${theme.colors.background};
border: 2px solid #000000;
border-radius: 10px;
resize: none;
border-color: ${theme.colors.grey};
font-family: ${theme.fonts.i.family};
font-size: ${theme.fonts.i.desktopSize};
width: 100%;
height: 240px;
text-align: top;
box-sizing: border-box;
color: ${theme.colors.grey};
padding: 16px 19px;
&::placeholder {
    color: ${theme.colors.grey};
  }

&:focus {
    outline: none;
    border-color: ${theme.colors.black};
    color: ${theme.colors.black};
  }
`;
