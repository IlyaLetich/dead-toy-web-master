import { FC, memo, useCallback } from "react";
import { LanguageControlContainer } from "./language-control.styles";
import { Button } from "../button";
import { theme } from "../../resources/theme";
import { Text } from "../text";
import { useDispatch } from "react-redux";
import { setLanguageAction } from "../../actions";

export type LanguageControlProps = {
};

export const LanguageControl: FC<LanguageControlProps> = memo(() => {
    const dispatch = useDispatch();
    
    const setLanguage = useCallback((language : string) => {
      dispatch(setLanguageAction(language));
      document.cookie = 'language=' + language;
    },[dispatch])
    
    return(
        <LanguageControlContainer>
                <Button 
                  background={theme.colors.primary} 
                  color={theme.colors.background} 
                  onClick={() => setLanguage("rus")}>
                  <Text themeFont={theme.fonts.c}>
                    RU
                  </Text>
                </Button>
                <Button 
                  onClick={() => setLanguage("eng")}
                  background={theme.colors.secondary} 
                  color={theme.colors.background}>
                  <Text themeFont={theme.fonts.c}>
                    ENG
                  </Text>
                </Button>
        </LanguageControlContainer>
    )
});