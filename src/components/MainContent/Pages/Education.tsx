import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { IEmployee } from "./Employees";
import {
    Button,
    createStyles,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Theme,
    withStyles,
} from "@material-ui/core";
import DownloadBD from "../../../downloads/DataBase";
import * as api from "../../../apiConnection";

interface IShortDescription {
    form: string;
    basicTerm: string;
    endDegree: string;
}

interface ITrainer {
    specification: string;
    person: IEmployee;
}

interface ICourseTable {
    name: string;
    shortName: string;
    semester: string;
    range: string;
    exam: string;
    credits: number;
    professor: Array<string>;
}

interface ICourseType {
    name: string;
    courseTable: Array<ICourseTable>;
}

interface IEducationYear {
    year: number;
    required?: ICourseType;
    requiredOptional?: Array<ICourseType>;
}

interface IProgram {
    number: string;
    name: string;
    educationYears?: Array<IEducationYear>;
    trainers?: Array<ITrainer>;
    additionalInfo?: Array<string>;
    links?: Array<string>;
}

interface IEducationalProgram {
    name: string;
    shortDescription: IShortDescription;
    programs: Array<IProgram>;
}

interface TableProps {
    courseTable: ICourseTable[];
}

const HeaderTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: "var(--blue)",
            color: theme.palette.common.white,
        },
    })
)(TableCell);

