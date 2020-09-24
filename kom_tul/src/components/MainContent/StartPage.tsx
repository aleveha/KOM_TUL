import * as React from 'react';
import '../../CSS/StartPage.css';
import ActualNews from "./ActualNews";

interface IProps {
    appLanguage: string;
};

const StartPage = (props: IProps) => {
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
                            <span>{props.appLanguage === 'CZ' ? 'Přehrat' : 'Play'} video</span>
                        </div>
                    </div>
                </div>
            </div>
            <ActualNews appLanguage={props.appLanguage}/>
        </div>
    );
};

export default StartPage;