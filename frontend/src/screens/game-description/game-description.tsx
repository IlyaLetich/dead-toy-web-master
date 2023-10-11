import { FC, memo, useCallback, useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Container } from "../../components/container";
import { Footer } from "../../components/footer";
import { theme } from "../../resources/theme";
import { useSearchParams } from "react-router-dom";
import { Genre } from "../../components/genre";
import { genres } from "../../resources/genres";
import { ButtonContainer, DescriptionGame, GameContainer, GameImage, GridGenre } from "./game-description.styles";
import { Text } from "../../components/text";
import { Image } from 'react-bootstrap';
import Rate from '../../images/search/rate.png';
import { Button } from "../../components/button";
import { Carousel } from "../../components/carousel";
import { linkNavigations } from "../../resources/data/linkNavigations";


export type GameProps = {
    id: string,
    title: string,
    description: string,
    linkGame: string,
    gameImage: string,
    sliderImage: string[],
    genres: string[],

};

export type GameDescriptionProps = {

};

type Game = {
    _id: string;
    title: string;
    description: string;
    linkGame: string;
    gameImage: string;
    sliderImage: [string];
    genres: [string];
}

export const GameDescription: FC<GameDescriptionProps> = memo(() => {
    const [searchParams] = useSearchParams();
    const idGame = searchParams.get("idGame");

    const [gamehttp, setGames] = useState<Game>();

    useEffect(() => {
        fetch(`/game-info/${idGame}`)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('Ошибка сервера');
                }
                return response.json()
            })
            .then(data => {
                setGames(data)
            })
            .catch(error => {
                console.log(`Ошибка при выполнении запроса: ${error}`);
                window.location.href = '/error';
            });
    }, [gamehttp, idGame]);

    const game = gamehttp;
    

    const genresGame = genres.filter((ganreArrayItem) => {
        return game?.genres.includes(ganreArrayItem.name)
    })
    const onMore = useCallback((link: string) => {
        window.location.href = `${link}`;
    }, []);
    const onPlay = useCallback((link: string | undefined) => {
        window.open(link);
    }, []);
    
    return (
        <main>
            <Header background={theme.colors.foreground} />
            <Container>
                <GameContainer>
                    <GameImage src={game?.gameImage} />
                    <DescriptionGame>
                        <Text themeFont={theme.fonts.h1} themeColor={theme.colors.black}>
                            {game?.title}
                        </Text>
                        <Image style={{ width: '140px', height: '25px', marginBottom: '15px', marginTop: '15px' }} src={Rate} />
                        {
                            game !== undefined ? <Text dangerouslySetInnerHTML={{ __html: game.description }} themeFont={theme.fonts.ht1} themeColor={theme.colors.black}/> : null
                        }
                        <GridGenre>
                            {
                                genresGame.map((genre) =>
                                    <Genre genreGame={genre} />
                                )
                            }
                        </GridGenre>
                    </DescriptionGame>
                </GameContainer>
                {game !== undefined ? <Carousel slides={game.sliderImage} /> : null}
                <ButtonContainer>
                    <Button onClick={() => onPlay(game?.linkGame)}
                        background={theme.colors.primary}
                        color={theme.colors.background}>
                        <Text themeFont={theme.fonts.ht2}>
                            Играть
                        </Text>
                    </Button>
                    <Button
                        onClick={() => onMore(linkNavigations.catalog)}
                        background={theme.colors.secondary}
                        color={theme.colors.background}>
                        <Text themeFont={theme.fonts.ht2}>
                            Назад
                        </Text>
                    </Button>
                </ButtonContainer>
            </Container>
            <Footer background={theme.colors.foreground} />
        </main>);
});