const EducationTable = ({ courseTable }: TableProps) => {
    return (
        <TableContainer
            component={Paper}
            style={{
                borderRadius: "10px",
            }}
            className="tableContainer"
        >
            <Table size="small" className="table">
                <TableHead className="tableHeader">
                    <TableRow>
                        <HeaderTableCell>N??zev</HeaderTableCell>
                        <HeaderTableCell>Zkratka</HeaderTableCell>
                        <HeaderTableCell>Semestr</HeaderTableCell>
                        <HeaderTableCell>Rozsah</HeaderTableCell>
                        <HeaderTableCell>Zkou??ka</HeaderTableCell>
                        <HeaderTableCell>Kredity</HeaderTableCell>
                        <HeaderTableCell>Vyu??uj??c??</HeaderTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {courseTable.map((tableLine) => {
                        return (
                            <TableRow key={tableLine.name}>
                                <TableCell>{tableLine.name}</TableCell>
                                <TableCell>{tableLine.shortName}</TableCell>
                                <TableCell>{tableLine.semester}</TableCell>
                                <TableCell>{tableLine.range}</TableCell>
                                <TableCell>{tableLine.exam}</TableCell>
                                <TableCell>{tableLine.credits}</TableCell>
                                <TableCell>
                                    {tableLine.professor.map((professor) => {
                                        return tableLine.professor.indexOf(
                                            professor
                                        ) ===
                                            tableLine.professor.length - 1 ? (
                                            <span
                                                key={tableLine.professor.indexOf(
                                                    professor
                                                )}
                                            >
                                                {professor}
                                            </span>
                                        ) : (
                                            <span
                                                key={tableLine.professor.indexOf(
                                                    professor
                                                )}
                                            >
                                                {professor + ", "}
                                            </span>
                                        );
                                    })}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const EducationContent = () => {
    const EducationalPrograms: Array<IEducationalProgram> = [
        {
            //bakalar
            name: "Bakal????sk?? studijn?? program",
            shortDescription: {
                form: "prezen??n??\xa0???\xa0kombinovan??",
                basicTerm: "3\xa0roky",
                endDegree: "Bakal????\xa0(Bc.)",
            },
            programs: [
                {
                    number: "B0715A270008",
                    name: "Stroj??renstv??",
                    educationYears: [
                        {
                            year: 3,
                            required: {
                                name: "Povinn?? p??edm??ty",
                                courseTable: [
                                    {
                                        name: "Technologie\xa0III",
                                        shortName: "TOB-B",
                                        semester: "Zimn??",
                                        range: "2+2",
                                        exam: "zk",
                                        credits: 4,
                                        professor: ["Dvo??????kov??"],
                                    },
                                    {
                                        name: "Bakal????sk?? semin????",
                                        shortName: "BCPS",
                                        semester: "Zimn??",
                                        range: "0+2",
                                        exam: "kl. z.",
                                        credits: 2,
                                        professor: ["vedouc?? BP"],
                                    },
                                    {
                                        name: "Mont????\xa0a metrologie",
                                        shortName: "MOM-B",
                                        semester: "Letn??",
                                        range: "2+1",
                                        exam: "zk",
                                        credits: 4,
                                        professor: ["Dvo??????kov??"],
                                    },
                                    {
                                        name: "Bakal????sk?? pr??ce\xa0I.",
                                        shortName: "BCP1",
                                        semester: "Letn??",
                                        range: "50\xa0h",
                                        exam: "z??po??et",
                                        credits: 6,
                                        professor: ["vedouc??\xa0BP"],
                                    },
                                    {
                                        name: "Bakal????sk?? pr??ce\xa0II.",
                                        shortName: "BCP2",
                                        semester: "Letn??",
                                        range: "70 h",
                                        exam: "z??po??et",
                                        credits: 10,
                                        professor: ["vedouc??\xa0BP"],
                                    },
                                ],
                            },
                        },
                    ],
                    additionalInfo: [
                        "Sm??rnice rektora TUL ??.\xa05/2018 - Jednotn?? ??prava\xa0a zve??ej??ov??n?? bakal????sk??ch, diplomov??ch, rigor??zn??ch, diserta??n??ch a habilita??n??ch prac??",
                    ],
                    links: ["https://www.tul.cz/document/8580"],
                },
            ],
        },
        {
            //magistr
            name: "Navazuj??c?? magistersk?? studijn?? program",
            shortDescription: {
                form: "prezen??n??\xa0???\xa0kombinovan??",
                basicTerm: "2\xa0roky",
                endDegree: "In??en??r\xa0(Ing.)",
            },
            programs: [
                {
                    number: "N0715A270015MT",
                    name: "Materi??ly\xa0a technologie",
                    educationYears: [
                        {
                            year: 1,
                            required: {
                                name: "Povinn?? p??edm??ty",
                                courseTable: [
                                    {
                                        name: "Teorie obr??b??n??",
                                        shortName: "TO",
                                        semester: "Letn??",
                                        range: "2+2",
                                        exam: "zk",
                                        credits: 5,
                                        professor: ["Popov"],
                                    },
                                    {
                                        name: "Exkurze",
                                        shortName: "EX",
                                        semester: "Letn??",
                                        range: "0+1T",
                                        exam: "z",
                                        credits: 3,
                                        professor: ["Nov??kov??\xa0(KSP)"],
                                    },
                                    {
                                        name: "Odborn?? praxe",
                                        shortName: "OP",
                                        semester: "Letn??",
                                        range: "0+3T",
                                        exam: "z",
                                        credits: 3,
                                        professor: ["Sobotka\xa0(KSP)"],
                                    },
                                ],
                            },
                            requiredOptional: [
                                {
                                    name: "Povinn?? voliteln?? p??edm??t ??? skupina\xa01",
                                    courseTable: [
                                        {
                                            name: "P????pravky\xa0a mont????n?? prost??edky",
                                            shortName: "PMOP",
                                            semester: "Zimn??",
                                            range: "2+2",
                                            exam: "zk",
                                            credits: 5,
                                            professor: ["Dvo??????kov??"],
                                        },
                                    ],
                                },
                                {
                                    name: "Povinn?? voliteln?? p??edm??t ??? skupina\xa02",
                                    courseTable: [
                                        {
                                            name: "Abrazivn??\xa0a nekonven??n?? metody",
                                            shortName: "ANM",
                                            semester: "Letn??",
                                            range: "2+2",
                                            exam: "zk",
                                            credits: 5,
                                            professor: ["Knap", "Kn??pek"],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            year: 2,
                            required: {
                                name: "Povinn?? p??edm??ty",
                                courseTable: [
                                    {
                                        name: "Diplomov?? pr??ce\xa01",
                                        shortName: "DP1",
                                        semester: "Zimn??",
                                        range: "0+2",
                                        exam: "kl.\xa0z.",
                                        credits: 2,
                                        professor: ["vedouc??\xa0DP"],
                                    },
                                    {
                                        name: "Metrologie",
                                        shortName: "MET",
                                        semester: "Zimn??",
                                        range: "2+2",
                                        exam: "zk",
                                        credits: 5,
                                        professor: ["Dvo??????kov??"],
                                    },
                                    {
                                        name: "Diplomov?? pr??ce\xa02",
                                        shortName: "DP2",
                                        semester: "Letn??",
                                        range: "0+8",
                                        exam: "z",
                                        credits: 7,
                                        professor: ["vedouc??\xa0DP"],
                                    },
                                    {
                                        name: "Diplomov?? pr??ce\xa03",
                                        shortName: "DP3",
                                        semester: "Letn??",
                                        range: "0+16",
                                        exam: "z",
                                        credits: 15,
                                        professor: ["vedouc??\xa0DP"],
                                    },
                                    {
                                        name: "Projekt. tech. proces??\xa0a automat. v??roby",
                                        shortName: "PTPA",
                                        semester: "Letn??",
                                        range: "2+2",
                                        exam: "zk",
                                        credits: 4,
                                        professor: ["K??sa"],
                                    },
                                ],
                            },
                            requiredOptional: [
                                {
                                    name: "Povinn?? voliteln?? p??edm??t ??? skupina\xa03",
                                    courseTable: [
                                        {
                                            name: "Cutting Tools",
                                            shortName: "RENAJ",
                                            semester: "Zimn??",
                                            range: "2+2",
                                            exam: "zk",
                                            credits: 5,
                                            professor: ["Popov"],
                                        },
                                        {
                                            name: "Speci??ln?? metody obr??b??n??",
                                            shortName: "SMO",
                                            semester: "Zimn??",
                                            range: "2+2",
                                            exam: "zk",
                                            credits: 5,
                                            professor: ["Popov"],
                                        },
                                    ],
                                },
                                {
                                    name: "Povinn?? voliteln?? p??edm??t ??? skupina\xa04",
                                    courseTable: [
                                        {
                                            name: "V??robn?? procesy\xa0a syst??my",
                                            shortName: "VPS",
                                            semester: "Letn??",
                                            range: "2+2",
                                            exam: "zk",
                                            credits: 4,
                                            professor: ["K??sa"],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                    additionalInfo: [
                        "Sm??rnice rektora TUL ??.\xa05/2018 - Jednotn?? ??prava\xa0a zve??ej??ov??n?? bakal????sk??ch, diplomov??ch, rigor??zn??ch, diserta??n??ch\xa0a habilita??n??ch prac??",
                    ],
                    links: ["https://www.tul.cz/document/8580"],
                },
                {
                    number: "N0722A270001",
                    name: "Technologie plast??\xa0a kompozit??",
                    educationYears: [
                        {
                            year: 2,
                            required: {
                                name: "Povinn?? p??edm??ty",
                                courseTable: [
                                    {
                                        name: "Metrologie",
                                        shortName: "MET",
                                        semester: "Zimn??",
                                        range: "2+2",
                                        exam: "zk",
                                        credits: 5,
                                        professor: ["Dvo??????kov??"],
                                    },
                                ],
                            },
                        },
                    ],
                },
                {
                    number: "N0788A270004",
                    name: "Inova??n??\xa0a pr??myslov?? in??en??rstv??",
                    educationYears: [
                        {
                            year: 2,
                            requiredOptional: [
                                {
                                    name: "Povinn?? voliteln?? p??edm??t ??? skupina\xa03",
                                    courseTable: [
                                        {
                                            name: "Metrologie",
                                            shortName: "MET",
                                            semester: "Zimn??",
                                            range: "2+2",
                                            exam: "zk",
                                            credits: 5,
                                            professor: ["Dvo??????kov??"],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            //doktor
            name: "Doktorsk?? studijn?? program",
            shortDescription: {
                form: "prezen??n??\xa0???\xa0kombinovan??",
                basicTerm: "4\xa0roky",
                endDegree: "doktor\xa0(Ph.D.)",
            },
            programs: [
                {
                    number: "P0788D270002",
                    name: "Technologie\xa0a materi??ly",
                    trainers: [
                        {
                            specification: "Obr??b??n?? kovov??ch materi??l??: ",
                            person: {
                                name: "Alexey Popov",
                                degree: "DrSc.",
                                status: "prof.\xa0Ing.",
                            },
                        },
                        {
                            specification:
                                "Obr??b??n?? kovov??ch a nekovov??ch materi??l??: ",
                            person: {
                                name: "Jan Jers??k",
                                degree: "CSc.",
                                status: "doc.\xa0Ing.",
                            },
                        },
                        {
                            specification: "Metrologie: ",
                            person: {
                                name: "??t??p??nka Dvo??????kov??",
                                degree: "Ph.D.",
                                status: "doc.\xa0Ing.",
                            },
                        },
                    ],
                    additionalInfo: [
                        "Informace\xa0a formul????e\xa0k doktorsk??mu studijn??mu programu",
                        "Sm??rnice rektora TUL ??.\xa05/2018 - Jednotn?? ??prava\xa0a zve??ej??ov??n?? bakal????sk??ch, diplomov??ch, rigor??zn??ch, diserta??n??ch\xa0a habilita??n??ch prac??",
                    ],
                    links: [
                        "http://www.fs.tul.cz/cz/pro-studenty/doktorske-studium/",
                        "https://www.tul.cz/document/8580",
                    ],
                },
            ],
        },
    ];
    const [downloadOpen, setDownloadOpen] = useState<boolean>(false);

    const handleDialogOpen = () => {
        setDownloadOpen(!downloadOpen);
    };

    return (
        <div className="educationContent">
            {EducationalPrograms.map((educationProgram) => {
                return (
                    <div
                        className="educationProgram border"
                        key={educationProgram.name}
                    >
                        <div className="programName">
                            <h2 className="mainLabel">
                                {educationProgram.name}
                            </h2>
                        </div>
                        <div className="programShortDesc">
                            <div className="descriptionLine">
                                <p className="titleMain">Forma studia: </p>
                                <p>{educationProgram.shortDescription.form}</p>
                            </div>
                            <div className="descriptionLine">
                                <p className="titleMain">
                                    Standardn?? doba studia:{" "}
                                </p>
                                <p>
                                    {
                                        educationProgram.shortDescription
                                            .basicTerm
                                    }
                                </p>
                            </div>
                            <div className="descriptionLine">
                                <p className="titleMain">
                                    Ud??lovan?? akademick?? titul:{" "}
                                </p>
                                <p>
                                    {
                                        educationProgram.shortDescription
                                            .endDegree
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="educationProgramContent">
                            {educationProgram.programs.map((program) => {
                                return (
                                    <div
                                        className="programContent"
                                        key={program.number}
                                    >
                                        <div className="programTitle">
                                            <p className="violetPar">
                                                {program.number}
                                            </p>
                                            <p className="longSeparator">
                                                &nbsp;&nbsp;&mdash;&mdash;&mdash;&nbsp;&nbsp;
                                            </p>
                                            <p className="bluePar">
                                                {program.name}
                                            </p>
                                        </div>
                                        {program.educationYears &&
                                            program.educationYears.map(
                                                (studyingYear) => {
                                                    return (
                                                        <div
                                                            className="educationYearInfo"
                                                            key={
                                                                studyingYear.year
                                                            }
                                                        >
                                                            <p className="bluePar">
                                                                {
                                                                    studyingYear.year
                                                                }
                                                                .&nbsp;ro??n??k
                                                            </p>
                                                            {studyingYear.required && (
                                                                <div className="courses padding">
                                                                    <p className="violetPar">
                                                                        {
                                                                            studyingYear
                                                                                .required
                                                                                .name
                                                                        }
                                                                    </p>
                                                                    <EducationTable
                                                                        courseTable={
                                                                            studyingYear
                                                                                .required
                                                                                .courseTable
                                                                        }
                                                                    />
                                                                </div>
                                                            )}
                                                            {studyingYear.requiredOptional &&
                                                                studyingYear.requiredOptional.map(
                                                                    (
                                                                        course
                                                                    ) => {
                                                                        return (
                                                                            <div
                                                                                className="courses padding"
                                                                                key={
                                                                                    course.name
                                                                                }
                                                                            >
                                                                                <p className="violetPar">
                                                                                    {
                                                                                        course.name
                                                                                    }
                                                                                </p>
                                                                                <EducationTable
                                                                                    courseTable={
                                                                                        course.courseTable
                                                                                    }
                                                                                />
                                                                            </div>
                                                                        );
                                                                    }
                                                                )}
                                                        </div>
                                                    );
                                                }
                                            )}
                                        {program.links &&
                                            program.links.map((link) => {
                                                return (
                                                    <div
                                                        className="additionalInfo linkPar"
                                                        key={
                                                            program.links &&
                                                            program.links.indexOf(
                                                                link
                                                            )
                                                        }
                                                    >
                                                        <a
                                                            className="link"
                                                            href={link}
                                                        >
                                                            {program.additionalInfo &&
                                                                program.links &&
                                                                program
                                                                    .additionalInfo[
                                                                    program.links.indexOf(
                                                                        link
                                                                    )
                                                                ]}
                                                        </a>
                                                    </div>
                                                );
                                            })}
                                        {DownloadBD.length > 0 &&
                                            educationProgram.programs[0]
                                                .number === "B0715A270008" && (
                                                <div className="filesToDownload">
                                                    <Button
                                                        onClick={
                                                            handleDialogOpen
                                                        }
                                                        variant="contained"
                                                        style={{
                                                            margin: "1rem auto",
                                                            color: "var(--blue)",
                                                        }}
                                                        color="default"
                                                    >
                                                        Soubory ke sta??en??
                                                    </Button>
                                                    <Dialog open={downloadOpen}>
                                                        <DialogTitle
                                                            style={{
                                                                color: "var(--blue)",
                                                                fontWeight:
                                                                    "bold",
                                                            }}
                                                        >
                                                            Soubory ke sta??en??
                                                        </DialogTitle>
                                                        <Divider />
                                                        <DialogContent>
                                                            <h3
                                                                className="titleSecond"
                                                                style={{
                                                                    fontWeight:
                                                                        "bold",
                                                                }}
                                                            >
                                                                Technologie III
                                                            </h3>
                                                            {DownloadBD.map(
                                                                (file) => {
                                                                    return (
                                                                        <div
                                                                            key={
                                                                                file.id
                                                                            }
                                                                            className="linkToDownload"
                                                                        >
                                                                            <a
                                                                                href={api.fileDownloadLink(
                                                                                    file
                                                                                )}
                                                                                rel="noopener noreferrer"
                                                                                download={
                                                                                    file.name
                                                                                }
                                                                                className="link downloadFile"
                                                                            >
                                                                                {
                                                                                    file.name
                                                                                }
                                                                            </a>
                                                                        </div>
                                                                    );
                                                                }
                                                            )}
                                                        </DialogContent>
                                                        <Divider />
                                                        <DialogActions
                                                            style={{
                                                                float: "left",
                                                            }}
                                                        >
                                                            <Button
                                                                onClick={
                                                                    handleDialogOpen
                                                                }
                                                                variant="contained"
                                                                style={{
                                                                    margin: "0.6rem 0 0.6rem 0",
                                                                    color: "var(--blue)",
                                                                }}
                                                                color="default"
                                                            >
                                                                Zav????t
                                                            </Button>
                                                        </DialogActions>
                                                    </Dialog>
                                                </div>
                                            )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const Education = () => {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={match.path} exact component={EducationContent} />
        </Switch>
    );
};

export default Education;
