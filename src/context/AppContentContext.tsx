import React from 'react';

interface IAppContent {
    name: string,
    link: string,
    children?: Array<IAppContent>
}

interface IAppContentContext {
    value: Array<IAppContent>
}

const AppContentContext = React.createContext<IAppContentContext>({value: [{name: '', link: '', children: []}]});

export default AppContentContext;