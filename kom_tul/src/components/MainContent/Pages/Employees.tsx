import * as React from 'react';
import Dvorackova from '../../../img/profile_photo/Dvorackova.webp';
import Kusa from '../../../img/profile_photo/Kusa.webp';
import Vrbova from '../../../img/profile_photo/Vrbova.webp';
import Ledvina from '../../../img/profile_photo/Ledvina.webp';
import Vana from '../../../img/profile_photo/Vana.webp';
import Knap from '../../../img/profile_photo/Knap.webp';

export interface IEmployee {
    position?: string,
    name: string,
    status?: string,
    degree?: string,
    email?: string,
    phoneNumber?: string,
    place?: string,
    consultation?: string,
    specialization?: string,
    photo?: string
}

interface IEmployees {
    mainWorkers: Array<IEmployee>,
    teachingStaff: IStaff,
    researchers: IStaff
    PhD: IPhD
}

interface IStaff {
    label: string,
    staff: Array<IEmployee>
}

interface IPhD {
    label: string,
    fullTimeStudy: IStaff,
    combinedStudy: IStaff
}

const EmployeesObject: IEmployees = {
    mainWorkers: [
        {
            position: "Vedoucí katedry",
            name: "Štěpánka DVOŘÁČKOVÁ",
            status: "doc. Ing.",
            degree: "Ph.D.",
            email: "stepanka.dvorackova@tul.cz",
            phoneNumber: "+420 48 535 3369",
            place: "bud. E1/4.p",
            consultation: "po dohodě",
            specialization: "metrologie",
            photo: Dvorackova
        },
        {
            position: "Zástupce vedoucího katedry pro vědeckou činnost a spolupráci s průmyslem",
            name: "Petr KŮSA",
            status: "Ing.",
            degree: "Ph.D.",
            email: "petr.kusa@tul.cz",
            phoneNumber: "+420 48 535 3369",
            place: "bud. E1/4.p",
            consultation: "po dohodě",
            specialization: "obrábění plastových a kompozitních materiálů",
            photo: Kusa
        },
        {
            position: "Asistentka vedoucího katedry, sekretariát",
            name: "Tereza VRBOVÁ",
            status: "Mgr.",
            email: "tereza.vrbova@tul.cz",
            phoneNumber: "+420 48 535 3361",
            place: "bud. E1/4.p",
            photo: Vrbova
        },
        {
            position: "Vedoucí laboratoře třískových technologií a procesů",
            name: "Martin VÁŇA",
            status: "Bc.",
            email: "martin.vana@tul.cz",
            phoneNumber: "+420 48 535 3393",
            place: "bud. L/1 NP - laboratoř",
            consultation: "po dohodě",
            specialization: "obrábění kovových, plastových a kompozitních materiálů",
            photo: Vana
        },
        {
            position: "Vedoucí laboratoře strojírenské metrologie",
            name: "Miloslav LEDVINA",
            status: "Ing.",
            degree: "Ph.D.",
            email: "miloslav.ledvina@tul.cz",
            phoneNumber: "+420 48 535 3371",
            place: "bud. E1/4.p",
            consultation: "po dohodě",
            specialization: "metrologie, obrábění kovových, plastových a kompozitních materiálů",
            photo: Ledvina
        }
    ],
    teachingStaff: {
        label: "Pedagogičtí pracovníci",
        staff: [
            {
                name: "Štěpánka DVOŘÁČKOVÁ",
                status: "doc. Ing.",
                degree: "Ph.D.",
                email: "stepanka.dvorackova@tul.cz"
            },
            {
                name: "Petr KŮSA",
                status: "Ing.",
                degree: "Ph.D.",
                email: "petr.kusa@tul.cz",
            },
            {
                name: "Jan JERSÁK",
                status: "doc. Ing.",
                degree: "CSc.",
                email: "jan.jersak@tul.cz",
                phoneNumber: "+420 48 535 3373",
                place: "bud. E1/4.p",
                consultation: "po dohodě",
                specialization: "obrábění kovových materiálů"
            },
            {
                name: "Miloslav LEDVINA",
                status: "Ing.",
                degree: "Ph.D.",
                email: "miloslav.ledvina@tul.cz"
            },
            {
                name: "Alexey POPOV",
                status: "prof. Ing.",
                degree: "DrSc.",
                email: "alexey.popov@tul.cz",
                phoneNumber: "+420 48 535 3370",
                place: "bud. E1/4.p",
                consultation: "po dohodě",
                specialization: "obrábění kovových materiálů",
            }
        ]
    },
    researchers: {
        label: "Vědecko-výzkumní pracovníci",
        staff: [
            {
                name: "Artur KNAP",
                status: "Bc.",
                email: "artur.knap@tul.cz",
                phoneNumber: "+420 48 535 3368",
                place: "bud. E1/4.p",
                photo: Knap
            }
        ]
    },
    PhD: {
        label: "Doktorandi",
        fullTimeStudy: {
            label: "Prezenční studium",
            staff: [
                {
                    name: "Mikhail KHRAMENKOV",
                    status: "Ing.",
                    email: "mikhail.khramenkov@tul.cz",
                    phoneNumber: "+420 48 535 3368",
                    place: "bud. E1/4.p"
                }
            ]
        },
        combinedStudy: {
            label: "Kombinované studium",
            staff: [
                {
                    name: "Iuliia KRASNIKOVA",
                    status: "Ing.",
                    email: "iuliia.krasnikova@tul.cz"
                },
                {
                    name: "Sergei BABAK",
                    status: "Ing.",
                    email: "sergei.babak@tul.cz"
                },
                {
                    name: "Tomáš KOZLOK",
                    status: "Ing.",
                    email: "tkozlok@tosvarnsdorf.cz"
                }
            ]
        }
    }
}

