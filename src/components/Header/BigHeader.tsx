import React, {useContext} from 'react';
import AppContentContext from "../../Context/AppContentContext";
import {Link} from 'react-router-dom';
import LanguageContext from "../../Context/LanguageContext";
import {useTranslation} from "react-i18next";

const BigHeader = () => {
    const appContent = useContext(AppContentContext);
    const language = useContext(LanguageContext);
    const { t } = useTranslation();

    return (
        <div className="bigHeader">
            <div>
                {appContent.value.map(tab =>
                    tab.name !== "KOM" && <Link to={tab.link} key={tab.name}>{t(`header.tabs.${tab.name}`)}</Link>
                )}
            </div>
            <a className="langButton"
               onClick={() => {
                   language.changeValue(language.value === 'cz' ? 'en' : 'cz');
               }}>
                {language.value !== 'cz' ? 'CZ' : 'EN'}
            </a>
        </div>
    );
};

export default BigHeader;