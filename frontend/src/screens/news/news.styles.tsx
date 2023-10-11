import { styled } from "styled-components";



export const GridCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 275px));
    grid-column-gap: 20px;
    grid-row-gap: 24px;
    justify-content: center;
    @media screen and (max-width: 1500px) {
        
    }
`;