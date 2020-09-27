import * as React from 'react';
import {useContext, useEffect, useState} from "react";
import AppContentContext from "../../Context/AppContentContext";
import { Link, useRouteMatch } from 'react-router-dom';

interface IProps {

}

interface IPath {
    name: string,
    path: string
}

const WebSiteMap = (props: IProps) => {
    const [numberOfTabs, setNumberOfTabs] = useState<object>({'--numberOfTabHeadersMap': 6});
    const appContent = useContext(AppContentContext);

    useEffect(() => {
        setNumberOfTabs({'--numberOfTabHeadersMap': appContent.value.length});
    }, [appContent.value.length]);

    const ChangePath = (elem: IPath, parent: typeof appContent.value[0]) => {

    }

    return (
        <div className="mapContent padding" style={numberOfTabs}>
            {appContent.value.map((elem) =>
                <div className="tabColumn" key={appContent.value.indexOf(elem)}>
                    <div className="tabHeader">
                        <h3>{elem.name}</h3>
                    </div>
                    <div className="tabContent">
                        {elem.children.length !== 0 && elem.children.map(item => (
                            <Link to={elem.link + item.link} key={elem.children.indexOf(item)} onClick={() => ChangePath({name: item.name, path: item.link}, elem)}>{item.name}</Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default WebSiteMap;