import styled from 'styled-components';
import { theme } from '../../resources/theme';

export const BackgroundCardCatalog = styled.div`
position: relative;
background: ${theme.colors.foreground};
border-radius: 10px;
width: 275px;
margin-top: 75px;
margin-bottom: 55px;
height: 210px;
z-index: 1;
`;

export const IconCard = styled.img`
position: relative;
width: 150px;
height: 150px;
border-radius: 50%;
border: 3px solid #F8F4F4;
top: 0%;
left: 50%;
margin-right: -50%;
transform: translate(-50%, -50%);
margin-bottom: 10px;
`;

export const TextBlock = styled.div`
display: block;
width: 100%;
margin-top: -85px;
`;

export const ButtonBlock = styled.div`
display: flex;
margin-top: 35px;
width: 100%;
`;