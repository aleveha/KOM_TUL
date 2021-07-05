import i18n from 'i18next';
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en_locale from './en.json';
import cz_locale from './cz.json';

i18n
    .use(detector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en_locale
            },
            cz: {
                translation: cz_locale
            }
        },
        fallbackLng: "cz"
    });

export default i18n;