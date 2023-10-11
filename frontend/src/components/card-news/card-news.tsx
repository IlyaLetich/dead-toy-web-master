import { FC, ReactNode, memo } from "react";
import { BackgroundCardNews, IconCard } from "./card-news.styles";
import { theme } from "../../resources/theme";
import { Text } from '../text/text.styles';
import { Link } from "../link";

export type CardNewsProps = {
    descripton: ReactNode;
    title: ReactNode;
    url: string;
    onMore: () => void;
};

export const CardNews: FC<CardNewsProps> = memo(({
    onMore,
    descripton,
    title,
    url
}) => (
    <BackgroundCardNews>
        <IconCard src={url}/>
        <Text themeFont={theme.fonts.ht2} themeColor={theme.colors.black}>{title}</Text>
        <Text themeFont={theme.fonts.l} themeColor={theme.colors.black}>{descripton}</Text>
        <Link onClick={onMore}>
            <Text themeFont={theme.fonts.l} themeColor={theme.colors.primary}>подробнее</Text>
        </Link>
    </BackgroundCardNews>
));