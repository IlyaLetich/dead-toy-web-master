import { FC, useCallback, useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks";
import { MenuContainer, MenuContainerContent, MenuContainerHeader, MenuContainerLinks, MenuFooter, MenuFooterSocialNetwork, MenuFooterSocialNetworkLogos, MenuNameCompany, StyledMenu } from "./menu.styles";
import { Hamburger } from '../hamburger';

import { theme } from "../../resources/theme";
import { Link } from '../link';
import { Logo } from '../logo';
import { Text } from '../text';

import { linkSocialNetworks } from "../../resources/data/linkSocialNetworks";
import { linkNavigations } from "../../resources/data/linkNavigations";

import catLink from "../../images/general/catLink.png"
import { LanguageControl } from "../language-control";
import { Space } from "../space";

export type MenuProps = {

};

export const Menu : FC<MenuProps> = () => {
    const [open, setOpen] = useState<boolean>(false);
    const node = useRef<HTMLDivElement>(null);

    useOnClickOutside(node, () => setOpen(false));
    
    const onPlay = useCallback((link: string) => {
      window.open(link);
    }, []);
    const onMore = useCallback((link: string) => {
      window.location.href = `${link}`;
    }, []);

    return (
    <div ref={node}>
        <Hamburger open={open} setOpen={setOpen} />
        <StyledMenu open={open}>
          <MenuContainerContent>
            <MenuContainer>
              <MenuContainerHeader>
                <MenuNameCompany>
                  <Link onClick={() => onMore(linkNavigations.intro)}>
                    <Text themeFont={theme.fonts.h3} themeColor={theme.colors.black}>
                      DEAD TOY
                    </Text>
                  </Link>
                </MenuNameCompany>
                <MenuContainerLinks>
                  <Link onClick={() => onMore(linkNavigations.intro)}>
                    <Text themeFont={theme.fonts.i} themeColor={theme.colors.black}>
                      Главная
                    </Text>
                    <Logo src={catLink}/>
                  </Link>
                  <Link onClick={() => onMore(linkNavigations.about)}>
                    <Text themeFont={theme.fonts.i} themeColor={theme.colors.black}>
                      О нас
                    </Text>
                    <Logo src={catLink}/>
                  </Link>
                  <Link onClick={() => onMore(linkNavigations.catalog)}>
                    <Text themeFont={theme.fonts.i} themeColor={theme.colors.black}>
                      Каталог
                    </Text>
                    <Logo src={catLink}/>
                  </Link>
                  <Link onClick={() => onMore(linkNavigations.news)}>
                    <Text themeFont={theme.fonts.i} themeColor={theme.colors.black}>
                      Новости
                    </Text>
                    <Logo src={catLink}/>
                  </Link>
                  <Link onClick={() => onMore(linkNavigations.contact)}>
                    <Text themeFont={theme.fonts.i} themeColor={theme.colors.black}>
                      Связь с нами
                    </Text>
                    <Logo src={catLink}/>
                  </Link>
                </MenuContainerLinks>
              </MenuContainerHeader>
            </MenuContainer>
            <MenuFooter>
              <LanguageControl/>
              <Space themeSpace={15}/>
              <MenuFooterSocialNetwork color={theme.colors.background}>
                <MenuFooterSocialNetworkLogos>
                  {linkSocialNetworks.map((network) =>
                      <Link>
                          <Logo src={network.logo} onClick={() => (onPlay(network.link))}/>
                      </Link>
                  )}
                </MenuFooterSocialNetworkLogos>
              </MenuFooterSocialNetwork>
            </MenuFooter>
          </MenuContainerContent>
        </StyledMenu>
    </div>
  );
}
