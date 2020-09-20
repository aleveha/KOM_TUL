import * as React from 'react';
import '../../CSS/Header.css';

interface IProps {
    changePathWay: (value: Array<string>) => void,
    pathArr: Array<string>,
    tabs: Array<string>
}

const HeaderButtons = (props: IProps) => {

    const ChangePath = (elem: string) => {
        let pathArr: Array<string> = [...props.pathArr];
        if (pathArr.length > 1 && elem !== 'KOM') {
            do {
                pathArr.pop();
            } while (pathArr.length > 1);
            pathArr.push(elem);
        } else if (elem === 'KOM') {
            pathArr = ['KOM'];
        } else {
            pathArr.push(elem);
        }
        props.changePathWay(pathArr);
    }

    return(
        <div className="headerTabs-content">
            {props.tabs.map((elem) =>
                <div className="headerTab" key={elem}>
                    <a className="tabName" href="#" onClick={() => ChangePath(elem)}><span>{elem}</span></a>
                </div>
            )}
        </div>
    );
}

export default HeaderButtons;