import { FC, memo, useCallback } from "react";
import { Background, ContainerLine, FooterContainer, FooterDeadtoyConnection, FooterEmail, FooterEmailPhone, FooterInformationContainer, FooterLanguageControl, FooterLogoCompany, FooterMenuNavigation, FooterNameCompany, FooterNavigationLinks, FooterPhoneLaw, FooterSocialNetwork, FooterSocialNetworkContainerLogos } from "./footer.styles";

import { theme } from "../../resources/theme";
import { Link } from '../link';
import { Text } from '../text';
import { Logo } from '../logo';

import emailLogo from "./../../images/logosSocialNetwork/email.svg"
import logoCompany from "./../../images/general/logoCat.png"
import { linkSocialNetworks } from "../../resources/data/linkSocialNetworks";
import { linkNavigations } from "../../resources/data/linkNavigations";
import { LanguageControl } from "../language-control";
import { Space } from "../space";
import { Translated } from "../translated";

export type FooterProps = {
    background: string;
};

export const Footer: FC<FooterProps> = memo(({background}) => {

    const onPlay = useCallback((link: string) => {
        window.open(link);
    }, []);
    const onMore = useCallback((link: string) => {
        window.location.href = `${link}`;
    }, []);

    return(
    <Background color={background}>
        <FooterContainer>
            <FooterMenuNavigation>
                <FooterNameCompany>
                    <Link onClick={() => onMore(linkNavigations.intro)}>
                        <Text themeFont={theme.fonts.h1}>
                            DEAD TOY
                        </Text>
                    </Link>
                </FooterNameCompany>
                <FooterNavigationLinks>
                    <Link onClick={() => onMore(linkNavigations.intro)}>
                        <Text themeFont={theme.fonts.c}>
                            <Translated id="home"/>
                        </Text>
                    </Link>
                    <Link onClick={() => onMore(linkNavigations.about)}>
                        <Text themeFont={theme.fonts.c}>
                            <Translated id="about"/>
                        </Text>
                    </Link>
                    <Link onClick={() => onMore(linkNavigations.catalog)}>
                        <Text themeFont={theme.fonts.c}>
                            <Translated id="catalog"/>
                        </Text>
                    </Link>
                    <Link onClick={() => onMore(linkNavigations.news)}>
                        <Text themeFont={theme.fonts.c}>
                            <Translated id="news"/>
                        </Text>
                    </Link>
                    <Link onClick={() => onMore(linkNavigations.contact)}>
                        <Text themeFont={theme.fonts.c}>
                            <Translated id="contact"/>
                        </Text>
                    </Link>
                </FooterNavigationLinks>
                <FooterLogoCompany src={logoCompany}/>
            </FooterMenuNavigation>
            <ContainerLine color={theme.colors.background}/>
            <FooterEmailPhone>
                <Text themeFont={theme.fonts.ht2}>
                    dead.toy.company@gmail.com
                </Text>
            </FooterEmailPhone>
            <FooterInformationContainer>
                <FooterSocialNetwork>
                    <Text themeFont={theme.fonts.ht2}>
                        <Translated id="subscribe"/>
                    </Text>
                    <Space themeSpace={10}/>
                    <FooterSocialNetworkContainerLogos>
                        {linkSocialNetworks.map((network) =>
                            <Link>
                                <Logo src={network.logo} onClick={() => (onPlay(network.link))}/>
                            </Link>
                        )}
                    </FooterSocialNetworkContainerLogos>
                </FooterSocialNetwork>
                <FooterLanguageControl>
                    <Text themeFont={theme.fonts.ht2}>
                        <Translated id="language"/>
                    </Text>
                    <Space themeSpace={10}/>
                    <LanguageControl/>
                </FooterLanguageControl>
                <FooterDeadtoyConnection>
                    <FooterEmail>
                        <Logo width="25px" height="25px" src={emailLogo}/>
                        <Text themeFont={theme.fonts.ht2}>
                            dead.toy.company@gmail.com
                        </Text>
                    </FooterEmail>
                    <Space themeSpace={10}/>
                    <Text themeFont={theme.fonts.l}>
                        <Translated id="deadToyRights"/>
                    </Text>
                </FooterDeadtoyConnection>
            </FooterInformationContainer>
            <FooterPhoneLaw>
                <Text themeFont={theme.fonts.l}>
                    <Translated id="deadToyRights"/>
                </Text>
            </FooterPhoneLaw>
        </FooterContainer>
    </Background>
    )
});