import { Action } from "redux";

export const SET_LANGUAGE = 'SET_LANGUAGE';

export interface SetLanguageAction extends Action<typeof SET_LANGUAGE> {
  language: string;
}

export const setLanguageAction = (language: string): SetLanguageAction => ({
  type: SET_LANGUAGE,
  language,
});

export type LanguageAction = SetLanguageAction;