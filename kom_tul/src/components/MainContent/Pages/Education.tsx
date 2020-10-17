import React from 'react';
import {Switch, Route, useRouteMatch} from 'react-router-dom';
import {IEmployee} from './Employees';

interface IEducationalProgram {
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
                                        name: "Bakalářská práce I.",
                                        shortName: "BCP1",
                                        semester: "Letní",
                                        range: "50 h",
                                        exam: "zápočet",
                                        credits: 6,
                                        professor: [
                                            "vedoucí BP"
                                        ]
                                    },
                                    {
                                        name: "Bakalářská práce II.",
                                        shortName: "BCP2",
                                        semester: "Letní",
                                        range: "70 h",
                                        exam: "zápočet",
                                        credits: 10,
                                        professor: [
                                            "vedoucí BP"
                                        ]
                                    }
                                ]
                            }
                        }
                    ],
                    additionalInfo: [
                        "Směrnice rektora TUL č. 5/2018 - Jednotná úprava a zveřejňování bakalářských, diplomových, rigorózních, disertačních a habilitačních prací"
                    ],
                    links: [
                        "https://www.tul.cz/document/8580"
                    ]

                }
            ]
        },
        {
            //magistr
            shortDescription: {
                form: "prezenční – kombinovaná",
                basicTerm: "2 roky",
                endDegree: "Inženýr (Ing.)"
            },
            programs: [
                {
                    number: "N0715A270015MT",
                    name: "Materiály a technologie - předměty vyučované katedrou",
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
                                            "Nováková (KSP)"
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
                                            "Sobotka (KSP)"
                                        ]
                                    }
                                ]
                            },
                            requiredOptional: [
                                {
                                    name: "Povinně volitelný předmět – skupina 1",
                                    courseTable: [
                                        {
                                            name: "Přípravky a montážní prostředky",
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
                                    name: "Povinně volitelný předmět – skupina 2",
                                    courseTable: [
                                        {
                                            name: "Abrazivní a nekonvenční metody",
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
                                        name: "Diplomová práce 1",
                                        shortName: "DP1",
                                        semester: "Zimní",
                                        range: "0+2",
                                        exam: "kl. z.",
                                        credits: 2,
                                        professor: [
                                            "vedoucí D"
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
                                        name: "Diplomová práce 2",
                                        shortName: "DP2",
                                        semester: "Letní",
                                        range: "0+8",
                                        exam: "z",
                                        credits: 7,
                                        professor: [
                                            "vedoucí DP"
                                        ]
                                    },
                                    {
                                        name: "Diplomová práce 3",
                                        shortName: "DP3",
                                        semester: "Letní",
                                        range: "0+16",
                                        exam: "z",
                                        credits: 15,
                                        professor: [
                                            "vedoucí DP"
                                        ]
                                    },
                                    {
                                        name: "Projekt. tech. procesů a automat. výroby",
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
                                    name: "Povinně volitelný předmět – skupina 3",
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
                                    name: "Povinně volitelný předmět – skupina 4",
                                    courseTable: [
                                        {
                                            name: "Výrobní procesy a systémy",
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
                        "Směrnice rektora TUL č. 5/2018 - Jednotná úprava a zveřejňování bakalářských, diplomových, rigorózních, disertačních a habilitačních prací"
                    ],
                    links: [
                        "https://www.tul.cz/document/8580"
                    ]
                },
                {
                    number: "N0722A270001",
                    name: "Technologie plastů a kompozitů - předměty vyučované katedrou",
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
                    name: "Inovační a průmyslové inženýrství - předměty vyučované katedrou",
                    educationYears: [
                        {
                            year: 2,
                            required: {
                                name: "Povinně volitelný předmět – skupina 3",
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
                }
            ]
        },
        {
            //doktor
            shortDescription: {
                form: "prezenční – kombinovaná",
                basicTerm: "4 roky",
                endDegree: "doktor (Ph.D.)"
            },
            programs: [
                {
                    number: "P0788D270002",
                    name: "Technologie a materiály",
                    trainers: [
                        {
                            specification: "Obrábění kovových materiálů: ",
                            person: {
                                name: "Alexey Popov",
                                degree: "DrSc.",
                                status: "prof. Ing."
                            }
                        },
                        {
                            specification: "Obrábění kovových a nekovových materiálů: ",
                            person: {
                                name: "Jan Jersák",
                                degree: "CSc.",
                                status: "doc. Ing."
                            }
                        },
                        {
                            specification: "Metrologie: ",
                            person: {
                                name: "Štěpánka Dvořáčková",
                                degree: "Ph.D.",
                                status: "doc. Ing."
                            }
                        }
                    ],
                    additionalInfo: [
                        "Informace a formuláře k doktorskému studijnímu programu",
                        "Směrnice rektora TUL č. 5/2018 - Jednotná úprava a zveřejňování bakalářských, diplomových, rigorózních, disertačních a habilitačních prací"
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
        <div className="educatingContent">

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