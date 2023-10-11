import { LanguageAction, SET_LANGUAGE } from "../actions";

interface LanguageState {
  language: string;
}

const initialState: LanguageState = {
  language: 'en',
};

export const languageReducer = (state = initialState, action: LanguageAction,) : LanguageState => {
    switch (action.type) {
      case SET_LANGUAGE:
        return {
          ...state,
          language: action.language,
        };
      default:
        return state;
    }
};