import React, {useContext} from 'react';
import AppContentContext from "../../Context/AppContentContext";
import {Link} from 'react-router-dom';


const BigHeader = () => {
    const appContent = useContext(AppContentContext);

    return (
        <div className="bigHeader">
            {appContent.value.map(tab =>
                tab.name !== "KOM" && <Link to={tab.link} key={tab.name}>{tab.name}</Link>
            )}
        </div>
    );
};

export default BigHeader;