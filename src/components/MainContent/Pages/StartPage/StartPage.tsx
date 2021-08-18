import * as React from "react";
import { memo } from "react";
import { ActualNews } from "./ActualNews";
import MainPhoto1 from "../../../../img/start_page/1.webp";
import MainPhoto2 from "../../../../img/start_page/2.webp";
import MainPhoto3 from "../../../../img/start_page/3.webp";
import MainPhoto4 from "../../../../img/start_page/4.webp";
import MainPhoto5 from "../../../../img/start_page/5.webp";
import { Carousel } from "./Carousel";
import { useTranslation } from "react-i18next";

const PHOTO_GALLERY: string[] = [
    MainPhoto1,
    MainPhoto2,
    MainPhoto3,
    MainPhoto4,
    MainPhoto5,
];

const StartPageComponent = () => {
    const { t } = useTranslation();

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
                </div>
                <div className="mainPhotos">
                    <Carousel
                        components={PHOTO_GALLERY.map((elem, index) => (
                            <img
                                alt="carouselPhoto"
                                className="mainPhoto"
                                key={index}
                                loading="lazy"
                                src={elem}
                            />
                        ))}
                    />
                </div>
            </div>
            <ActualNews />
        </div>
    );
};

export const StartPage = memo(StartPageComponent);
