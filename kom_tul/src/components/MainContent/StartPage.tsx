import * as React from 'react';
import ActualNews from "./ActualNews";
import LanguageContext from "../../Context/LanguageContext";
import {useContext, useEffect, useRef, useState} from "react";
import MainPhoto from '../../img/photoMainPage/1.jpg';
import MainPhotoMin from '../../img/photoMainPage/compressed/1.jpg';
import {Backdrop, Button} from "@material-ui/core";
import Youtube from '@u-wave/react-youtube';

const StartPage = () => {
    const language = useContext(LanguageContext);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [openVideo, setOpenVideo] = useState(false);

    const handleMainPhotoLoaded = () => {
        setImageLoaded(true);
    }

    const handleVideoOpened = () => {
        setOpenVideo(!openVideo);
    }

    return (
        <div className="startPage">
            <div className="photoContainer">
                <div className="insidePhotoInfo padding">
                    <div className="facName">
                        <div className="main-text"><span>Katedra obrábění a montáže</span></div>
                        <div className="main-text"><span>Fakulta strojní TU v Liberci</span></div>
                    </div>
                    <div className="video-link-container">
                        <Button
                            className="video-link"
                            variant="contained"
                            style={{
                                backgroundColor: "var(--blue)",
                                color: "white",
                                margin: "2rem 0"
                            }}
                            onClick={handleVideoOpened}>
                            <span>{language.value === 'CZ' ? 'Přehrat' : 'Play'} video</span>
                        </Button>
                    </div>
                </div>
                <div
                    className="mainPhotos"
                >
                    <img
                        src={MainPhotoMin}
                        className="mainPhoto"
                        alt="mainPhoto"
                        style={imageLoaded ? {display: "none"} : {display: "unset"}}
                    />
                    <img
                        src={MainPhoto}
                        className="mainPhoto"
                        alt="mainPhoto"
                        onLoad={handleMainPhotoLoaded}
                    />
                </div>
            </div>
            <YoutubePlayer
                handleVideoOpened={handleVideoOpened}
                openVideo={openVideo}
            />
            <ActualNews/>
        </div>
    );
};

const YoutubePlayer = (props: {
    openVideo: boolean,
    handleVideoOpened: () => void
}) => {
    const [pauseVideo, setPauseVideo] = useState<boolean>(false);

    const handleVideoClosed = () => {
        setPauseVideo(true);
        props.handleVideoOpened();
    }

    return (
        <div className="video-container">
            <Backdrop
                style={{zIndex: 3}}
                open={props.openVideo}
                onClick={handleVideoClosed}
            >
                <div>
                    <Youtube
                        video="xLZg67BowOA"
                        width="100%"
                        height="100%"
                        paused={pauseVideo}
                        onPlaying={() => setPauseVideo(false)}
                    />
                </div>
            </Backdrop>
        </div>
    );
}

export default StartPage;