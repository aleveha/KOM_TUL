import * as React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import firstPhoto from "../../../img/department/1.webp";
import secondPhoto from "../../../img/department/2.webp";
import thirdPhoto from "../../../img/department/3.webp";
import { useTranslation } from "react-i18next";

interface IProfFocus {
    label: string;
    information: Array<string>;
}

interface IProgram {
    number: string;
    name: string;
}

interface IPrograms {
    label: string;
    content: Array<IProgram>;
}

const DepartmentContent = () => {
    const { t } = useTranslation();

    const mainInfo: string = t("main.department.mainInfo");
    const professionalFocusLabel: Array<string> = t(
        "main.department.profFocusLabel",
        { returnObjects: true }
    );
    const professionalFocus: Array<IProfFocus> = t(
        "main.department.profFocus",
        { returnObjects: true }
    );
    const programsLabel: string = t("main.department.programLabel");
    const programs: Array<IPrograms> = t("main.department.programs", {
        returnObjects: true,
    });

    return (
        <div className="department">
            <h1 className="mainLabel padding">{t("main.department.label")}</h1>
            <div className="departmentContent padding">
                <div className="departmentInfo">
                    <div className="introPhotos">
                        <img
                            src={firstPhoto}
                            alt="introPhoto"
                            loading="lazy"
                            className="introPhoto"
                        />
                        <img
                            src={secondPhoto}
                            alt="introPhoto"
                            loading="lazy"
                            className="introPhoto"
                        />
                        <img
                            src={thirdPhoto}
                            alt="introPhoto"
                            loading="lazy"
                            className="introPhoto"
                        />
                    </div>
                    <p>{mainInfo}</p>
                </div>
                <div className="professionalFocus">
                    <p className="titleMain">
                        {professionalFocusLabel.map((str) => (
                            <span key={str}> {str} </span>
                        ))}
                    </p>
                    {professionalFocus.map((item) => {
                        return (
                            <div
                                className="professionalFocusList padding infoBlock"
                                key={item.label}>
                                <p className="titleSecond">{item.label}</p>
                                <ul>
                                    {item.information.map((elem) => {
                                        return <li key={elem}>{elem}</li>;
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
                <div className="programs">
                    <p className="titleMain">{programsLabel}</p>
                    {programs.map((item) => {
                        return (
                            <div
                                className="programsList infoBlock padding"
                                key={item.label}>
                                <p className="titleSecond">{item.label}</p>
                                <ul>
                                    {item.content.map((elem) => {
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
        </div>
    );
};

const Department = () => {
    let match = useRouteMatch();
    return (
        <Switch>
            <Route path={match.path} exact component={DepartmentContent} />
        </Switch>
    );
};

export default Department;
