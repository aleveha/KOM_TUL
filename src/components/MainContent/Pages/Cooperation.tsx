import {Route, Switch, useRouteMatch} from "react-router-dom";
import * as React from "react";
import {useTranslation} from "react-i18next";

interface IHowToCooperate {
    label: string,
    wayPoints: Array<IWayPoint>
}

interface IWayPoint {
    name: string,
    description: string
}

const CooperationContent = () => {
    const {t} = useTranslation();
    const cooperationInformation: string = t("main.cooperation.cooperationInformation");
    const cooperationOffer: string = t("main.cooperation.cooperationOffer");
    const coopAbility: IHowToCooperate = t("main.cooperation.coopAbility", {returnObjects: true});

    return (
        <div className="cooperation padding">
            <h1 className="mainLabel">{t("main.cooperation.mainLabel")}</h1>
            <div className="coopInfo mainInfo">
                <div>
                    <p className="cooperationInfo">{cooperationInformation}</p>
                    <p className="cooperationInfo">{cooperationOffer}</p>
                </div>
                <div className="howToCoop infoBlock">
                    <p className="titleSecond">{coopAbility.label}</p>
                    <ol>
                        {coopAbility.wayPoints.map(wayPoint => {
                            return (
                                <li className="border" key={wayPoint.name}><span>{wayPoint.name}</span> - <span>{wayPoint.description}</span></li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </div>
    );
}

const Cooperation = () => {
    let match = useRouteMatch();
    return (
        <Switch>
            <Route path={match.path} exact component={CooperationContent}/>
        </Switch>
    );
};

export default Cooperation;