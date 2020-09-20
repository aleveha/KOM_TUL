import * as React from 'react';
import '../../CSS/StartPage.css';
// import MainPhoto from '../../img/mainPhoto.jpg';

interface IProps {

};

const StartPage = (props: IProps) => {
    return (
        <div className="startPage">
            <div className="mainPhoto">
                <div className="insidePhotoInfo padding">
                    <p className="main-text">Katedra obrábění a montáže</p>
                    <p className="main-text">Fakulta strojní</p>
                    <p className="main-text">Technická univerzita v Liberci</p>
                    <button className="video-link"></button>
                </div>
                {/*<img className="photo" src={MainPhoto} alt="Main photo" width="100%"/>*/}
                <div className="photo"></div>
            </div>
            <div className="actualNews padding"></div>
        </div>
    );
};

export default StartPage;