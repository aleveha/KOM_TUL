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

    const ChangePath = () => {
        path.changeValue();
    }

    const MakePathLink = (linkPart: IPath) => {
        let link: string = "";
        if (linkPart.name === 'KOM') {
            link = '/home';
        } else {
            for (let i = path.value.indexOf(linkPart); i >= 1; i--) {
                link = path.value[i].path + link;
            }
        }
        return link;
    }

    const pathContent = path.value.map((elem) =>
        <div className="pathName-content" key={path.value.indexOf(elem)}>
            {elem.name !== 'KOM' && <span className="arrow">{">"}</span>}
            <Link to={MakePathLink(elem)} className="path-link" onClick={() => ChangePath()}>{elem.name}</Link>
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