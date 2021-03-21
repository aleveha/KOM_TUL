import * as React from 'react';
import StartPage from "./StartPage";
import {Route, Switch, Redirect, useLocation} from "react-router-dom";
import Department from "./Pages/Department";
import Employees from "./Pages/Employees";
import Cooperation from "./Pages/Cooperation";
import Projects from "./Pages/Projects";
import Laboratories from "./Pages/Laboratories";
import Education from "./Pages/Education";
import AllNews from "./AllNews";
import '../../CSS/Pages.css';
import {useEffect} from "react";

const MainContent = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="mainContent">
            <Switch>
                <Route path='/home' render={() => (<StartPage />)}/>
                <Route path='/department' render={() => (<Department />)}/>
                <Route path='/employees' render={() => (<Employees />)}/>
                <Route path='/projects' render={() => (<Projects />)}/>
                <Route path='/education' render={() => (<Education />)}/>
                <Route path='/laboratories' render={() => (<Laboratories />)}/>
                <Route path='/cooperation' render={() => (<Cooperation />)}/>
                <Route path='/news' render={() => (<AllNews />)}/>
                <Redirect from='/' to='/home' />
            </Switch>
        </div>
    );
}

export default MainContent;