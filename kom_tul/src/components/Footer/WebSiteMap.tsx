import * as React from 'react';
import {useContext, useEffect, useState} from "react";
import AppContentContext from "../../Context/AppContentContext";
import PathContext from "../../Context/PathContext";
import { Link } from 'react-router-dom';

interface IProps {

}

const WebSiteMap = (props: IProps) => {
    const [numberOfTabs, setNumberOfTabs] = useState<object>({'--numberOfTabHeadersMap': 6});
    const appContent = useContext(AppContentContext);
    const path = useContext(PathContext);

    useEffect(() => {
        setNumberOfTabs({'--numberOfTabHeadersMap': appContent.value.length - 1});
    }, [appContent.value.length]);

    const ChangePath = () => {
        path.changeValue();
    }

    return (
        <div className="mapContent padding" style={numberOfTabs}>
            {appContent.value.map((elem) =>
                elem.name !== "KOM" && (<div className="tabColumn" key={appContent.value.indexOf(elem)}>
                    <div className="tabHeader">
                        <h3>{elem.name}</h3>
                    </div>
                    <div className="tabContent">
                        {elem.children.length !== 0 && elem.children.map(item => (
                            <Link to={elem.link + item.link} key={elem.children.indexOf(item)} onClick={() => ChangePath()}>{item.name}</Link>
                        ))}
                    </div>
                </div>)
            )}
        </div>
    );
};

export default WebSiteMap;