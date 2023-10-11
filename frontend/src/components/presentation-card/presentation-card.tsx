import { FC, ReactNode, memo } from "react";
import { BackgroundCard } from "./presentation-card.styles";
import { theme } from "../../resources/theme";
import { Text } from '../text'

export type PresentationCardProps = {
    lable: ReactNode;
};

export const PresentationCard: FC<PresentationCardProps> = memo(({ lable }) => (
<BackgroundCard>
    <Text themeColor={theme.colors.primary} themeFont={theme.fonts.h2}>{lable}</Text>
</BackgroundCard>
));