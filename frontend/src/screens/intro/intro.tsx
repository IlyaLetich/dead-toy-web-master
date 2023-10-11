import { FC, memo } from "react";
import { BlureBackground, IntroBanner, IntroDescriptionText } from "./intro.styles";
import { theme } from "../../resources/theme";
import { Header } from "../../components/header";
import { Text } from "../../components/text";
import { Logo } from "../../components/logo";

import logoDeadToy from '../../images/general/logoCat.png';
import introImage from './../../images/intro/background-intro.jpg';

export type IntroProps = {

};

export const Intro: FC<IntroProps> = memo(() => (
    <IntroBanner backgroundImage={introImage}>
        <Header background="transparent"/>
        <BlureBackground>
            <div>
                <Logo src={logoDeadToy} />
                <IntroDescriptionText>
                    <Text themeFont={theme.fonts.s}> 
                        Dead Toy | Gaming Company – это команда опытных гейм-разработчиков,<br />
                        заинтересованных в создании качественных игр и приложений,<br />
                        оптимизированных под мобильные устройства и ПК.
                    </Text>
                </IntroDescriptionText>
            </div>
        </BlureBackground>
    </IntroBanner >
));