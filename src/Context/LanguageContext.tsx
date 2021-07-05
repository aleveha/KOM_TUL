import React from 'react';

interface ILangContext {
    value: string;
    changeValue: (value: string) => void;
}

const LanguageContext = React.createContext<ILangContext>({value: 'CZ', changeValue: () => {}});

export default LanguageContext;