import styled from 'styled-components';

export const BackgroundCardNews = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 276px;
    height: 273.41px;
    align-items: center;
    div{
        text-align: center;
    }
`;

export type IconCardProps = {
    src: string;
};

export const IconCard = styled.div<IconCardProps>`
    background-image: url(${props=> props.src});
    background-size: cover;
    background-position: center;
    border: 5px solid #2C2626;
    border-radius: 10px;
    width: 275.96px;
    height: 209.82px;
`;