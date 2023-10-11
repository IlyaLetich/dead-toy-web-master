import { FC, ReactNode, memo } from "react";
import { BackgroundTitleSearch } from "./title-search.styles";
import { Text } from '../text'
import { theme } from "../../resources/theme";
import SearchUI from '../../images/search/searchUI.png'
import { Image } from "react-bootstrap";

export type TitleSearchProps = {
lable: ReactNode;
};

export const TitleSearch: FC<TitleSearchProps> = memo(({ lable }) => (
    <BackgroundTitleSearch>
        <Text themePadding={0} themeColor={theme.colors.foreground} themeFont={theme.fonts.h1}>{lable}</Text>
        <Image style={{ width: '40px', height: '40px'}} src={SearchUI} />
    </BackgroundTitleSearch>
));