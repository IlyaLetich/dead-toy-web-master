import styled from "styled-components";

export const TextBlock = styled.div`
width: 100%;
`;

export const ContactBlock = styled.form`
display: flex;
justify-content: center;
width: 100%;
`;

export const GridContainer = styled.div`
  display: grid;
  width: 814px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  @media screen and (max-width: 640px){
    grid-template-columns: 1fr;
  }
`;

export const GridElement1 = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  @media screen and (max-width: 640px){
    grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  }
`;

export const GridElement2 = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  @media screen and (max-width: 640px){
    grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  }
`;

export const GridElement3 = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  @media screen and (max-width: 640px){
    grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  }
`;

export const ButtonBlock = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;