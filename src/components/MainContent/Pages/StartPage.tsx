import * as React from "react";
import { useState } from "react";
import ActualNews from "../ActualNews";
import MainPhoto1 from "../../../img/start_page/1.webp";
import MainPhoto2 from "../../../img/start_page/2.webp";
import MainPhoto3 from "../../../img/start_page/3.webp";
import MainPhoto4 from "../../../img/start_page/4.webp";
import MainPhoto5 from "../../../img/start_page/5.webp";
import Carousel from "../../Common/Carousel";
import YoutubePlayer from "../../Common/YoutubePlayer";
import { useTranslation } from "react-i18next";

const Gallery: string[] = [
    MainPhoto1,
    MainPhoto2,
    MainPhoto3,
    MainPhoto4,
    MainPhoto5,
];

const StartPage = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const { t } = useTranslation();

    const handleVideoOpened = () => {
        setOpenVideo(!openVideo);
    };

    return (
        <div className="startPage">
            <div className="photoContainer">
                <div className="insidePhotoInfo padding">
                    <div className="facName">
                        <div className="main-text">
                            <span>{t("main.startPage.depName")}</span>
                        </div>
                        <div className="main-text">
                            <span>{t("main.startPage.facName")}</span>
                        </div>
                    </div>
                    {/*<div className="video-link-container">*/}
                    {/*    <Button*/}
                    {/*        className="video-link"*/}
                    {/*        variant="contained"*/}
                    {/*        style={{*/}
                    {/*            backgroundColor: "var(--blue)",*/}
                    {/*            color: "white",*/}
                    {/*            margin: "2rem 0",*/}
                    {/*            borderRadius: "1rem",*/}
                    {/*            letterSpacing: "1px"*/}
                    {/*        }}*/}
                    {/*        onClick={handleVideoOpened}>*/}
                    {/*        <span>{language.value === 'CZ' ? 'Přehrat' : 'Play'} video</span>*/}
                    {/*    </Button>*/}
                    {/*</div>*/}
                </div>
                <div className="mainPhotos">
                    <Carousel
                        components={Gallery.map((elem) => (
                            <img
                                src={elem}
                                alt="carouselPhoto"
                                key={Gallery.indexOf(elem)}
                                loading="lazy"
                                className="mainPhoto"
                            />
                        ))}
                    />
                </div>
            </div>
            {openVideo && (
                <YoutubePlayer
                    handleVideoOpened={handleVideoOpened}
                    openVideo={openVideo}
                />
            )}
            <ActualNews />
        </div>
    );
};

export default StartPage;
