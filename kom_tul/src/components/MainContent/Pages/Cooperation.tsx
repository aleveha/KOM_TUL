import {Route, Switch, useRouteMatch} from "react-router-dom";
import * as React from "react";
import '../../../CSS/PagesCSS/Cooperation.css';
import CoopPhoto from '../../../img/photoMainPage/3.jpg';

interface IHowToCooperate {
    label: string,
    wayPoints: Array<IWayPoint>
}

interface IWayPoint {
    name: string,
    description: string
}

const CooperationContent = () => {
    const cooperationInformation: string = "Široké odborné zaměření KOM je doplněno nabídkou odborného poradenství, školení a smluvního výzkumu. Dále spoluprací na projektech VaV, nabídkou volné kapacity laboratoří a doplňkové průmyslové činnosti. Výše uvedené aktivity podporují propojení KOM s průmyslovou praxí."
    const cooperationOffer: string = "KOM nabízí partnerství ve výzkumu, velice rádi budeme nápomocni s výzkumem v širokém spektru oblastí od klasického obrábění rozličných materiálů přes oblast metrologie až po návrh či optimalizaci výrobních procesů. Přesah odborného zaměření KOM zahrnuje oblasti strojírenské konstrukce, strojírenské technologie či prototypové výroby."

    const coopAbility: IHowToCooperate = {
        label: "Jak na spolupráci s KOM:",
        wayPoints: [
            {
                name: "První kontakt",
                description: "budeme potěšeni, pokud nás v rámci prvního kontaktu seznámíte s Vaším požadavkem, ať se jedná o řešení aktuálních provozních či technologických problémů nebo námětu na spolupráci při řešení Vašich záměrů nebo projektů."
            },
            {
                name: "Návrh a výběr týmu",
                description: "v rámci pracovní schůzky (na našem pracovišti nebo přímo u Vás) se detailně seznámíme s Vašimi potřebami a vypracujeme návrh řešení spolu se zprostředkováním spolupráce s konkrétním odborným týmem."
            },
            {
                name: "Realizace ",
                description: "aktivně se budeme podílet na řešení společného záměru, jehož cílem je konkrétní výstup ve formě vyřešení problematické oblasti, licence nebo dlouhodobé společné spolupráce."
            }
        ]
    }

    return (
        <div className="cooperation padding">
            <h1 className="mainLabel">Spolupráce s KOM change me</h1>
            <div className="coopInfo">
                <div className="infoContent">
                    <p className="cooperationInfo">
                        <img src={CoopPhoto} alt="KatedraPhoto"/>
                        {cooperationInformation}<br/><br/><br/>
                        {cooperationOffer}
                    </p>
                </div>
                <div className="howToCoop">
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