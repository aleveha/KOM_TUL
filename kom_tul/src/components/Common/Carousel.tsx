import React, {useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Carousel = (props: {components: JSX.Element[]}) => {
    const [index, setIndex] = useState<number>(0);
    const handleChangeIndex = (index: number) => {
        setIndex(index);
    }

    return (
        <div className="carouselContainer">
            <AutoPlaySwipeableViews
                index={index}
                onChangeIndex={handleChangeIndex}
                ignoreNativeScroll={true}
                interval={3000}
                height="100%"
            >
                {props.components.map(comp => comp)}
            </AutoPlaySwipeableViews>
        </div>
    );
};

export default Carousel;