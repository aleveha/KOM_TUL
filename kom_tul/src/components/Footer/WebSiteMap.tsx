import * as React from 'react';
import {useContext, useEffect, useState} from "react";
import AppContentContext from "../../Context/AppContentContext";
import PathContext from "../../Context/PathContext";
import {Link} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

interface IProps {
    showMap: boolean,
    changeValueShowMap: (value: boolean) => void
}

const WebSiteMap = (props: IProps) => {
    const [numberOfTabs, setNumberOfTabs] = useState<object>({'--numberOfTabHeadersMap': 6});
    const appContent = useContext(AppContentContext);
    const path = useContext(PathContext);

    useEffect(() => {
        for (let tab of appContent.value) {
            if (tab.children) {
                (props.changeValueShowMap(true));
                break;
            }
        }
    }, [appContent])

    useEffect(() => {
        setNumberOfTabs({'--numberOfTabHeadersMap': appContent.value.length - 1});
    }, [appContent.value.length]);

    const ChangePath = () => {
        path.changeValue();
    }

    return (
        props.showMap ? (
            <div>
                <Divider/>
                <div className="mapContent padding" style={numberOfTabs}>
                    {appContent.value.map((elem) =>
                        elem.name !== "KOM" && (
                            <div className="tabColumn" key={appContent.value.indexOf(elem)}>
                                <div className="tabHeader">
                                    <h3>{elem.name}</h3>
                                </div>
                                <div className="tabContent linkPar">
                                    {elem.children && elem.children.length !== 0 && elem.children.map(item => (
                                        <Link className="link" to={elem.link + item.link}
                                              key={elem.children && elem.children.indexOf(item)}
                                              onClick={() => ChangePath()}>{item.name}</Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        ) : null
    );
};

export default WebSiteMap;