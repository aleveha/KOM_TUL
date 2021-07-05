import {Suspense, useState} from "react";
import {Backdrop, CircularProgress} from "@material-ui/core";
import Youtube from "@u-wave/react-youtube";
import * as React from "react";

const YoutubePlayer = (props: {
    openVideo: boolean,
    handleVideoOpened: () => void
}) => {
    const [pauseVideo, setPauseVideo] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

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
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "2rem 0"
                }}>
                    <Suspense fallback={
                        <CircularProgress style={{color: "white"}} size={70}/>
                    }>
                        <Youtube
                            video="drgC6TCARyc"
                            width="100%"
                            height="100%"
                            paused={pauseVideo}
                            onPlaying={() => setPauseVideo(false)}
                        />
                    </Suspense>
                </div>
            </Backdrop>
        </div>
    );
}

export default YoutubePlayer;