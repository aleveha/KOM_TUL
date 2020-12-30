import * as React from 'react';
import ActualNews from "./ActualNews";
import LanguageContext from "../../Context/LanguageContext";
import {useContext} from "react";
import MainPhoto from '../../img/photoMainPage/1.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const StartPage = () => {
    const language = useContext(LanguageContext);

    return (
        <div className="startPage">
            <div className="photoContainer">
                <div className="insidePhotoInfo padding">
                    <div className="facName">
                        <div className="main-text"><span>Katedra obrábění a montáže</span></div>
                        <div className="main-text"><span>Fakulta strojní TU v Liberci</span></div>
                    </div>
                    <div className="video-link" onClick={() => {}}>
                        <span>{language.value === 'CZ' ? 'Přehrat' : 'Play'} video</span>
                    </div>
                </div>
                <LazyLoadImage
                    src={MainPhoto}
                    effect="black-and-white"
                    className="mainPhoto"
                />
            </div>
            <ActualNews/>
        </div>
    );
};

export default StartPage;