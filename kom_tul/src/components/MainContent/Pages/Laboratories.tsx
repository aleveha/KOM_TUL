import React from 'react';
import {Route, useRouteMatch} from "react-router-dom";

const LaboratoriesContent = () => {
    return (
        <div className="laboratoriesContent">
            privet
        </div>
    );
}

const Laboratories = () => {
    let match = useRouteMatch();
    return (
        <switch>
            <Route path={match.path} exact component={LaboratoriesContent}/>
        </switch>
    );
};

export default Laboratories;