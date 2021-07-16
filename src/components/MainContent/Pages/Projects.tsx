import * as React from "react";
import { useTranslation } from "react-i18next";

interface IProject {
    provider?: string;
    program?: string;
    number: string;
    name: string;
    solver?: string;
    coSolver?: string;
    solvingTerm?: string;
    link?: string;
    recipient?: string;
    mainRecipient?: string;
}

const ProjectBlock = (props: { info: string; key: string }) => {
    const { t } = useTranslation();
    const { info, key } = props;
    const projectInfoValue = info;
    const labelValue: string = t(`main.projects.labels.projectBlock.${key}`);

    return key === "link" ? (
        <div className="linkBlock" key={key}>
            <a
                href={projectInfoValue}
                target="_blank"
                rel="noopener noreferrer"
                className="titleSecond linkPar projectLink">
                {labelValue}
            </a>
        </div>
    ) : (
        <div className="projectInfoBlock" key={key}>
            <div className="projectInfoLabel">
                <p className="titleMain">{labelValue}</p>
            </div>
            <div className="projectInfoContent">
                <p>{projectInfoValue}</p>
            </div>
        </div>
    );
};

const ProjectsGroup = (props: { projectGroup: IProject[]; title: string }) => {
    return (
        <div className="projectsGroup">
            <p className="titleSecond projectsTitle mainLabel">{props.title}</p>
            {props.projectGroup.map((project) => {
                return (
                    <div className="projectsBlock border" key={project.name}>
                        {Object.entries(project).map((elem) =>
                            ProjectBlock({
                                info: elem[1],
                                key: elem[0],
                            })
                        )}
                    </div>
                );
            })}
        </div>
    );
};

const Projects = () => {
    const { t } = useTranslation();
    const solvedProjects: Array<IProject> = t("main.projects.solvedProjects", {
        returnObjects: true,
    });
    const archiveProjects: Array<IProject> = t(
        "main.projects.projectsArchive",
        { returnObjects: true }
    );

    return (
        <div className="projects">
            <div className="projectsInfo">
                <ProjectsGroup
                    projectGroup={solvedProjects}
                    title={t("main.projects.labels.labels.0")}
                />
                <ProjectsGroup
                    projectGroup={archiveProjects}
                    title={t("main.projects.labels.labels.1")}
                />
            </div>
        </div>
    );
};

export default Projects;
