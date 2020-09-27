import * as React from 'react';
import {Link} from 'react-router-dom';
import {useContext} from "react";
import PathContext from "../../Context/PathContext";
import AppContentContext from "../../Context/AppContentContext";

interface IProps {

}

interface IPath {
    name: string,
    path: string
}

const HeaderButtons = (props: IProps) => {
    const path = useContext(PathContext);
    const appContent = useContext(AppContentContext);

    const ChangePath = (elem: IPath) => {
        let pathArr: Array<IPath> = [...path.value];
        if (pathArr.length > 1 && elem.name !== 'KOM') {
            do {
                pathArr.pop();
            } while (pathArr.length > 1);
            pathArr.push(elem);
        } else if (elem.name === 'KOM') {
            pathArr = [{name: 'KOM', path: '/home'}];
        } else {
            pathArr.push(elem);
        }
        path.changeValue(pathArr);
    }

    return(
        <div className="headerTabs-content">
            {appContent.value.map((elem) =>
                <div className="headerTab" key={appContent.value.indexOf(elem)}>
                    <Link to={elem.link} className="tabName" onClick={() => ChangePath({name: elem.name, path: elem.link})}>{elem.name}</Link>
                </div>
            )}
        </div>
    );
}

export default HeaderButtons;