import React, {useContext} from 'react';
import AppContentContext from "../../Context/AppContentContext";
import {Link} from 'react-router-dom';
import {toast} from "react-toastify";
import LanguageContext from "../../Context/LanguageContext";


const BigHeader = () => {
    const appContent = useContext(AppContentContext);
    const language = useContext(LanguageContext);

    return (
        <div className="bigHeader">
            <div>
                {appContent.value.map(tab =>
                    tab.name !== "KOM" && <Link to={tab.link} key={tab.name}>{tab.name}</Link>
                )}
            </div>
            <a className="langButton"
               onClick={() => {
                   language.changeValue(language.value === 'CZ' ? 'EN' : 'CZ');
                   toast.warn("Změna jazyka ještě není k dispozici.", {
                       autoClose: 3000,
                       position: "bottom-center"
                   });
               }}>
                EN{/*{language.value !== 'CZ' ? 'CZ' : 'EN'}*/}
            </a>
        </div>
    );
};

export default BigHeader;