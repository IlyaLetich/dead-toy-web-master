import { FC, ReactNode, memo } from "react";
import { BackgroundCardCatalog, ButtonBlock, IconCard, TextBlock } from "./card-catalog.styles";
import { theme } from "../../resources/theme";
import { Text } from '../text/text.styles';
import Rate from '../../images/search/rate.png';
import { Image } from 'react-bootstrap';
import { Button } from "../button";

export type CardCalatogProps = {
    onMore: () => void;
    descripton: ReactNode;
    title: ReactNode;
    url: string;
    onPlay: () => void;
};

export const CardCalatog: FC<CardCalatogProps> = memo(({
    onMore,
    descripton,
    title,
    url,
    onPlay,
}) => (
    <BackgroundCardCatalog>
        <IconCard src={url} />
        <TextBlock>
            <Text alignText="center" themeFont={theme.fonts.ht2}>{title}</Text>
            <Image style={{ width: '140px', height: '25px', marginLeft: '24%', paddingTop: '5px' }} src={Rate} />
            <Text themePadding={['0px', '16px', '0px', '16px']} alignText="center" themeFont={theme.fonts.t}>{descripton}</Text>
        </TextBlock>
        <ButtonBlock>
            <Button
                color={theme.colors.surface}
                background={theme.colors.primary}
                onClick={onPlay}>
                <Text themeFont={theme.fonts.ht2}>Играть</Text>
            </Button>
            <Button
                onClick={onMore}
                style={{ marginLeft: '6px' }}
                color={theme.colors.surface}
                background={theme.colors.secondary}>
                <Text themeFont={theme.fonts.ht2}>Подробнее</Text>
            </Button>
        </ButtonBlock>
    </BackgroundCardCatalog>
));