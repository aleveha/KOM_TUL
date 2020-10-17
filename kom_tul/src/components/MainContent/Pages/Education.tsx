import React from 'react';
import {Switch, Route, useRouteMatch} from 'react-router-dom';
import {IEmployee} from './Employees';

interface IEducationalProgram {
    name: string,
    shortDescription: IShortDescription,
    programs: Array<IProgram>,
}

interface IShortDescription {
    form: string,
    basicTerm: string,
    endDegree: string
}

interface IProgram {
    number: string,
    name: string,
    educationYears?: Array<IEducationYear>,
    trainers?: Array<ITrainer>,
    additionalInfo: string,
    links: Array<string>
}

interface IEducationYear {
    year: number,
    required: ICourseType,
    requiredOptional?: Array<ICourseType>
}

interface ITrainer {
    specification: string,
    person: IEmployee
}

interface ICourseType {
    name: string,
    courseTable: Array<ICourseTable>
}

interface ICourseTable {
    name: string,
    shortName: string,
    semester: string,
    range: string,
    exam: string,
    credits: number,
    professor: Array<string>
}

const EducationContent = () => {
    const EducationalPrograms: Array<IEducationalProgram> = [
        {
            //bakalar
            name: "Bakalářský studijní program",
            shortDescription: {
                form: "prezenční – kombinovaná",
                basicTerm: "3 roky",
                endDegree: "Bakalář (Bc.)"
            },
            programs: [
                {
                    number: "B0715A270008",
                    name: "Strojírenství - předměty vyučované katedrou",
                    educationYears: [
                        {
                            year: 3,
                            required: {
                                name: "Povinné předměty",
                                courseTable: [
                                    {
                                        name: "Technologie III",
                                        shortName: "TOB-B",
                                        semester: "Zimní",
                                        range: "2+2",
                                        exam: "zk",
                                        credits: 4,
                                        professor: [
                                            "Jersák"
                                        ]
                                    },
                                    {
                                        name: "Bakalářský seminář",
                                        shortName: "BCPS",
                                        semester: "Zimní",
                                        range: "0+2",
                                        exam: "kl. z.",
                                        credits: 2,
                                        professor: [
                                            "vedoucí BP"
                                        ]
                                    },
                                    {
                                        name: "Montáž a metrologie",
                                        shortName: "MOM-B",
                                        semester: "Letní",
                                        range: "2+1",
                                        exam: "zk",
                                        credits: 4,
                                        professor: [
                                            "Dvořáčková"
                                        ]
                                    },
                                    {
                                        name: "",
                                        shortName: "",
                                        semester: "",
                                        range: "",
                                        exam: "",
                                        credits: 5,
                                        professor: []
                                    },
                                    {
                                        name: "",
                                        shortName: "",
                                        semester: "",
                                        range: "",
                                        exam: "",
                                        credits: 5,
                                        professor: []
                                    }
                                ]
                            }
                        }
                    ],
                    additionalInfo: "",
                    links: []
                }
            ]
        },
        {
            //magistr
            name: "Navazující magisterský studijní program",
            shortDescription: {
                form: "",
                basicTerm: "",
                endDegree: ""
            },
            programs: [
                {
                    number: "",
                    name: "",
                    educationYears: [
                        {
                            year: 1,
                            required: {
                                name: "",
                                courseTable: [
                                    {
                                        name: "",
                                        shortName: "",
                                        semester: "",
                                        range: "",
                                        exam: "",
                                        credits: 0,
                                        professor: []
                                    },
                                    {
                                        name: "",
                                        shortName: "",
                                        semester: "",
                                        range: "",
                                        exam: "",
                                        credits: 0,
                                        professor: []
                                    },
                                    {
                                        name: "",
                                        shortName: "",
                                        semester: "",
                                        range: "",
                                        exam: "",
                                        credits: 0,
                                        professor: []
                                    }
                                ]
                            },
                            requiredOptional: [
                                {
                                    name: "",
                                    courseTable: [
                                        {
                                            name: "",
                                            shortName: "",
                                            semester: "",
                                            range: "",
                                            exam: "",
                                            credits: 0,
                                            professor: []
                                        }
                                    ]
                                },
                                {
                                    name: "",
                                    courseTable: [
                                        {
                                            name: "",
                                            shortName: "",
                                            semester: "",
                                            range: "",
                                            exam: "",
                                            credits: 0,
                                            professor: []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            year: 2,
                            required: {
                                name: "",
                                courseTable: [
                                    {
                                        name: "",
                                        shortName: "",
                                        semester: "",
                                        range: "",
                                        exam: "",
                                        credits: 0,
                                        professor: []
                                    },
                                    {
                                        name: "",
                                        shortName: "",
                                        semester: "",
                                        range: "",
                                        exam: "",
                                        credits: 0,
                                        professor: []
                                    },
                                    {
                                        name: "",
                                        shortName: "",
                                        semester: "",
                                        range: "",
                                        exam: "",
                                        credits: 0,
                                        professor: []
                                    },
                                    {
                                        name: "",
                                        shortName: "",
                                        semester: "",
                                        range: "",
                                        exam: "",
                                        credits: 0,
                                        professor: []
                                    }
                                ]
                            },
                            requiredOptional: [
                                {
                                    name: "",
                                    courseTable: [
                                        {
                                            name: "",
                                            shortName: "",
                                            semester: "",
                                            range: "",
                                            exam: "",
                                            credits: 0,
                                            professor: []
                                        }
                                    ]
                                },
                                {
                                    name: "",
                                    courseTable: [
                                        {
                                            name: "",
                                            shortName: "",
                                            semester: "",
                                            range: "",
                                            exam: "",
                                            credits: 0,
                                            professor: []
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    additionalInfo: "",
                    links: []
                },
                {
                    number: "",
                    name: "",
                    educationYears: [
                        {
                            year: 2,
                            required: {
                                name: "",
                                courseTable: [
                                    {
                                        name: "",
                                        shortName: "",
                                        semester: "",
                                        range: "",
                                        exam: "",
                                        credits: 0,
                                        professor: []
                                    }
                                ]
                            }
                        }
                    ],
                    additionalInfo: "",
                    links: []
                },
                {
                    number: "",
                    name: "",
                    educationYears: [
                        {
                            year: 2,
                            required: {
                                name: "",
                                courseTable: [
                                    {
                                        name: "",
                                        shortName: "",
                                        semester: "",
                                        range: "",
                                        exam: "",
                                        credits: 0,
                                        professor: []
                                    }
                                ]
                            }
                        }
                    ],
                    additionalInfo: "",
                    links: []
                }
            ]
        },
        {
            //doktor
            name: "Doktorský studijní program",
            shortDescription: {
                form: "",
                basicTerm: "",
                endDegree: ""
            },
            programs: [
                {
                    number: "",
                    name: "",
                    trainers: [
                        {
                            specification: "",
                            person: {
                                name: "",
                                degree: "",
                                status: ""
                            }
                        },
                        {
                            specification: "",
                            person: {
                                name: "",
                                degree: "",
                                status: ""
                            }
                        },
                        {
                            specification: "",
                            person: {
                                name: "",
                                degree: "",
                                status: ""
                            }
                        },
                        {
                            specification: "",
                            person: {
                                name: "",
                                degree: "",
                                status: ""
                            }
                        }
                    ],
                    additionalInfo: "",
                    links: []
                }
            ]
        }
    ];

    return (
        <div className="educatingContent">
            {EducationalPrograms.map(educationProgram => {
                return (
                    <div className="educationProgram" key={educationProgram.name}>
                        <div className="educationProgramTitle">
                            <h2>{educationProgram.name}</h2>
                            <div className="educationProgramShortDescription">
                                <div className="descriptionLine">
                                    <p>Forma studia: </p>
                                    <p>{educationProgram.shortDescription.form}</p>
                                </div>
                                <div className="descriptionLine">
                                    <p>Standardní doba studia: </p>
                                    <p>{educationProgram.shortDescription.basicTerm}</p>
                                </div>
                                <div className="descriptionLine">
                                    <p>Udělovaný akademický titul: </p>
                                    <p>{educationProgram.shortDescription.endDegree}</p>
                                </div>
                            </div>
                        </div>
                        {educationProgram.programs.map(program => {
                            return (
                                <div className="programContent" key={program.number}>
                                    <div className="programTitle">
                                        <h3>{program.name}</h3>
                                        <p>{program.number}</p>
                                    </div>
                                    {program.educationYears && program.educationYears.map(studyingYear => {
                                        return (
                                            <div className="educationYearInfo">
                                                <p>{studyingYear.year}. ročník</p>
                                                <div className="requiredCourses">
                                                    <p>{studyingYear.required.name}</p>
                                                    <table>
                                                        <tr className="tableHeader">
                                                            <td>Název</td>
                                                            <td>Zkratka</td>
                                                            <td>Semestr</td>
                                                            <td>Rozsah</td>
                                                            <td>Zkouška</td>
                                                            <td>Kredity</td>
                                                            <td>Vyučující</td>
                                                        </tr>
                                                        {studyingYear.required.courseTable.map(tableLine => {
                                                            return (
                                                                <tr>
                                                                    <td>{tableLine.name}</td>
                                                                    <td>{tableLine.shortName}</td>
                                                                    <td>{tableLine.semester}</td>
                                                                    <td>{tableLine.range}</td>
                                                                    <td>{tableLine.exam}</td>
                                                                    <td>{tableLine.credits}</td>
                                                                    <td>{tableLine.professor}</td>
                                                                </tr>
                                                            );
                                                        })}
                                                    </table>
                                                </div>
                                            </div>
                                        );
                                    })}
                                    {program.links.map(link => {
                                        return (
                                            <div className="additionalInfo">
                                                <a href={link}>{program.additionalInfo[program.links.indexOf(link)]}</a>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

const Education = () => {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={match.path} exact component={EducationContent}/>
        </Switch>
    );
};

export default Education;