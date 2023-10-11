import { FC, memo, useCallback, useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Container } from "../../components/container";
import { Footer } from "../../components/footer";
import { theme } from "../../resources/theme";
import { CardNews } from "../../components/card-news";
import { GridCards } from "./news.styles";
import { TitleSearch } from "../../components/title-search";
import { Line } from "../../components/line";
import { PresentationCard } from "../../components/presentation-card";


export type NewsData = {
    _id: string;
    title: string;
    image: string;
    description: string;
};

export type NewsProps = {

};

export const News: FC<NewsProps> = memo(() => {
    const [data, setData] = useState<NewsData[]>([]);

     useEffect(() => {
         fetch('/news-items')
            .then(res => res.json())
            .then(res => setData(res));
     }, []);

    const onMore = useCallback((link: string) => {
         window.location.href = `news/more?idNews=${link}`;
    }, []);

    return (
        <main>
            <Header background={theme.colors.foreground} />
            <Container>
                <PresentationCard lable={'DEAD TOY’S GAMES'} />
                <TitleSearch lable="Новости" />
                <Line />
                <GridCards>
                    {data.map((card) =>
                        <CardNews
                            title={card.title}
                            descripton={card.description}
                            url={card.image}
                            onMore={() => onMore(card._id)}
                        />
                    )}
                </GridCards>
            </Container>
            <Footer background={theme.colors.foreground} />
        </main>);
});