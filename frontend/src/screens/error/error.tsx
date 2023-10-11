import { FC, memo, useCallback } from "react";
import { BackgroundError } from "./error.styles";
import { Text } from "../../components/text";
import { Logo } from "../../components/logo";
import { theme } from "../../resources/theme";

import murych from "../../images/error/murych.png"
import { Space } from "../../components/space";
import { Button } from "../../components/button";
import { linkNavigations } from "../../resources/data/linkNavigations";

export type ErrorProps = {

};

export const Error: FC<ErrorProps> = memo(() => {
    const onMore = useCallback((link: string) => {
        window.location.href = `${link}`;
    }, []);

    return (
    <BackgroundError>
        <div>
            <Logo src={murych} />
            <Space themeSpace={20}/>
            <Text themeFont={theme.fonts.h1} themeColor={theme.colors.black}> 
                Упс! Кажется Мурыч снес эту стену...
            </Text>
            <Space themeSpace={20}/>
            <Text themeFont={theme.fonts.ht1} themeColor={theme.colors.black}> 
                Похоже, страницы, которую Вы искали не существует... 
                Попробуйте проверить URL-адрес страницы или вернитесь <b>на главную.</b>
            </Text>
            <Space themeSpace={40}/>
            <Button
                background={theme.colors.primary}
                color={theme.colors.surface}
                onClick={() => onMore(linkNavigations.intro)}>
                <Text themeFont={theme.fonts.ht2} themeColor={theme.colors.surface}>
                    Главная
                </Text>
            </Button>
        </div>
    </BackgroundError>
    )
});