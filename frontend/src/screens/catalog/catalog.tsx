import { FC, memo, useCallback, useEffect, useState } from "react";
import { Container } from "../../components/container/container.styles";
import { Header } from "../../components/header/header";
import { theme } from "../../resources/theme";
import { Footer } from "../../components/footer/footer";
import { PresentationCard } from "../../components/presentation-card";
import { TitleSearch } from "../../components/title-search";
import { Line } from "../../components/line";
import { GridCards } from "../../components/grid-cards";
import { CardCalatog } from "../../components/card-catalog";

export type CatalogProps = {

};

export type CatalogData = {
    _id: string;
    title: string;
    description: string;
    image: string;
    linkGame: string;
};

export const Catalog: FC<CatalogProps> = memo(() => {

    const onPlay = useCallback((link: string) => {
        window.open(link);
    }, []);

    const [data, setData] = useState<CatalogData[]>([]);

    useEffect(() => {
        fetch('/catalog-data')
            .then(res => res.json())
            .then(res => setData(res));
    }, []);

    const onMore = useCallback((link: string) => {
        window.location.href = `catalog/game?idGame=${link}`;
    }, []);

    return (
        <main>
            <Header background={theme.colors.foreground} />
            <Container>
                <PresentationCard lable={'DEAD TOY’S GAMES'} />
                <TitleSearch lable="Каталог" />
                <Line />
                <GridCards>
                    {data.map((card) =>
                        <CardCalatog
                            title={card.title}
                            descripton={card.description}
                            url={card.image}
                            onPlay={() => onPlay(card.linkGame)}
                            onMore={() => onMore(card._id)}
                        />
                    )}
                </GridCards>
            </Container>
            <Footer background={theme.colors.foreground} />
        </main>);
});