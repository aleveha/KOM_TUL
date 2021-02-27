import {Route, Switch, useRouteMatch} from "react-router-dom";
import * as React from "react";
import firstPhoto from '../../../img/cooperation/3.jpg';
import firstPhotoCompressed from '../../../img/cooperation/comressed/3.jpg';
import secondPhoto from '../../../img/cooperation/2.jpg';
import secondPhotoCompressed from '../../../img/cooperation/comressed/2.jpg';

import FastLoading from "../../Common/FastLoading";

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
            <h1 className="mainLabel">Spolupráce s KOM</h1>
            <div className="coopInfo mainInfo">
                <div>
                    <div className="introPhotos">
                        <FastLoading
                            photo={firstPhoto}
                            photoCompressed={firstPhotoCompressed}
                            imagesClassName="introPhoto"
                        />
                        <FastLoading
                            photo={secondPhoto}
                            photoCompressed={secondPhotoCompressed}
                            imagesClassName="introPhoto"
                        />
                    </div>
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