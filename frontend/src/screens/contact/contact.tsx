import { FC, memo, useCallback, useState } from "react";
import { Header } from "../../components/header";
import { theme } from "../../resources/theme";
import { Footer } from "../../components/footer";
import { Container } from "../../components/container";
import { Text } from "../../components/text";
import { HeaderLine, NameHeader } from "../about/about.styles";
import { ButtonBlock, ContactBlock, GridContainer, GridElement1, GridElement2, GridElement3, TextBlock } from "./contact.styles";
import { Space } from "../../components/space";
import { Input } from "../../components/input";
import { InputArea } from "../../components/input/input.styles";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";


export type ContactProps = {

};

export type PostMailProps = {
    from: string;
    to: string;
    subject: string;
    text: string;
};

export const Contact: FC<ContactProps> = memo(() => {

    const {
        register,
        handleSubmit,
        reset,
    } = useForm();




    const onSubmit = useCallback((data: FieldValues) => {
        const text = `Имя: ${data.firstName}\nПочта: ${data.mail}\nСообщение: ${data.message}`;
        axios
            .post("/api/mail", {
                formdata: {
                    from: "dead-toy-message@mail.ru",
                    to: "dead.toy.company@gmail.com",
                    subject: "Сайт - форма",
                    text: text,
                }
            })
            .then(() => setModalActive(true))
            .catch(() => alert("Message sending failed. Please try again."));
        reset();
    }, [reset]);
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const [modalActive, setModalActive] = useState(false);
    return (
        <main>
            <Modal active={modalActive} setActive={setModalActive}>
                <Text themeFont={theme.fonts.h4} themeColor={theme.colors.black}>
                    Спасибо за обращение!
                    <br />
                    Мы ответим Вам на почту.
                </Text>
            </Modal>
            <Header background={theme.colors.foreground} />
            <Container>
                <NameHeader>
                    <Text themeFont={theme.fonts.h1} themeColor={theme.colors.black}>
                        Связаться с нами
                    </Text>
                </NameHeader>
                <HeaderLine color={theme.colors.black} />
                <TextBlock>
                    <Text themeColor={theme.colors.black} themeFont={theme.fonts.ht1}>
                        У Вас появились какие-то вопросы? Деловые предложения? Может быть Вы хотите узнать больше информации о DEAD TOY | Gaming Company? Заполните форму обратной связи, и наша комманда обязательно свяжется с Вами!
                    </Text>
                    <Space themeSpace={24} />
                    <Text themeColor={theme.colors.black} themeFont={theme.fonts.ht1}>
                        Для этого укажите свое имя, электронную почту и оставьте комментарий (вопрос, пожелание, предложение и др). Чем более развернутым будет комментарий, тем точнее и лучше будет обратная связь от нас. Ждем Ваш отклик!
                    </Text>
                </TextBlock>
                <Space themeSpace={24} />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ContactBlock>
                        <GridContainer>
                            <GridElement1>
                                <Input type="text" placeholder="Имя" {...register("firstName", { required: true })} />
                            </GridElement1>
                            <GridElement2>
                                <Input type="text" placeholder="Почта" {...register("mail", {
                                    required: true, pattern: {
                                        value: emailRegex,
                                        message: 'Неверный формат email-адреса'
                                    }
                                })} />
                            </GridElement2>
                            <GridElement3>
                                <InputArea placeholder="Комментарий" {...register("message", { required: true })} />
                            </GridElement3>
                        </GridContainer>
                    </ContactBlock>
                    <Space themeSpace={24} />
                    <ButtonBlock>
                        <Button
                            type="submit"
                            background={theme.colors.primary}
                            color={theme.colors.background}>
                            <Text themeFont={theme.fonts.s}>
                                Отправить
                            </Text>
                        </Button>
                    </ButtonBlock>
                </form>
            </Container>
            <Footer background={theme.colors.foreground} />
        </main>
    )
});