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
            name: "Výzkum koncových měrek z hlediska teplotní roztažnosti a nestandardního složení materiálu",
            number: "TJ02000175",
            solvingTerm: "2019-2021",
            provider: "Technologická agentura České republiky (TA ČR)",
            program: "Program na podporu aplikovaného výzkumu ZÉTA",
            solver: "Český metrologický institut, Ing. Eva Tyralíková",
            coSolver: "TUL / FS / Katedra obrábění a montáže, Ing. Miloslav Ledvina, Ph.D.",
            link: "https://www.rvvi.cz/cep?s=jednoduche-vyhledavani&ss=detail&n=0&h=TJ02000175"
        },
        {
            name: "Studium a hodnocení procesů obrábění se zaměřením na nástroj a řezné podmínky",
            number: "21282",
            solvingTerm: "2019-2021",
            provider: "Ministerstvo školství mládeže a tělovýchovy (Studentská grantová soutěž FS TUL)",
            solver: "Ing. Iuliia Krasnikova",
            link: "http://www.fs.tul.cz/fsadmin/soubory/fs/Files/SGS/2019_Studentska_grantova_soutez.pdf"
        }
    ];

    const projectsArchive: Array<IProject> = [
        {
            name: "Nové systémy pro kontrolu délky koncových měrek a vyhodnocení kvality jejich povrchů",
            number: "TA03010663",
            solvingTerm: "2013-2016",
            provider: "TA0 - Technologická agentura České republiky",
            solver: "Ing. Štěpánka Dvořáčková, Ph.D.",
            mainRecipient: "Technická univerzita v Liberci / Fakulta strojní",
            link: "https://www.rvvi.cz/cep?s=jednoduche-vyhledavani&ss=detail&n=0&h=TA03010663"
        },
        {
            number: "TA03010492",
            name: "Aplikovaný multioborový výzkum a vývoj progresivních způsobů chlazení u technologických procesů",
            solvingTerm: "2013-2015",
            provider: "TA0 - Technologická agentura České republiky",
            recipient: "GDK spol. s.r.o.",
            link: "https://www.rvvi.cz/cep?s=rozsirene-vyhledavani&ss=detail&n=0&h=TA03010492"
        },
        {
            name: "Ekologické obráběcí kapaliny nové generace",
            number: "TA02021332",
            solvingTerm: "2012-2014",
            provider: "TA0 - Technologická agentura České republiky",
            program: "ALFA",
            solver: "PARAMO, a.s.",
            coSolver: "Fakulta strojní TUL, Ing. Jan Jehlička, doc. Ing. Jan Jersák, CSc.",
            link: "https://www.rvvi.cz/cep?s=jednoduche-vyhledavani&ss=detail&n=0&h=TA02021332"
        }
    ];

    const CreateProjectBlock = (project: IProject, key: string) => {
        let hasProperty: boolean = false;
        let blockStruct: JSX.Element | null;
        let projectInfoValue: string | undefined = '';
        let labelValue: string = '';
        switch (key) {
            case "name":
                hasProperty = true;
                projectInfoValue = project[key];
                labelValue = "Název projektu: ";
                break;
            case "number":
                hasProperty = true;
                projectInfoValue = project[key];
                labelValue = "Označení projektu: ";
                break;
            case "solvingTerm":
                hasProperty = true;
                projectInfoValue = project[key];
                labelValue = "Období řešení projektu: ";
                break;
            case "provider":
                hasProperty = true;
                projectInfoValue = project[key];
                labelValue = "Poskytovatel: ";
                break;
            case "program":
                hasProperty = true;
                projectInfoValue = project[key];
                labelValue = "Program: ";
                break;
            case "solver":
                hasProperty = true;
                projectInfoValue = project[key];
                labelValue = "Řešitel projektu: ";
                break;
            case "coSolver":
                hasProperty = true;
                projectInfoValue = project[key];
                labelValue = "Spoluřešitel: ";
                break;
            case "recipient":
                hasProperty = true;
                projectInfoValue = project[key];
                labelValue = "Příjemce: ";
                break;
            case "mainRecipient":
                hasProperty = true;
                projectInfoValue = project[key];
                labelValue = "Hlavní příjemce: ";
                break;
            case "link":
                hasProperty = true;
                projectInfoValue = project[key];
                labelValue = "Odkaz na projekt";
                break;
        }

        if (hasProperty) {
            if (key !== "link") {
            blockStruct = (
                <div className="projectInfoBlock" key={key}>
                    <div className="projectInfoLabel">
                        <p className="titleMain"><span>{labelValue}</span></p>
                    </div>
                    <div className="projectInfoContent">
                        <p><span>{projectInfoValue}</span></p>
                    </div>
                </div>
            )} else {
                blockStruct = (
                    <div className="linkBlock" key={key}>
                        <a href={projectInfoValue} target="_blank" className="titleSecond linkPar projectLink"><span>{labelValue}</span></a>
                    </div>
                )
            }
        } else blockStruct = null;

        return blockStruct;
    }

    return (
        <div className="projects padding">
            <div className="projectsInfo">
                <div className="solvedProjects projectsGroup">
                    <p className="titleSecond projectTitle">Aktuálně řešené projekty</p>
                    {solvedProjects.map(project => {
                        return (
                            <div className="projectsBlock border" key={project.name}>
                                {Object.keys(project).map(key => CreateProjectBlock(project, key))}
                            </div>
                        );
                    })}
                </div>
                <div className="archivedProjects projectsGroup">
                    <p className="titleSecond projectTitle">Archív VaV projektů</p>
                    {projectsArchive.map(project => {
                        return (
                            <div className="projectsBlock border" key={project.name}>
                                {Object.keys(project).map(key => CreateProjectBlock(project, key))}
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
        <Switch>
            <Route path={match.path} exact component={ProjectsContent}/>
        </Switch>
    );
};

export default Projects;