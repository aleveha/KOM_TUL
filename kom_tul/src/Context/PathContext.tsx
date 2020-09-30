import React from 'react';

interface IPathContext {
    value: Array<IPath>,
    changeValue: () => void
}

export interface IPath {
    name: string,
    path: string
}

const PathContext = React.createContext<IPathContext>({value: [{name: 'KOM', path: '/home'}], changeValue: () => {}});

export default PathContext;