import { FC, memo, useCallback, useMemo, useState } from "react";
import russianJson from "../../resources/data/languages/russian.json"
import englishJson from "../../resources/data/languages/english.json"
import { useSelector } from "react-redux";
import { LanguageAction } from "../../actions";

export type TranslatedProps = {
    id: string
};

interface Data {
    [key: string]: string;
}

export const Translated: FC<TranslatedProps> = memo(({id}) => {

    const getCookie = useCallback((name: string) : Data => {
        const cookies: Data = {};
        document.cookie.split(';').forEach(cookie => {
            const [cookieName, cookieValue] = cookie.trim().split('=');
            cookies[cookieName] = cookieValue;
        });
        if(cookies[name] === "rus"){
            setJsonData(russianJson);
            return russianJson;
        }
        else
            document.cookie = 'language=eng';
            setJsonData(englishJson);
            return englishJson;
    },[]);
    
    const [, setJsonData] = useState<Data>(englishJson);

    const language = useSelector((state : LanguageAction) => state.language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const text = useMemo(() => getCookie("language")[id], [language]);


    return(
        <span>
            {text}
        </span>
    )
})