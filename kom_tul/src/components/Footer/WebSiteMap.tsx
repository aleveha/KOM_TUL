import * as React from 'react';
import '../../CSS/Footer.css'
import {useEffect, useState} from "react";

interface IProps {
    tabs: Array<string>
};

const WebSiteMap = (props: IProps) => {
    const [numberOfTabs, setNumberOfTabs] = useState<object>({'--numberOfTabHeadersMap': 6});

    useEffect(() => {
        setNumberOfTabs({'--numberOfTabHeadersMap': props.tabs.length});
    }, [props.tabs.length]);

    return (
        <div className="mapContent" style={numberOfTabs}>
            {props.tabs.map((elem) =>
                <div className="tabColumn" key={props.tabs.indexOf(elem)}>
                    <div className="tabHeader">
                        <h3>{elem}</h3>
                    </div>
                    <div className="tabContent">
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WebSiteMap;