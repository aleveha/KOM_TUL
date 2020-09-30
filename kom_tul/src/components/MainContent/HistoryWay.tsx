import * as React from 'react';
import '../../CSS/HisrotyWay.css'
import {useContext} from "react";
import PathContext from "../../Context/PathContext";
import { Link } from 'react-router-dom';
import { IPath } from '../../Context/PathContext';


interface IProps {

}

const HistoryWay = (props: IProps) => {
    const path = useContext(PathContext);
    console.log(path);

    const ChangePath = (path: IPath) => {

    }

    const pathContent = path.value.map((elem) =>
        <div className="pathName-content" key={path.value.indexOf(elem)}>
            {elem.name !== 'KOM' && <span className="arrow">{">"}</span>}
            <Link to={elem.path} className="path-link" onClick={() => ChangePath(elem)}>{elem.name}</Link> {/*change TO attribute*/}
        </div>
    )

    return (
        <div className="historyWayContent padding">
            <div className="pathName">
                {pathContent}
            </div>
        </div>
    );
}

export default HistoryWay;