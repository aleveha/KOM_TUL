import * as React from 'react';
import {Redirect, Route, Switch, useRouteMatch} from 'react-router-dom';

interface IProps {

};

const News = (props: IProps) => {
    let match = useRouteMatch();
    console.log(match);
    return (
        <div>
            News
        </div>
    );
};

export default News;