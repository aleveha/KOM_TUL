import * as React from 'react';
import StartPage from "./StartPage";
import {Route, Switch, Redirect} from "react-router-dom";
import Department from "./Pages/Department";
import Employees from "./Pages/Employees";
import Cooperation from "./Pages/Cooperation";
import Projects from "./Pages/Projects";
import Laboratories from "./Pages/Laboratories";
import Education from "./Pages/Education";
import mobileCheck from "../Common/mobileCheck";
// import '../../CSS/Pages.css';

const MainContent = () => {
    return (
        <div className="mainContent">
            <Switch>
                <Route path='/home' component={StartPage}/>
                <Route path='/department' render={() => (<Department />)}/>
                <Route path='/employees' render={() => (<Employees />)}/>
                <Route path='/projects' render={() => (<Projects />)}/>
                <Route path='/education' render={() => (<Education />)}/>
                <Route path='/laboratories' render={() => (<Laboratories />)}/>
                <Route path='/cooperation' render={() => (<Cooperation />)}/>
                <Redirect from='/' to='/home' />
            </Switch>
        </div>
    );
}

export default MainContent;