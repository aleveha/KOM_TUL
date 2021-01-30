import React from 'react';
import {Switch, Route, useRouteMatch} from 'react-router-dom';
import {IEmployee} from './Employees';
import {
    Table,
    TableRow,
    TableCell,
    TableContainer,
    TableBody,
    TableHead,
    makeStyles,
    createStyles,
    Card, Paper
} from '@material-ui/core';

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
    additionalInfo?: Array<string>,
    links?: Array<string>
}

interface IEducationYear {
    year: number,
    required?: ICourseType,
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

interface TableProps {
    courseTable: ICourseTable[]
}

const useStyles = makeStyles({
    table: {
        minWidth: 800,
    },
});

const EducationTable = ({courseTable}: TableProps) => {
    const classes = useStyles();

    return (
        <TableContainer component={Card} variant="outlined" className="tableContainer">
            <Table size="small" className={classes.table}>
                <TableHead className="tableHeader">
                    <TableRow>
                        <TableCell>Název</TableCell>
                        <TableCell>Zkratka</TableCell>
                        <TableCell>Semestr</TableCell>
                        <TableCell>Rozsah</TableCell>
                        <TableCell>Zkouška</TableCell>
                        <TableCell>Kredity</TableCell>
                        <TableCell>Vyučující</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {courseTable.map(tableLine => {
                        return (
                            <TableRow key={tableLine.name}>
                                <TableCell>{tableLine.name}</TableCell>
                                <TableCell>{tableLine.shortName}</TableCell>
                                <TableCell>{tableLine.semester}</TableCell>
                                <TableCell>{tableLine.range}</TableCell>
                                <TableCell>{tableLine.exam}</TableCell>
                                <TableCell>{tableLine.credits}</TableCell>
                                <TableCell>{tableLine.professor.map(professor => {
                                    return (
                                        tableLine.professor.indexOf(professor) === tableLine.professor.length - 1 ?
                                            <span key={tableLine.professor.indexOf(professor)}>{professor}</span> :
                                            <span key={tableLine.professor.indexOf(professor)}>{professor + ', '}</span>
                                    );
                                })}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const EducationContent = () => {
    const EducationalPrograms: Array<IEducationalProgram> = [
        {
            //bakalar
            name: "Bakalářský studijní program",
            shortDescription: {
                form: "prezenční\xa0–\xa0kombinovaná",
                basicTerm: "3\xa0roky",
                endDegree: "Bakalář\xa0(Bc.)"
            },
            programs: [
                {
                    number: "B0715A270008",
                    name: "Strojírenství",
                    educationYears: [
                        {
                            year: 3,
                            required: {
                                name: "Povinné předměty",
                                courseTable: [
                                    {
                                        name: "Technologie\xa0III",
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
                                        name: "Montáž\xa0a metrologie",
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
                                        name: "Bakalářská práce\xa0I.",
                                        shortName: "BCP1",
                                        semester: "Letní",
                                        range: "50\xa0h",
                                        exam: "zápočet",
                                        credits: 6,
                                        professor: [
                                            "vedoucí\xa0BP"
                                        ]
                                    },
                                    {
                                        name: "Bakalářská práce\xa0II.",
                                        shortName: "BCP2",
                                        semester: "Letní",
                                        range: "70 h",
                                        exam: "zápočet",
                                        credits: 10,
                                        professor: [
                                            "vedoucí\xa0BP"
                                        ]
                                    }
                                ]
                            }
                        }
                    ],
                    additionalInfo: [
                        "Směrnice rektora TUL č.\xa05/2018 - Jednotná úprava\xa0a zveřejňování bakalářských, diplomových, rigorózních, disertačních a habilitačních prací"
                    ],
                    links: [
                        "https://www.tul.cz/document/8580"
                    ]

                }
            ]
        },
        {
            //magistr
            name: "Navazující magisterský studijní program",
            shortDescription: {
                form: "prezenční\xa0–\xa0kombinovaná",
                basicTerm: "2\xa0roky",
                endDegree: "Inženýr\xa0(Ing.)"
            },
            programs: [
                {
                    number: "N0715A270015MT",
                    name: "Materiály\xa0a technologie",
                    educationYears: [
                        {
                            year: 1,
                            required: {
                                name: "Povinné předměty",
                                courseTable: [
                                    {
                                        name: "Teorie obrábění",
                                        shortName: "TO",
                                        semester: "Letní",
                                        range: "2+2",
                                        exam: "zk",
                                        credits: 5,
                                        professor: [
                                            "Jersák",
                                            "Popov"
                                        ]
                                    },
                                    {
                                        name: "Exkurze",
                                        shortName: "EX",
                                        semester: "Letní",
                                        range: "0+1T",
                                        exam: "z",
                                        credits: 3,
                                        professor: [
                                            "Nováková\xa0(KSP)"
                                        ]
                                    },
                                    {
                                        name: "Odborná praxe",
                                        shortName: "OP",
                                        semester: "Letní",
                                        range: "0+3T",
                                        exam: "z",
                                        credits: 3,
                                        professor: [
                                            "Sobotka\xa0(KSP)"
                                        ]
                                    }
                                ]
                            },
                            requiredOptional: [
                                {
                                    name: "Povinně volitelný předmět – skupina\xa01",
                                    courseTable: [
                                        {
                                            name: "Přípravky\xa0a montážní prostředky",
                                            shortName: "PMOP",
                                            semester: "Zimní",
                                            range: "2+2",
                                            exam: "zk",
                                            credits: 5,
                                            professor: [
                                                "Dvořáčková"
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Povinně volitelný předmět – skupina\xa02",
                                    courseTable: [
                                        {
                                            name: "Abrazivní\xa0a nekonvenční metody",
                                            shortName: "ANM",
                                            semester: "Letní",
                                            range: "2+2",
                                            exam: "zk",
                                            credits: 5,
                                            professor: [
                                                "Jersák"
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            year: 2,
                            required: {
                                name: "Povinné předměty",
                                courseTable: [
                                    {
                                        name: "Diplomová práce\xa01",
                                        shortName: "DP1",
                                        semester: "Zimní",
                                        range: "0+2",
                                        exam: "kl.\xa0z.",
                                        credits: 2,
                                        professor: [
                                            "vedoucí\xa0DP"
                                        ]
                                    },
                                    {
                                        name: "Metrologie",
                                        shortName: "MET",
                                        semester: "Zimní",
                                        range: "2+2",
                                        exam: "zk",
                                        credits: 5,
                                        professor: [
                                            "Dvořáčková"
                                        ]
                                    },
                                    {
                                        name: "Diplomová práce\xa02",
                                        shortName: "DP2",
                                        semester: "Letní",
                                        range: "0+8",
                                        exam: "z",
                                        credits: 7,
                                        professor: [
                                            "vedoucí\xa0DP"
                                        ]
                                    },
                                    {
                                        name: "Diplomová práce\xa03",
                                        shortName: "DP3",
                                        semester: "Letní",
                                        range: "0+16",
                                        exam: "z",
                                        credits: 15,
                                        professor: [
                                            "vedoucí\xa0DP"
                                        ]
                                    },
                                    {
                                        name: "Projekt. tech. procesů\xa0a automat. výroby",
                                        shortName: "PTPA",
                                        semester: "Letní",
                                        range: "2+2",
                                        exam: "zk",
                                        credits: 4,
                                        professor: [
                                            "Dvořáčková",
                                            "Jersák"
                                        ]
                                    }
                                ]
                            },
                            requiredOptional: [
                                {
                                    name: "Povinně volitelný předmět – skupina\xa03",
                                    courseTable: [
                                        {
                                            name: "Cutting Tools",
                                            shortName: "RENAJ",
                                            semester: "Zimní",
                                            range: "2+2",
                                            exam: "zk",
                                            credits: 5,
                                            professor: [
                                                "Popov"
                                            ]
                                        },
                                        {
                                            name: "Speciální metody obrábění",
                                            shortName: "SMO",
                                            semester: "Zimní",
                                            range: "2+2",
                                            exam: "zk",
                                            credits: 5,
                                            professor: [
                                                "Popov"
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name: "Povinně volitelný předmět – skupina\xa04",
                                    courseTable: [
                                        {
                                            name: "Výrobní procesy\xa0a systémy",
                                            shortName: "VPS",
                                            semester: "Letní",
                                            range: "2+2",
                                            exam: "zk",
                                            credits: 4,
                                            professor: [
                                                "Jersák"
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    additionalInfo: [
                        "Směrnice rektora TUL č.\xa05/2018 - Jednotná úprava\xa0a zveřejňování bakalářských, diplomových, rigorózních, disertačních\xa0a habilitačních prací"
                    ],
                    links: [
                        "https://www.tul.cz/document/8580"
                    ]
                },
                {
                    number: "N0722A270001",
                    name: "Technologie plastů\xa0a kompozitů",
                    educationYears: [
                        {
                            year: 2,
                            required: {
                                name: "Povinné předměty",
                                courseTable: [
                                    {
                                        name: "Metrologie",
                                        shortName: "MET",
                                        semester: "Zimní",
                                        range: "2+2",
                                        exam: "zk",
                                        credits: 5,
                                        professor: [
                                            "Dvořáčková"
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    number: "N0788A270004",
                    name: "Inovační\xa0a průmyslové inženýrství",
                    educationYears: [
                        {
                            year: 2,
                            requiredOptional: [
                                {
                                    name: "Povinně volitelný předmět – skupina\xa03",
                                    courseTable: [
                                        {
                                            name: "Metrologie",
                                            shortName: "MET",
                                            semester: "Zimní",
                                            range: "2+2",
                                            exam: "zk",
                                            credits: 5,
                                            professor: [
                                                "Dvořáčková"
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            //doktor
            name: "Doktorský studijní program",
            shortDescription: {
                form: "prezenční\xa0–\xa0kombinovaná",
                basicTerm: "4\xa0roky",
                endDegree: "doktor\xa0(Ph.D.)"
            },
            programs: [
                {
                    number: "P0788D270002",
                    name: "Technologie\xa0a materiály",
                    trainers: [
                        {
                            specification: "Obrábění kovových materiálů: ",
                            person: {
                                name: "Alexey Popov",
                                degree: "DrSc.",
                                status: "prof.\xa0Ing."
                            }
                        },
                        {
                            specification: "Obrábění kovových a nekovových materiálů: ",
                            person: {
                                name: "Jan Jersák",
                                degree: "CSc.",
                                status: "doc.\xa0Ing."
                            }
                        },
                        {
                            specification: "Metrologie: ",
                            person: {
                                name: "Štěpánka Dvořáčková",
                                degree: "Ph.D.",
                                status: "doc.\xa0Ing."
                            }
                        }
                    ],
                    additionalInfo: [
                        "Informace\xa0a formuláře\xa0k doktorskému studijnímu programu",
                        "Směrnice rektora TUL č.\xa05/2018 - Jednotná úprava\xa0a zveřejňování bakalářských, diplomových, rigorózních, disertačních\xa0a habilitačních prací"
                    ],
                    links: [
                        "http://www.fs.tul.cz/cz/pro-studenty/doktorske-studium/",
                        "https://www.tul.cz/document/8580"
                    ]
                }
            ]
        }
    ];

    return (
        <div className="educatingContent padding">
            {EducationalPrograms.map(educationProgram => {
                return (
                    <div className="educationProgram border" key={educationProgram.name}>
                        <div className="programName">
                            <h2 className="mainLabel">{educationProgram.name}</h2>
                        </div>
                        <div className="programShortDesc">
                            <div className="descriptionLine">
                                <p className="titleMain">Forma studia: </p>
                                <p>{educationProgram.shortDescription.form}</p>
                            </div>
                            <div className="descriptionLine">
                                <p className="titleMain">Standardní doba studia: </p>
                                <p>{educationProgram.shortDescription.basicTerm}</p>
                            </div>
                            <div className="descriptionLine">
                                <p className="titleMain">Udělovaný akademický titul: </p>
                                <p>{educationProgram.shortDescription.endDegree}</p>
                            </div>
                        </div>
                        <div className="educationProgramContent">
                            {educationProgram.programs.map(program => {
                                return (
                                    <div className="programContent" key={program.number}>
                                        <div className="programTitle">
                                            <p className="violetPar">{program.number}</p>
                                            <p className="longSeparator">&nbsp;&nbsp;&mdash;&mdash;&mdash;&nbsp;&nbsp;</p>
                                            <p className="bluePar">{program.name}</p>
                                        </div>
                                        {program.educationYears && program.educationYears.map(studyingYear => {
                                            return (
                                                <div className="educationYearInfo" key={studyingYear.year}>
                                                    <p className="bluePar">{studyingYear.year}.&nbsp;ročník</p>
                                                    {studyingYear.required &&
                                                    <div className="courses padding">
                                                        <p className="violetPar">{studyingYear.required.name}</p>
                                                        <EducationTable courseTable={studyingYear.required.courseTable}/>
                                                    </div>
                                                    }
                                                    {studyingYear.requiredOptional && studyingYear.requiredOptional.map(course => {
                                                        return (
                                                            <div className="courses padding" key={course.name}>
                                                                <p className="violetPar">{course.name}</p>
                                                                <EducationTable courseTable={course.courseTable}/>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            );
                                        })}
                                        {program.links && program.links.map(link => {
                                            return (
                                            <div className="additionalInfo linkPar"
                                            key={program.links && program.links.indexOf(link)}>
                                            <a className="link"
                                            href={link}>{program.additionalInfo && program.links && program.additionalInfo[program.links.indexOf(link)]}</a>
                                            </div>
                                            );
                                        })}
                                            </div>
                                            );
                                        })}
                                </div>
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