import * as React from 'react';
import {Redirect, Route, Switch, useRouteMatch} from 'react-router-dom';
import StartPage from "../StartPage";
import News from "./News";

interface IProps {

};

const Department = (props: IProps) => {
    let match = useRouteMatch();
    console.log(match);
    return (
        <div>
            <Switch>
                <Route path={match.path + '/news'} component={News}/>
            </Switch>
        </div>
    );
};

export default Department;