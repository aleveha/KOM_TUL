import * as React from 'react';
import StartPage from "./StartPage";

interface IProps {
    appLanguage: string;
    pathWay: Array<string>;
    changePathWay: (value: Array<string>) => void;
}

const MainContent = (props: IProps) => {
    return (
        <div className="mainContent">
            <StartPage appLanguage={props.appLanguage}/>
        </div>
    );
}

export default MainContent;