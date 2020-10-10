import {Route, Switch, useRouteMatch} from "react-router-dom";
import * as React from "react";
import '../../../CSS/PagesCSS/Projects.css';

interface IProps {

}

interface IProject {
    provider?: string,
    program?: string,
    number: string,
    name: string,
    solver?: string,
    coSolver?: string,
    solvingTerm?: string,
    link?: string,
    recipient?: string,
    mainRecipient?: string,
}

const ProjectsContent = () => {
    const solvedProjects: Array<IProject> = [
        {
            provider: "Technologická agentura České republiky (TA ČR)",
            program: "Program na podporu aplikovaného výzkumu ZÉTA",
            number: "TJ02000175",
            name: "Výzkum koncových měrek z hlediska teplotní roztažnosti a nestandardního složení materiálu",
            solver: "Český metrologický institut, Ing. Eva Tyralíková",
            coSolver: "TUL / FS / Katedra obrábění a montáže, Ing. Miloslav Ledvina, Ph.D.",
            solvingTerm: "2019-2021",
            link: "https://www.rvvi.cz/cep?s=jednoduche-vyhledavani&ss=detail&n=0&h=TJ02000175"
        },
        {
            provider: "Ministerstvo školství mládeže a tělovýchovy (Studentská grantová soutěž FS TUL)",
            number: "21282",
            name: "Studium a hodnocení procesů obrábění se zaměřením na nástroj a řezné podmínky",
            solver: "Ing. Iuliia Krasnikova",
            solvingTerm: "2019-2021",
            link: "http://www.fs.tul.cz/fsadmin/soubory/fs/Files/SGS/2019_Studentska_grantova_soutez.pdf"
        }
    ];

    const projectsArchive: Array<IProject> = [
        {
            provider: "TA0 - Technologická agentura České republiky",
            number: "TA03010663",
            name: "Nové systémy pro kontrolu délky koncových měrek a vyhodnocení kvality jejich povrchů",
            solver: "Ing. Štěpánka Dvořáčková, Ph.D.",
            mainRecipient: "Technická univerzita v Liberci / Fakulta strojní",
            solvingTerm: "2013-2016",
            link: "https://www.rvvi.cz/cep?s=jednoduche-vyhledavani&ss=detail&n=0&h=TA03010663"
        },
        {
            number: "TA03010492",
            name: "Aplikovaný multioborový výzkum a vývoj progresivních způsobů chlazení u technologických procesů",
            provider: "TA0 - Technologická agentura České republiky",
            recipient: "GDK spol. s.r.o.",
            solvingTerm: "2013-2015",
            link: "https://www.rvvi.cz/cep?s=rozsirene-vyhledavani&ss=detail&n=0&h=TA03010492"
        },
        {
            name: "Ekologické obráběcí kapaliny nové generace",
            number: "TA02021332",
            provider: "TA0 - Technologická agentura České republiky",
            program: "ALFA",
            solver: "PARAMO, a.s.",
            coSolver: "Fakulta strojní TUL, Ing. Jan Jehlička, doc. Ing. Jan Jersák, CSc.",
            solvingTerm: "2012-2014",
            link: "https://www.rvvi.cz/cep?s=jednoduche-vyhledavani&ss=detail&n=0&h=TA02021332"
        }
    ];

    return (
        <div className="projects padding">
            <h1 className="mainLabel">Projekty</h1>
            <div className="projectsInfo">
                <div className="solvedProjects">
                    <p className="titleSecond">Aktuálně řešené projekty</p>
                    {solvedProjects.map(project => {
                        return (
                            <div className="projectBlock">

                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

const Projects = (props: IProps) => {
    let match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={match.path} exact component={ProjectsContent}/>
            </Switch>
        </div>
    );
};

export default Projects;