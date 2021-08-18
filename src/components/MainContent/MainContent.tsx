import * as React from "react";
import { useEffect } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { StartPage } from "./Pages/StartPage/StartPage";
import Department from "./Pages/Department";
import Employees from "./Pages/Employees";
import Cooperation from "./Pages/Cooperation";
import Projects from "./Pages/Projects";
import Laboratories from "./Pages/Laboratories";
import Education from "./Pages/Education";
import { AllNews } from "./Pages/NewsPage/AllNews";
import "../../CSS/Pages.css";

export const MainContent = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="mainContent">
            <Switch>
                <Route path="/home" component={StartPage} />
                <Route path="/department" render={() => <Department />} />
                <Route path="/employees" render={() => <Employees />} />
                <Route path="/projects" render={() => <Projects />} />
                <Route path="/education" render={() => <Education />} />
                <Route path="/laboratories" render={() => <Laboratories />} />
                <Route path="/cooperation" render={() => <Cooperation />} />
                <Route path="/news" component={AllNews} />
                <Redirect from="/" to="/home" />
            </Switch>
        </div>
    );
};
