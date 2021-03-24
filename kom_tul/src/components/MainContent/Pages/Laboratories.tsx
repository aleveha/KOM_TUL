import React, {useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    Divider,
    DialogTitle, DialogContent
} from '@material-ui/core';
import labMetrPhoto from '../../../img/lab_foto/2.webp';
import labTechPhoto from '../../../img/lab_foto/1.webp';
import {useTranslation} from "react-i18next";

export interface ILaboratory {
    name: string;
    description: string;
    specialization: Array<string>;
    equipment?: Array<ILaboratoryPartDesc>;
    technologies?: Array<ILaboratoryPartDesc>;
    photo?: string
}

export interface ILaboratoryPartDesc {
    label?: string;
    value: Array<string>;
}

const LaboratoryInfo = (props: { laboratory: ILaboratory }) => {
    const {t} = useTranslation();
    const [laboratoryOpen, setLaboratoryOpen] = useState<boolean>(false);

    const handleDialogOpen = () => {
        setLaboratoryOpen(!laboratoryOpen);
    }

    return (
        <div className="paper border">
            <div className="laboratoryButton">
                <h2>{props.laboratory.name}</h2>
                <p>{props.laboratory.description.split(".", 3).map(sentence =>
                    <span key={props.laboratory.description.indexOf(sentence)}> {sentence}.</span>
                )}<span>..</span></p>
                <img
                    src={
                        props.laboratory.photo && props.laboratory.photo === "labTechPhoto" ?
                            labTechPhoto :
                            labMetrPhoto
                    }
                    alt="labPhoto"
                    loading="lazy"
                    className="labPhoto"
                />
                <Button
                    onClick={handleDialogOpen}
                    variant="contained"
                    style={{margin: "0.6rem auto", backgroundColor: "var(--fiolet)", color: "white"}}
                    color="default"
                >{t("dialog.moreDetails")}</Button>
            </div>
            <Dialog open={laboratoryOpen} className="dialog">
                <DialogTitle>{props.laboratory.name}</DialogTitle>
                <Divider/>
                <DialogContent className="labDialogContent">
                    <div>
                        <h3>{t("main.laboratories.labels.mainFocus")}</h3>
                        <p>{props.laboratory.description}</p>
                    </div>
                    <div>
                        <h3>{t("main.laboratories.labels.profFocus")}</h3>
                        <ul>{props.laboratory.specialization.map(spec =>
                            <li key={spec}>{spec}</li>
                        )}</ul>
                    </div>
                    <div>
                        <h3>{t("main.laboratories.labels.equipment")}</h3>
                        <div>
                            {props.laboratory.equipment && props.laboratory.equipment.map(equip =>
                                <div key={equip.label ? equip.label : Math.random()}>
                                    <h4>{equip.label}</h4>
                                    <ul>{equip.value.map(item =>
                                        <li key={item}>{item}</li>
                                    )}</ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <h3>{t("main.laboratories.labels.technologies")}</h3>
                        <div>
                            {props.laboratory.technologies && props.laboratory.technologies.map(tech =>
                                <div key={tech.label}>
                                    <h4>{tech.label}</h4>
                                    <ul>{tech.value.map(item =>
                                        <li key={item}>{item}</li>
                                    )}</ul>
                                </div>
                            )}
                        </div>
                    </div>
                </DialogContent>
                <Divider/>
                <DialogActions className="labDialogButtons">
                    <Button
                        onClick={handleDialogOpen}
                        variant="contained"
                        style={{margin: "0.6rem auto"}}
                        color="default"
                    >{t("dialog.close")}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const Laboratories = () => {
    const {t} = useTranslation();

    const laboratories: ILaboratory[] = t("main.laboratories.labs", {returnObjects: true});

    return (
        <div className="laboratories">
            {laboratories.map(laboratory =>
                <LaboratoryInfo key={laboratory.name} laboratory={laboratory}/>
            )}
        </div>
    );
};

export default Laboratories;