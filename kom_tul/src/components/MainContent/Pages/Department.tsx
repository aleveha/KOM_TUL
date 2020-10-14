import * as React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import '../../../CSS/PagesCSS/Department.css';
import mainPhotoDeprtment from '../../../img/photoMainPage/2.jpg';

interface IProps {

}

interface IProfFocus {
    label: string;
    information: Array<string>;
}

interface IPrograms {
    label: string;
    content: Array<IProgram>
}

interface IProgram {
    number: string;
    name: string;
}

const DepartmentContent = () => {
    const mainInfo: string = "Katedra obrábění a montáže (KOM) se zabývá teoretickými i praktickými aspekty obrábění kovových i nekovových materiálů. Dále se soustředí na optimalizaci řezného procesu z hlediska řezného nástroje, obráběného materiálu a řezných podmínek při soustružení, frézování, vrtání a broušení. Výzkum je orientován na obráběcí nástroje a procesy, které analyzuje z hlediska obrobitelnosti, optimalizace a využívání procesních kapalin.";
    const professionalFocusLabel: string = "Hlavní odborné zaměření KOM „Obrábění kovových a nekovových materiálů“ je rozděleno do následujících základních směrů:";
    const professionalFocus: Array<IProfFocus> = [
        {
            label: "Obrábění klasických kovových materiálů",
            information: [
                "Hodnocení technologických charakteristik a spolehlivosti řezných nástrojů",
                "Řezné podmínky a jejich optimalizace z hlediska řezného nástroje a obráběného materiálu",
                "Technologické charakteristiky procesních kapalin",
                "Utváření třísky při obrábění nástroji s definovanou geometrií břitu",
                "Kvalita povrchu a rozměrová stabilita po obrábění"
            ]
        },
        {
            label: "Obrábění nekovových a kompozitních materiálů",
            information: [
                "Řezné podmínky spolu s optimalizací procesu obrábění nekovových a kompozitních materiálů",
                "Procesní kapaliny pro obrábění nekovových a kompozitních materiálů",
                "Optimalizace nástrojů s definovanou i nedefinovanou geometrií břitu",
                "Kvalita povrchu a rozměrová stabilita po obrábění nekovových a kompozitních materiálů"
            ]
        },
        {
            label: "Související procesy",
            information: [
                "Analýza a projektování výrobních procesů, jejich optimalizace a modernizace",
                "Montážní postupy, jejich analýza, návrh a optimalizace",
                "Strojírenská metrologie - rozměrové charakteristiky, kvalita a jakost povrchu"
            ]
        }
    ];
    const programsLabel: string = "Pro studenty KOM zajišťuje výuku odborných předmětů v prezenční i kombinované formě studia. Dále nabízí témata závěrečných prací v bakalářském, navazujícím magisterském i doktorském studijním programu:";
    const programs: Array<IPrograms> = [
        {
            label: "Bakalářský studijní program",
            content: [
                {
                    number: "B0715A270008",
                    name: "Strojírenství"
                }
            ]
        },
        {
            label: "Navazující magisterský studijní program",
            content: [
                {
                    number: "N2301",
                    name: "Strojní inženýrství – Strojírenská technologie a materiály"
                },
                {
                    number: "N0722A270001",
                    name: "Technologie plastů a kompozitů"
                }
            ]
        },
        {
            label: "Doktorský studijní program",
            content: [
                {
                    number: "P0788D270002",
                    name: "Technologie a materiály"
                }
            ]
        }
    ];


    return (
        <div className="department padding">
            <h1 className="mainLabel">Informace o katedře</h1>
            <div className="mainInfo">
                <p className="departmentInfo">
                    <img src={mainPhotoDeprtment}/>
                    <span>{mainInfo}</span>
                </p>
            </div>
            <div className="professionalFocus">
                <p className="titleMain">{professionalFocusLabel}</p>
                {professionalFocus.map(item => {
                    return (
                        <div className="professionalFocusList padding" key={item.label}>
                            <p className="titleSecond">{item.label}</p>
                            <ul>
                                {item.information.map(elem => {
                                    return (
                                        <li key={elem}>{elem}</li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
            <div className="programs">
                <p className="titleMain">{programsLabel}</p>
                {programs.map(item => {
                    return (
                        <div className="programsList padding" key={item.label}>
                            <p className="titleSecond">{item.label}</p>
                            <ul>
                                {item.content.map(elem => {
                                    return (
                                        <li key={elem.number}>
                                            {`${elem.number} - ${elem.name}`}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

const Department = (props: IProps) => {
    let match = useRouteMatch();
    return (
        <Switch>
            <Route path={match.path} exact component={DepartmentContent}/>
        </Switch>
    );
};

export default Department;