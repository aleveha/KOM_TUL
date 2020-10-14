import * as React from 'react';
import '../../../CSS/PagesCSS/Employyes.css';

interface IProps {

};

interface IEmployee {
    position?: string,
    name: string,
    status?: string,
    degree?: string,
    email?: string,
    phoneNumber?: string,
    place?: string,
    consultation?: string,
    specialization?: string
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
            place: "bud. E1/3.p",
            consultation: "po dohodě",
            specialization: "metrologie"
        },
        {
            position: "Zástupce vedoucího katedry pro vědeckou činnost a spolupráci s průmyslem",
            name: "Petr KŮSA",
            status: "Ing.",
            degree: "Ph.D.",
            email: "petr.kusa@tul.cz",
            phoneNumber: "+420 48 535 3369",
            place: "bud. E1/3.p",
            consultation: "po dohodě",
            specialization: "obrábění plastových a kompozitních materiálů"
        },
        {
            position: "Zástupce vedoucího katedry pro vzdělávací a pedagogickou činnost",
            name: "Jan JERSÁK",
            status: "doc. Ing.",
            degree: "CSc.",
            email: "jan.jersak@tul.cz",
            phoneNumber: "+420 48 535 3373",
            place: "bud. E1/3.p",
            consultation: "po dohodě",
            specialization: "obrábění kovových materiálů"
        },
        {
            position: "Asistentka vedoucího katedry, sekretariát",
            name: "Tereza VRBOVÁ",
            status: "Mgr.",
            email: "tereza.vrbova@tul.cz",
            phoneNumber: "+420 48 535 3361",
            place: "bud. E1/3.p"
        },
        {
            position: "Vedoucí laboratoře třískových technologií a procesů",
            name: "Martin VÁŇA",
            email: "martin.vana@tul.cz",
            phoneNumber: "+420 48 535 3393",
            place: "bud. L/1 NP - laboratoř",
            consultation: "po dohodě",
            specialization: "obrábění kovových, plastových a kompozitních materiálů"
        },
        {
            position: "Vedoucí laboratoře strojírenské metrologie",
            name: "Miloslav LEDVINA",
            status: "Ing.",
            degree: "Ph.D.",
            email: "miloslav.ledvina@tul.cz",
            phoneNumber: "+420 48 535 3371",
            place: "bud. E1/3.p",
            consultation: "po dohodě",
            specialization: "metrologie, obrábění kovových, plastových a kompozitních materiálů"
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
                name: "Jan JERSÁK",
                status: "doc. Ing.",
                degree: "CSc.",
                email: "jan.jersak@tul.cz"
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
                place: "bud. E1/3.p",
                consultation: "po dohodě",
                specialization: "obrábění kovových materiálů",
            }
        ]
    },
    researchers: {
        label: "Vědecko-výzkumní pracovníci",
        staff: [
            {
                name: "Petr KŮSA",
                status: "Ing.",
                degree: "Ph.D.",
                email: "petr.kusa@tul.cz"
            }
        ]
    },
    PhD: {
        label: "Doktorandi",
        fullTimeStudy: {
            label: "Prezenční studium",
            staff: [
                {
                    name: "Iuliia KRASNIKOVA",
                    status: "Ing.",
                    email: "iuliia.krasnikova@tul.cz",
                    phoneNumber: "+420 48 535 3368",
                    place: "bud. E1/3.p"
                },
                {
                    name: "Sergei BABAK",
                    status: "Ing.",
                    email: "sergei.babak@tul.cz",
                    phoneNumber: "+420 48 535 3368",
                    place: "bud. E1/3.p"
                },
                {
                    name: "Mikhail KHRAMENKOV",
                    status: "Ing.",
                    email: "mikhail.khramenkov@tul.cz",
                    phoneNumber: "+420 48 535 3368",
                    place: "bud. E1/3.p"
                }
            ]
        },
        combinedStudy: {
            label: "Kombinované studium",
            staff: [
                {
                    name: "Tomáš KOZLOK",
                    status: "Ing.",
                    email: "tkozlok@tosvarnsdorf.cz"
                }
            ]
        }
    }
}


const Employees = (props: IProps) => {

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
                        <p><span>{labelValue}</span></p>
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
            <p className="linkPar"><a className="link" href={link} target={target}>{contactInfoValue}</a></p> :
            <p><span>{contactInfoValue}</span></p>)
    }

    const GetMainInfo = (person: IEmployee, border?: boolean) => {
        return (
            <div className={border ? "employeeInfo border" : "employeeInfo"} key={person.name}>
                {person.position && <div className="employeePosition">
                    <p>{person.position}</p>
                </div>}
                <div className="positionInfo">
                    <div className="employeeName">
                        <p>{`${person.status == undefined ? '' : person.status} ${person.name}${person.degree == undefined ? '' : ', ' + person.degree}`}</p>
                    </div>
                    <div className="contactBlocks">
                        {Object.keys(person).map(key => GetContactsBlock(person, key))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="employeesContent padding">
            <div className="mainWorkers">
                {EmployeesObject.mainWorkers.map(person => GetMainInfo(person, true))}
            </div>
            <div className="teachingStaff border">
                <div className="employeePosition">
                    <p><span>{EmployeesObject.teachingStaff.label}</span></p>
                </div>
                {EmployeesObject.teachingStaff.staff.map(person => GetMainInfo(person))}
            </div>
            <div className="researchers border">
                <div className="employeePosition">
                    <p><span>{EmployeesObject.researchers.label}</span></p>
                </div>
                {EmployeesObject.researchers.staff.map(person => GetMainInfo(person))}
            </div>
            <div className="PhD border">
                <div className="employeePosition">
                    <p><span>{EmployeesObject.PhD.label}</span></p>
                </div>
                <div className="fullTimeStudy">
                    <div className="employeePosition">
                        <p><span>{EmployeesObject.PhD.fullTimeStudy.label}</span></p>
                    </div>
                    {EmployeesObject.PhD.fullTimeStudy.staff.map(person => GetMainInfo(person))}
                </div>
                <div className="combinedStudy">
                    <div className="employeePosition">
                        <p><span>{EmployeesObject.PhD.combinedStudy.label}</span></p>
                    </div>
                    {EmployeesObject.PhD.combinedStudy.staff.map(person => GetMainInfo(person))}
                </div>
            </div>
        </div>
    );
};

export default Employees;