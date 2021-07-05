import * as React from 'react';
import {Link} from 'react-router-dom';
import {useContext} from "react";
import AppContentContext from "../../Context/AppContentContext";
import LanguageContext from "../../Context/LanguageContext";
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import {makeStyles, createStyles} from '@material-ui/core';
import {useTranslation} from "react-i18next";

type Anchor = 'bottom' | 'right';

const useStyles = makeStyles(() =>
    createStyles({
        list: {
            padding: 0,
            margin: 0
        },
        divider: {
            backgroundColor: "lightgrey"
        }
    })
)

const MobileHeader = () => {
    const classes = useStyles();
    const appContent = useContext(AppContentContext);
    const language = useContext(LanguageContext);
    const { t } = useTranslation();

    const anchor = 'bottom';
    const [state, setState] = React.useState({
        bottom: false,
        right: false
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setState({...state, [anchor]: open});
    };

    const MenuList = (anchor: Anchor) => (
        <div
            className="menuList"
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className={classes.list}>
                {appContent.value.map((elem) =>
                    appContent.value.indexOf(elem) !== 0 && (
                        <div key={elem.name}>
                            <ListItem className="headerTab" key={appContent.value.indexOf(elem)}>
                                <Link
                                    to={elem.link}
                                    className="tabName"
                                    onClick={toggleDrawer(anchor, false)}
                                >
                                    {t(`header.tabs.${elem.name}`)}
                                </Link>
                            </ListItem>
                            <Divider className={classes.divider}/>
                        </div>
                    )
                )}
                <ListItem className="langButton">
                    <p className="cng-lang"
                       onClick={() => {
                           language.changeValue(language.value === 'cz' ? 'en' : 'cz');
                       }}>
                        {language.value !== 'cz' ? 'CZ' : 'EN'}
                    </p>
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            {
                <React.Fragment>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <MenuIcon fontSize="large"/>
                    </Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {MenuList(anchor)}
                    </Drawer>
                </React.Fragment>
            }
        </div>
    );
}

export default MobileHeader;