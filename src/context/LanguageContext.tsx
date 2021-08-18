import React from "react";

export type LanguageType = "cz" | "en";

interface ILangContext {
    value: LanguageType;
    changeValue: (value: LanguageType) => void;
}

const LanguageContext = React.createContext<ILangContext>({
    value: "cz",
    changeValue: () => {},
});

export default LanguageContext;
