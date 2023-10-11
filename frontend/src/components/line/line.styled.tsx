import styled from "styled-components";
import { theme } from "../../resources/theme";

export const Line = styled.div<{themeColor?: string}>`
width: 100%;
background-color: ${props => props.themeColor === undefined ? theme.colors.black : props.themeColor};
height: 1px;
margin-top: 14px;
margin-bottom: 24px;
`;