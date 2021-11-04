import textEn from './text-en.json'
import textEs from './text-es.json'

export enum EnumLanguage{
    En = "En",
    Es = "Es"
}

export const SelectedLanguage:EnumLanguage = EnumLanguage.En;

export function getLanguajeText(languaje:EnumLanguage){
    switch(languaje){
        case EnumLanguage.Es:
            return textEs;
        default:
            return textEn;
    }
}