const GetContactsBlock = (person: IEmployee, key: string) => {
    let classNameKey: string = 'key';
    let contactInfoValue: string | undefined = '';
    let labelValue: string = '';
    let blockStruct: JSX.Element | null;
    let hasProperty: boolean = false;

    switch (key) {
        case 'email':
            classNameKey = key;
            contactInfoValue = person[key];
            labelValue = "E-mail: ";
            hasProperty = true;
            break;
        case 'phoneNumber':
            classNameKey = key;
            contactInfoValue = person[key];
            labelValue = "Telefon: ";
            hasProperty = true;
            break;
        case 'place':
            classNameKey = key;
            contactInfoValue = person[key];
            labelValue = "Kancelář: ";
            hasProperty = true;
            break;
        case 'consultation':
            classNameKey = key;
            contactInfoValue = person[key];
            labelValue = "Konzultace: ";
            hasProperty = true;
            break;
        case 'specialization':
            classNameKey = key;
            contactInfoValue = person[key];
            labelValue = "Zaměření: ";
            hasProperty = true;
            break;
    }

    if (hasProperty) {
        blockStruct = (
            <div className="contactBlock" key={key}>
                <div className="contactLabel">
                    <p>{labelValue}</p>
                </div>
                <div className="contactInfo">
                    {contactInfoValue && CreateLinkToInfo(classNameKey, contactInfoValue)}
                </div>
            </div>
        );
    } else blockStruct = null;

    return blockStruct;
}

const CreateLinkToInfo = (classNameKey: string, contactInfoValue: string) => {
    let link: string = '';
    let target: string = '';
    switch (classNameKey) {
        case 'phoneNumber':
            link = "tel:" + contactInfoValue.replace(/" "/g, "");
            break;
        case 'email':
            link = "mailto:" + contactInfoValue;
            break;
        case 'place':
            contactInfoValue.includes('L') ? link = "https://en.mapy.cz/s/posaparapu" : link = "https://en.mapy.cz/s/jemasahuso";
            target = "_blank";
            break;

    }

    return (link ?
        <p className="linkPar">
            <a
                className="link"
                href={link}
                target={target}
            >
                {contactInfoValue}
            </a>
        </p> :
        <p>{contactInfoValue}</p>)
}

const GetMainInfo = (person: IEmployee, border?: boolean) => {
    return (
        <div className={"employeeInfo" + (border ? " border" : "")} key={person.name}>
            <div>
                {person.position &&
                <div className="employeePosition titleSecond">
                    <h3>{person.position}</h3>
                </div>
                }
                <div className="positionInfo">
                    <div className="employeeName titleMain">
                        <p>{`${person.status === undefined ? '' : person.status} ${person.name}${person.degree === undefined ? '' : ', ' + person.degree}`}</p>
                    </div>
                    <div className="contactBlocks">
                        {Object.keys(person).map(key => GetContactsBlock(person, key))}
                    </div>
                </div>
            </div>
            {person.photo ?
                <div className="empPhoto">
                    <img
                        src={person.photo}
                        alt="Employee"
                    />
                </div> : null}
        </div>
    )
}

const Employees = () => {
    return (
        <div className="employeesContent">
            {EmployeesObject.mainWorkers.length > 0 &&
            <div className="mainWorkers">
                {EmployeesObject.mainWorkers.map(person => GetMainInfo(person, true))}
            </div>}
            {EmployeesObject.researchers.staff.length > 0 &&
            <div className="researchers border">
                <div className="employeePosition titleSecond">
                    <h3>{EmployeesObject.researchers.label}</h3>
                </div>
                {EmployeesObject.researchers.staff.map(person => GetMainInfo(person))}
            </div>}
            {EmployeesObject.teachingStaff.staff.length > 0 &&
            <div className="teachingStaff border">
                <div className="employeePosition titleSecond">
                    <h3>{EmployeesObject.teachingStaff.label}</h3>
                </div>
                {EmployeesObject.teachingStaff.staff.sort((emp1, emp2) =>
                        (emp1.name.split(" ")[1] > emp2.name.split(" ")[1]) ? 1 : -1
                ).map(person => GetMainInfo(person))}
            </div>}
            <div className="PhD border">
                <div className="employeePosition titleSecond">
                    <h3>{EmployeesObject.PhD.label}</h3>
                </div>
                <div className="fullTimeStudy">
                    <div className="employeePosition titleSecond">
                        <h5>{EmployeesObject.PhD.fullTimeStudy.label}</h5>
                    </div>
                    {EmployeesObject.PhD.fullTimeStudy.staff.map(person => GetMainInfo(person))}
                </div>
                <div className="combinedStudy">
                    <div className="employeePosition titleSecond">
                        <h5>{EmployeesObject.PhD.combinedStudy.label}</h5>
                    </div>
                    {EmployeesObject.PhD.combinedStudy.staff.map(person => GetMainInfo(person))}
                </div>
            </div>
        </div>
    );
};

export default Employees;