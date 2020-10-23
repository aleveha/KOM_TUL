import * as React from 'react';
import '../../CSS/StartPage.css';
import ActualNews from "./ActualNews";
import LanguageContext from "../../Context/LanguageContext";
import {useContext} from "react";

const StartPage = () => {
    const language = useContext(LanguageContext);

    return (
        <div className="startPage">
            <div className="mainPhoto">
                <div className="photo">
                    <div className="insidePhotoInfo padding">
                        <div className="facName">
                            <div className="main-text"><span>Katedra obrábění a montáže</span></div>
                            <div className="main-text"><span>Fakulta strojní TU v Liberci</span></div>
                        </div>
                        <div className="video-link" onClick={() => {}}>
                            <span>{language.value === 'CZ' ? 'Přehrat' : 'Play'} video</span>
                        </div>
                    </div>
                </div>
            </div>
            <ActualNews />
        </div>
    );
};

export default StartPage;