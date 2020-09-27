import * as React from 'react';
import StartPage from "./StartPage";
import {Route, Switch, Redirect} from "react-router-dom";
import Department from "./Pages/Department";

interface IProps {

}

const MainContent = (props: IProps) => {
    return (
        <div className="mainContent">
            <Switch>
                <Route path='/home' component={StartPage}/>
                <Route path='/department' render={() => (<Department/>)}/>
                <Route path='/employees' render={() => (<div></div>)}/>
                <Route path='/projects' render={() => (<div></div>)}/>
                <Route path='/education' render={() => (<div></div>)}/>
                <Route path='/laboratories' render={() => (<div></div>)}/>
                <Route path='/cooperation' render={() => (<div></div>)}/>
                <Redirect from='/' to='/home' />
            </Switch>
        </div>
    );
}

export default MainContent;