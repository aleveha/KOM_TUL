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

    return(
        <div className="headerTabs-content">
            {appContent.value.map((elem) =>
                appContent.value.indexOf(elem) !== 0 && (<div className="headerTab" key={appContent.value.indexOf(elem)}>
                    <Link to={elem.link} className="tabName" onClick={() => path.changeValue()}>{elem.name}</Link>
                </div>)
            )}
        </div>
    );
}

export default HeaderButtons;