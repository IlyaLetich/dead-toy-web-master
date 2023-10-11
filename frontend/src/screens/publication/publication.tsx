import './publication.css'

import { FC, memo, useCallback, useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Container } from "../../components/container";
import { Footer } from "../../components/footer";
import { theme } from "../../resources/theme";
import { ButtonSwipeTop, HeaderLine, NewsRandom, PublicationContainer, PublicationContainerSpaceItem, PublicationContent, PublicationFinal, PublicationImageItem, TimerReady } from "./publication.styles";
import { Link } from "../../components/link";
import { Text } from "../../components/text";
import { Logo } from "../../components/logo";
import timerLogo from "../../images/publication/timer.png"
import { Space } from "../../components/space";
import { Button } from "../../components/button";
import { CardNews } from "../../components/card-news";
import { NewsData } from "../news/news";
import { useSearchParams } from 'react-router-dom';
import swipeTop from "../../images/publication/swipeTop.svg"
import { linkNavigations } from '../../resources/data/linkNavigations';
import { Modal } from '../../components/modal';

type ContentItem = {
  image: string;
  text: string;
}

type PublicationData = {
  _id: string;
  title: string;
  timeReading: string;
  body: ContentItem[];
  datePublication: string;
  linkShare: string;
}

export type PublicationProps = {

};

export const Publication: FC<PublicationProps> = memo(() => {
  const [searchParams] = useSearchParams();
  const idNews = searchParams.get("idNews");

  const [newshttp, setNews] = useState<PublicationData>();

  // console.log(idNews);

   useEffect(() => {
       fetch(`/blog-info/${idNews}`)
           .then(response => {
               if (response.status !== 200) {
                   throw new Error('Ошибка сервера');
               }
               return response.json()
           })
           .then(data => {
               setNews(data)
           })
           .catch(error => {
               console.log(`Ошибка при выполнении запроса: ${error}`);
               window.location.href = '/error';
           });
   }, [idNews]);

   console.log(newshttp);
   const newData = newshttp;

  const onMore = useCallback((link: string) => {
    window.location.href = `${link}`;
  }, []);

  const [dataNews, setDataNews] = useState<NewsData[]>([]);
  useEffect(() => {
    fetch('/news-items')
      .then(res => res.json())
      .then(res => setDataNews(res));
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const filtredNews = dataNews.filter((element) => element._id !== newData?._id);
  const news = filtredNews.sort(() => Math.random() - 0.5);

  const [modalActive,setModalActive] = useState(false);
  const copyToClipboard = () => {
        const text = window.location.href;
        navigator.clipboard.writeText(text);
        setModalActive(true);
  }

  return (
    <main>
      <Modal active={modalActive} setActive={setModalActive}>
          <Text themeFont={theme.fonts.h4} themeColor={theme.colors.black}>
              Ссылка скопирована!!!
          </Text>
      </Modal>
      <Header background={theme.colors.foreground} />
      <Container>
        <PublicationContainer>
          <PublicationContainerSpaceItem>
            <Link onClick={() => onMore(linkNavigations.news)}>
              <Text themeFont={theme.fonts.ht1} themeColor="#888888">
                ←Назад
              </Text>
            </Link>
          </PublicationContainerSpaceItem>
          <PublicationContent>
            <Text themeFont={theme.fonts.h1} themeColor={theme.colors.black}>
              {newData?.title}
            </Text>
            <Space themeSpace={15} />
            <HeaderLine color={theme.colors.black} />
            <Space themeSpace={15} />
            <TimerReady>
              <Logo src={timerLogo} />
              <Text themeFont={theme.fonts.ht1} themeColor={theme.colors.black}>
                {newData?.timeReading}
              </Text>
            </TimerReady>
            <Space themeSpace={15} />
            {
              newData?.body.map((item) => (
                <div>
                  <Space themeSpace={20} />
                  {item.image !== "null" ? <PublicationImageItem src={item.image} /> : null}
                  <Space themeSpace={20} />
                  {item.text !== "null" ? <Text dangerouslySetInnerHTML={{ __html: item.text }} themeFont={theme.fonts.ht1} themeColor={theme.colors.black}/> : null}
                  <Space themeSpace={20} />
                </div>
              ))
            }
            <Space themeSpace={15} />
            <PublicationFinal>
              <Text themeFont={theme.fonts.ht1} themeColor={theme.colors.black}>
                Ваш DEAD TOY
              </Text>
              <Text themeFont={theme.fonts.ht1} themeColor={theme.colors.black}>
                {newData?.datePublication}
              </Text>
            </PublicationFinal>
            <Space themeSpace={24} />
            <Button
              onClick={() => copyToClipboard()}
              background={theme.colors.secondary}
              color={theme.colors.background}>
              <Text themeFont={theme.fonts.s}>
                Поделиться
              </Text>
            </Button>
            <Space themeSpace={40} />
            <Text themeFont={theme.fonts.h1} themeColor={theme.colors.black}>
              Другие новости
            </Text>
            <Space themeSpace={15} />
            <HeaderLine color={theme.colors.black} />
            <Space themeSpace={24} />
            <NewsRandom>
              {news.map((card, index) =>
                index < 3 && (
                  <CardNews
                    title={card.title}
                    descripton={card.description}
                    url={card.image}
                    onMore={() => onMore(card._id)}
                  />
                )
              )}
            </NewsRandom>
          </PublicationContent>
          <PublicationContainerSpaceItem>
            <ButtonSwipeTop onClick={() => scrollToTop()}>
              <Logo src={swipeTop}/>
            </ButtonSwipeTop>
          </PublicationContainerSpaceItem>
        </PublicationContainer>
        <Space themeSpace={24} />
      </Container>
      <Footer background={theme.colors.foreground} />
    </main>);
});



