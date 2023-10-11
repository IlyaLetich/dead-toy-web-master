import styled from "styled-components";
import { theme } from "../../resources/theme";

export const BackgroundCard = styled.div`
max-width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: ${theme.colors.foreground};
border-radius: 10px;
height: 300px;
margin-bottom: 30px;
`