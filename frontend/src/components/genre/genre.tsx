import { FC, memo } from "react";
import { Logo } from "../logo";
import { Container } from "./genre.styles";
import { Text } from '../text';
import { theme } from "../../resources/theme";

export type GenreGameProps = {
    name: string,
    image: string,
    text: string
};

export type GenreProps = {
    genreGame: GenreGameProps,
};

export const Genre: FC<GenreProps> = memo(({genreGame}) => (
    <Container>
        <Logo src={genreGame.image}/>
        <Text themeFont={theme.fonts.s} themeColor={theme.colors.black}>
            {genreGame.text}
        </Text>
    </Container>
));