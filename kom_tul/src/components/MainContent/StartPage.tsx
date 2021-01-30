import * as React from 'react';
import ActualNews from "./ActualNews";
import LanguageContext from "../../Context/LanguageContext";
import {useContext, useEffect, useState} from "react";
import MainPhoto from '../../img/photoMainPage/1.jpg';
import MainPhotoMin from '../../img/photoMainPage/compressed/1.jpg';

const StartPage = () => {
    const language = useContext(LanguageContext);
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleMainPhotoLoaded = () => {
        setImageLoaded(true);
    }

    useEffect(() => {
        console.log(imageLoaded);
    }, [imageLoaded]);

    return (
        <div className="startPage">
            <div className="photoContainer">
                <div className="insidePhotoInfo padding">
                    <div className="facName">
                        <div className="main-text"><span>Katedra obrábění a montáže</span></div>
                        <div className="main-text"><span>Fakulta strojní TU v Liberci</span></div>
                    </div>
                    <div className="video-link" onClick={() => {
                    }}>
                        <span>{language.value === 'CZ' ? 'Přehrat' : 'Play'} video</span>
                    </div>
                </div>
                <div
                    className="photos"
                >
                    <img
                        src={MainPhotoMin}
                        className="mainPhoto"
                        style={imageLoaded ? {display: "none"} : {display: "unset"}}
                    />
                    <img
                        src={MainPhoto}
                        className="mainPhoto"
                        onLoad={handleMainPhotoLoaded}
                    />
                </div>
            </div>
            <ActualNews/>
        </div>
    );
};

export default StartPage;