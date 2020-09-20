import * as React from 'react';
import '../../CSS/HisrotyWay.css'

interface IProps {
    pathWay: Array<string>;
}

const HistoryWay = (props: IProps) => {
    const pathContent = props.pathWay.map((elem) =>
        <div className="pathName-content" key={props.pathWay.indexOf(elem)}>
            {elem !== 'KOM' && <span className="arrow">{">"}</span>}
            <a className="path-link" href="#">{elem}</a>
        </div>
    )

    return (
        <div className="historyWayContent">
            <div className="pathName">
                {pathContent}
            </div>
        </div>
    );
}

export default HistoryWay;