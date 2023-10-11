import { FC, memo, useCallback } from "react";
import { AboutContainer, HeaderLine, AboutImage, AboutImageListDesign, AboutInformation, AboutInformationContainer, AboutInformationItem, AboutInformationList, NameHeader, AchievementContainer, AchievementContainerText, ButtonContainer } from './about.styles';

import { Container } from '../../components/container';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { theme } from '../../resources/theme';
import { Text } from '../../components/text';
import { Image } from 'react-bootstrap';
import { Button } from '../../components/button';
import { Logo } from '../../components/logo';

import LogoDeadToy from '../../images/general/logoCompany.png';
import AboutDesignList from '../../images/about/stylesUl.png';
import { linkNavigations } from "../../resources/data/linkNavigations";

export type AboutProps = {

};

export const About: FC<AboutProps> = memo(() => {
    const onPlay = useCallback((link: string) => {
        window.open(link);
    }, []);
    return(
    <main>
        <Header background={theme.colors.foreground} />
        <Container>
            <AboutContainer>
                <AboutImage color={theme.colors.foreground}>
                    <Logo src={LogoDeadToy} />
                </AboutImage>
                <AboutInformation>
                    <NameHeader>
                        <Text themeFont={theme.fonts.h1} themeColor={theme.colors.black}>
                            О НАС
                        </Text>
                    </NameHeader>
                    <HeaderLine color={theme.colors.black} />
                    <AboutInformationContainer>
                        <AboutImageListDesign>
                            <Image src={AboutDesignList} />
                        </AboutImageListDesign>
                        <AboutInformationList>
                            <AboutInformationItem>
                                <Text themeFont={theme.fonts.ht2} themeColor={theme.colors.primary}>
                                    КТО МЫ ТАКИЕ?
                                </Text>
                                <Text themeFont={theme.fonts.ht2} themeColor={theme.colors.black}>
                                    DEAD TOY | Gaming Company – это команда опытных гейм-разработчиков и специалистов
                                    по интернет-продвижению, заинтересованных в создании качественных, а главное
                                    увлекательных игр и приложений, оптимизированных под мобильные устройства и ПК.
                                </Text>
                            </AboutInformationItem>
                            <AboutInformationItem>
                                <Text themeFont={theme.fonts.ht2} themeColor={theme.colors.primary}>
                                    ЧТО НАС ОБЪЕДИНЯЕТ?
                                </Text>
                                <Text themeFont={theme.fonts.ht2} themeColor={theme.colors.black}>
                                    Мы хотим разнообразить индустрию новыми и, что более важно, не заезженными играми. Абсолютно
                                    в каждую разработку наши специалисты вкладывают частичку своей души. Именно поэтому игры под
                                    name-тегом DEAD TOY собирают множество отзывов с положительным рейтингом. КАЧЕСТВО – это то,
                                    что ценит пользователь. И мы прекрасно это понимаем.
                                </Text>
                            </AboutInformationItem>
                            <AboutInformationItem>
                                <Text themeFont={theme.fonts.ht2} themeColor={theme.colors.primary}>
                                    А ТЕПЕРЬ О ГЛАВНОМ. ПОЧЕМУ ИМЕННО ТЫ ВАЖЕН НАМ?
                                </Text>
                                <Text themeFont={theme.fonts.ht2} themeColor={theme.colors.black}>
                                    Ни для кого не секрет, что игровая компания без комьюнити – это вовсе не игровая
                                    компания. Наши усилия, инновационные идеи и, собственно, существование самой
                                    команды не имеет никакого смысла, если не будет Тебя. Да, именно Ты являешься
                                    ключом к нашему стремлению. Стремлению и дальше создавать нечто большее, чем
                                    просто графику, программный код и сотни новых бессмысленных уровней.
                                </Text>
                            </AboutInformationItem>
                        </AboutInformationList>
                    </AboutInformationContainer>
                </AboutInformation>
            </AboutContainer>
            <AchievementContainer>
                <NameHeader>
                    <Text themeFont={theme.fonts.h1} themeColor={theme.colors.black}>
                        Наши достижения
                    </Text>
                </NameHeader>
                <HeaderLine color={theme.colors.black} />
                <AchievementContainerText>
                    <Text themeFont={theme.fonts.ht2} themeColor={theme.colors.black}>
                        DEAD TOY не является одной из крупнейших игровых студий, наша компания, в
                        принципе, мало кому известна. У нас нет огромных бюджетов для разработки игр
                        и тысяч сотрудников. Но разве это значит, что DEAD TOY вне конкуренции?)
                        <br/>
                        <br/>
                        Вы, и правда, так считаете? Хотим сообщить, что Вы сильно ошибаетесь!!! Ведь мы <b>не</b>
                        про <b>количество</b>, а про <b>качество</b>! Команда энтузиастов, наращивающая собственный
                        практический опыт годами, способна на многое. И сейчас мы это докажем.
                        <br/>
                        <br/>
                        Чего мы достигли?
                        <ul>
                            <li><b>Более 6,4 млн.</b> игроков <b>посетили страницы</b> наших <b>игр в Google Play</b>;</li>
                            <li><b>Свыше 1,2 млн.</b> геймеров решили скачать и поиграть;</li>
                            <li>Мы имеем <b>более 1,9 тыс. отзывов</b> о наших играх в Google Play и социальных сетях;</li>
                            <li><b>Ежедневно свыше 80,1 тыс. активных устройств</b> фиксирует Google Play <b>в наших играх</b>.</li>
                        </ul>
                        Вы все еще считаете, что DEAD TOY вне конкуренции?)
                        <br/>
                        <br/>
                        Отдельную благодарность хотелось бы выразить нашему комьюнити!
                        Спасибо, ребята! Вы очень крутые и мы сильно ценим Вас! Уверены,
                        мы и дальше сможем радовать Вас интересными играми!
                    </Text>
                </AchievementContainerText>
            </AchievementContainer>
            <ButtonContainer>
                <Button
                    onClick={() => onPlay(linkNavigations.games)}
                    background={theme.colors.primary}
                    color={theme.colors.background}>
                    <Text themeFont={theme.fonts.ht2}>
                        Играть
                    </Text>
                </Button>
                <Button
                    onClick={() => onPlay("")}
                    background={theme.colors.secondary}
                    color={theme.colors.background}>
                    <Text themeFont={theme.fonts.ht2}>
                        Подробности
                    </Text>
                </Button>
            </ButtonContainer>
        </Container>
        <Footer background={theme.colors.foreground} />
    </main>
)});