import * as React from 'react';
import {useContext} from "react";
import PathContext from "../../Context/PathContext";
import {Link} from 'react-router-dom';
import {IPath} from '../../Context/PathContext';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {makeStyles, createStyles} from '@material-ui/core';

const useStyles = makeStyles(() =>
    createStyles({
        pathLink: {
            fontFamily: "var(--fonts)"
        }
    })
)

const HistoryWay = () => {
    const path = useContext(PathContext);
    const classes = useStyles();

    const ChangePath = () => {
        path.changeValue();
    }

    const MakePathLink = (linkPart: IPath) => {
        let link: string = "";
        if (linkPart.name === 'KOM') {
            link = '/home';
        } else {
            for (let i = path.value.indexOf(linkPart); i >= 1; i--) {
                link = path.value[i].path + link;
            }
        }
        return link;
    }

    const pathContent = path.value.map((elem) => (
        <Link
            to={MakePathLink(elem)}
            key={path.value.indexOf(elem)}
            className={classes.pathLink}
            onClick={() => ChangePath()}>{elem.name}
        </Link>
    ))

    return (
        <div className="historyWayContent padding">
            <Breadcrumbs separator=">" className="pathNameContent">
                {pathContent}
            </Breadcrumbs>
        </div>
    );
}

export default HistoryWay;