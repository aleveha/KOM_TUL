import React from 'react';

interface IPathContext {
    value: Array<IPath>,
    changeValue: (value: Array<IPath>) => void
}

export interface IPath {
    name: string,
    path: string
}

const PathContext = React.createContext<IPathContext>({value: [{name: 'KOM', path: '/home'}], changeValue: (value) => {}});

export default PathContext;