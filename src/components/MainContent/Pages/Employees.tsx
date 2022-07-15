import * as React from "react";
import Dvorackova from "../../../img/profile_photo/Dvorackova.webp";
import Kusa from "../../../img/profile_photo/Kusa.webp";
import Vrbova from "../../../img/profile_photo/Vrbova.webp";
import Vana from "../../../img/profile_photo/Vana.webp";
import Knap from "../../../img/profile_photo/Knap.webp";
import Knapek from "../../../img/profile_photo/Knapek.webp";
import { useTranslation } from "react-i18next";

export interface IEmployee {
    position?: string;
    name: string;
    status?: string;
    degree?: string;
    email?: string;
    phoneNumber?: string;
    place?: string;
    consultation?: string;
    specialization?: string;
    photo?: string;
}

interface IStaff {
    label: string;
    staff: Array<IEmployee>;
}

interface IPhD {
    label: string;
    fullTimeStudy: IStaff;
    combinedStudy: IStaff;
}

interface IEmployees {
    mainWorkers: Array<IEmployee>;
    teachingStaff: IStaff;
    researchers: IStaff;
    PhD: IPhD;
}

const Photos: { name: string; path: string }[] = [
    { name: "Dvorackova", path: Dvorackova },
    { name: "Kusa", path: Kusa },
    { name: "Vrbova", path: Vrbova },
    { name: "Vana", path: Vana },
    { name: "Knap", path: Knap },
    { name: "Knapek", path: Knapek },
];

const GetContactsBlock = (props: { info: string; key: string }) => {
    const { t } = useTranslation();
    const { info, key } = props;

    return key === "email" ||
        key === "phoneNumber" ||
        key === "place" ||
        key === "consultation" ||
        key === "specialization" ? (
        <div className="contactBlock" key={key}>
            <div className="contactLabel">
                <p>{t(`main.employees.labels.${key}`)} </p>
            </div>
            <div className="contactInfo">
                {info && CreateLinkToInfo(key, info)}
            </div>
        </div>
    ) : null;
};

const CreateLinkToInfo = (key: string, value: string) => {
    let link: string = "";
    let target: string = "";
    switch (key) {
        case "phoneNumber":
            link = "tel:" + value.replace(/" "/g, "");
            break;
        case "email":
            link = "mailto:" + value;
            break;
        case "place":
            value.includes("L")
                ? (link = "https://en.mapy.cz/s/posaparapu")
                : (link = "https://en.mapy.cz/s/jemasahuso");
            target = "_blank";
            break;
    }

    return link ? (
        <p className="linkPar">
            <a className="link" href={link} target={target}>
                {value}
            </a>
        </p>
    ) : (
        <p>{value}</p>
    );
};

const Image = (props: { name: string }) => {
    for (const person of Photos) {
        if (props.name === person.name) {
            return <img src={person.path} alt="Employee" />;
        }
    }
    return null;
};

const GetMainInfo = (person: IEmployee, border?: boolean) => {
    return (
        <div
            className={"employeeInfo" + (border ? " border" : "")}
            key={person.name}
        >
            <div>
                {person.position && (
                    <div className="employeePosition titleSecond">
                        <h3>{person.position}</h3>
                    </div>
                )}
                <div className="positionInfo">
                    <div className="employeeName titleMain">
                        <p>{`${
                            person.status === undefined ? "" : person.status
                        } ${person.name}${
                            person.degree === undefined
                                ? ""
                                : ", " + person.degree
                        }`}</p>
                    </div>
                    <div className="contactBlocks">
                        {Object.entries(person).map((elem) =>
                            GetContactsBlock({
                                info: elem[1],
                                key: elem[0],
                            })
                        )}
                    </div>
                </div>
            </div>
            {person.photo ? (
                <div className="empPhoto">
                    <Image name={person.photo} />
                </div>
            ) : null}
        </div>
    );
};

const Employees = () => {
    const { t } = useTranslation();

    const EmployeesObject: IEmployees = t("main.employees", {
        returnObjects: true,
    });

    return (
        <div className="employeesContent">
            {EmployeesObject.mainWorkers.length > 0 && (
                <div className="mainWorkers">
                    {EmployeesObject.mainWorkers.map((person) =>
                        GetMainInfo(person, true)
                    )}
                </div>
            )}
            {EmployeesObject.researchers.staff.length > 0 && (
                <div className="researchers border">
                    <div className="employeePosition titleSecond">
                        <h3>{EmployeesObject.researchers.label}</h3>
                    </div>
                    {EmployeesObject.researchers.staff.map((person) =>
                        GetMainInfo(person)
                    )}
                </div>
            )}
            {EmployeesObject.teachingStaff.staff.length > 0 && (
                <div className="teachingStaff border">
                    <div className="employeePosition titleSecond">
                        <h3>{EmployeesObject.teachingStaff.label}</h3>
                    </div>
                    {EmployeesObject.teachingStaff.staff
                        .sort((emp1, emp2) =>
                            emp1.name.split(" ")[1] > emp2.name.split(" ")[1]
                                ? 1
                                : -1
                        )
                        .map((person) => GetMainInfo(person))}
                </div>
            )}
            <div className="PhD border">
                <div className="employeePosition titleSecond">
                    <h3>{EmployeesObject.PhD.label}</h3>
                </div>
                <div className="fullTimeStudy">
                    <div className="employeePosition titleSecond">
                        <h5>{EmployeesObject.PhD.fullTimeStudy.label}</h5>
                    </div>
                    {EmployeesObject.PhD.fullTimeStudy.staff.map((person) =>
                        GetMainInfo(person)
                    )}
                </div>
                <div className="combinedStudy">
                    <div className="employeePosition titleSecond">
                        <h5>{EmployeesObject.PhD.combinedStudy.label}</h5>
                    </div>
                    {EmployeesObject.PhD.combinedStudy.staff.map((person) =>
                        GetMainInfo(person)
                    )}
                </div>
            </div>
        </div>
    );
};

export default Employees;
