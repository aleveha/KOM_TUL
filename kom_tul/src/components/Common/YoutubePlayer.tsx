import {useState} from "react";
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
                {isLoading &&
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "2rem 0"
                }}>
                    <CircularProgress style={{color: "white"}} size={70}/>
                </div>}
                <div style={isLoading ? {display: "none"} : {display: "unset"}}>
                    <Youtube
                        video="drgC6TCARyc"
                        width="100%"
                        height="100%"
                        paused={pauseVideo}
                        onPlaying={() => setPauseVideo(false)}
                        onReady={() => setIsLoading(false)}
                    />
                </div>
            </Backdrop>
        </div>
    );
}

export default YoutubePlayer;