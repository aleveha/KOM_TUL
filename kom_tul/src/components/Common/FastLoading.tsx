import React, {FunctionComponent, useState} from 'react';

interface IFastLoading {
    photo: string,
    photoCompressed: string,
    imagesClassName?: string
}

const FastLoading: FunctionComponent<IFastLoading> = (props) => {
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);

    const handleMainPhotoLoaded = () => {
        setImageLoaded(true);
    }

    return (
        <div>
            <img
                src={props.photoCompressed}
                alt="fastLoadingPhoto"
                className={props.imagesClassName}
                style={imageLoaded ? {display: "none"} : {display: "unset"}}
            />
            <img
                src={props.photo}
                alt="fastLoadingPhoto"
                className={props.imagesClassName}
                onLoad={handleMainPhotoLoaded}
                style={!imageLoaded ? {display: "none"} : {display: "unset"}}
            />
        </div>
    );
};

export default FastLoading;