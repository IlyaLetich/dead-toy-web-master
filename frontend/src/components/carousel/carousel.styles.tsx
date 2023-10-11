import styled from 'styled-components';

export const CarouselContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    overflow: hidden;
    margin-top: 70px;
    justify-content: space-between;

    button{
        color: black;
        font-size: 24px;
        height: 140px;
        background: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        &:last-child{
            justify-content: flex-end;
        }
        @media (max-width: 960px) {
            display: none;
        }
    }

    @media (max-width: 960px) {
    
    }
`;

export const CarouselSlides = styled.div`
    display: flex;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
        display: none;
    }
    div{
        &:last-child{
            margin-right: 0px;
        }
    }
    @media (min-width: 1400px) {
        flex: 0 0 1297px;
    }
    @media (max-width: 1280px) {
        flex: 0 0 1048px;
    }
    @media (max-width: 960px) {
        width: 100%;
    }
`;

export const CarouselSlide = styled.div`
    flex-shrink: 0;
    flex: 0 0 249px;
    height: 140px;
    margin-right: 13px;
    background-size: cover;
    background-position: center;
    scroll-snap-align: center;
    cursor: pointer;
    border-radius: 10px;
`;
