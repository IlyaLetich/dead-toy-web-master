import { FC, memo, useCallback } from "react";
import { Background, NameCompany } from "./header.styles";

import { theme } from "../../resources/theme";
import { Link } from '../link';
import { Text } from '../text';
import { Menu } from '../menu';
import { linkNavigations } from "../../resources/data/linkNavigations";

export type HeaderProps = {
    background: string;
};

export const Header: FC<HeaderProps> = memo(({
    background
}) => {
    const onMore = useCallback((link: string) => {
        window.location.href = `${link}`;
    }, []);
    return(
    <Background color={background} className="header_container">
        <NameCompany>
            <Link onClick={() => onMore(linkNavigations.intro)}>
                <Text themeFont={theme.fonts.h3}>
                    DEAD TOY
                </Text>
            </Link>
        </NameCompany>
        <Menu />
    </Background>
)});