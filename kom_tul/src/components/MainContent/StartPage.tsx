import * as React from 'react';
import ActualNews from "./ActualNews";
import LanguageContext from "../../Context/LanguageContext";
import {useContext, useState} from "react";
import MainPhoto1 from '../../img/start_page/1.webp';
import MainPhoto2 from '../../img/start_page/2.webp';
import MainPhoto4 from '../../img/start_page/4.webp';
import MainPhoto8 from '../../img/start_page/8.webp';
import MainPhoto11 from '../../img/start_page/11.webp';
import {Backdrop, Button} from "@material-ui/core";
import Youtube from '@u-wave/react-youtube';
import Carousel from "../Common/Carousel";

const Gallery: string[] = [
    MainPhoto1,
    MainPhoto2,
    MainPhoto4,
    MainPhoto8,
    MainPhoto11,
]

const StartPage = () => {
    const language = useContext(LanguageContext);
    const [openVideo, setOpenVideo] = useState(false);

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
                                margin: "2rem 0",
                                borderRadius: "1rem",
                                letterSpacing: "1px"
                            }}
                            onClick={handleVideoOpened}>
                            <span>{language.value === 'CZ' ? 'Přehrat' : 'Play'} video</span>
                        </Button>
                    </div>
                </div>
                <div className="mainPhotos">
                    <Carousel components={Gallery.map(elem =>
                        <img
                            src={elem}
                            alt="carouselPhoto"
                            key={Gallery.indexOf(elem)}
                            loading="lazy"
                            className="mainPhoto"
                        />
                    )}/>
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
                        video="drgC6TCARyc"
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