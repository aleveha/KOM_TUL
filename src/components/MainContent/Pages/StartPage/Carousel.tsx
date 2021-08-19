import React, { memo, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay, virtualize } from "react-swipeable-views-utils";
import { mod } from "react-swipeable-views-core";

const AutoPlaySwipeableViews = virtualize(autoPlay(SwipeableViews));

function slideRenderer(params: any) {
    const { index, key, slides } = params;

    switch (mod(index, 5)) {
        case 0:
            return <div key={key}>{slides[0]}</div>;
        case 1:
            return <div key={key}>{slides[1]}</div>;
        case 2:
            return <div key={key}>{slides[2]}</div>;
        case 3:
            return <div key={key}>{slides[3]}</div>;
        case 4:
            return <div key={key}>{slides[4]}</div>;
        default:
            return null;
    }
}

const CarouselComponent = (props: { components: JSX.Element[] }) => {
    const [index, setIndex] = useState<number>(0);

    const handleChangeIndex = (index: number) => setIndex(index);

    return (
        <div className="carouselContainer">
            <AutoPlaySwipeableViews
                height="100%"
                ignoreNativeScroll={true}
                index={index}
                interval={3000}
                onChangeIndex={handleChangeIndex}
                slideRenderer={(params) =>
                    slideRenderer({
                        index: params.index,
                        key: params.key,
                        slides: props.components,
                    })
                }
            />
        </div>
    );
};

export const Carousel = memo(CarouselComponent);
