import * as React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';

interface IProps {

};

const DepartmentContent = () => {
    return (<div><h1>Katedra</h1></div>)
}

const Department = (props: IProps) => {
    let match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={match.path} exact component={DepartmentContent} />
                <Route path={match.path + '/news'} component={News}/>
            </Switch>
        </div>
    );
};

export default Department;

//News Comp

export const News = () => {
    return (
        <div>
            <h1>Novinky</h1>
        </div>
    );
};