import React, {useState} from 'react';
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import {Paper, Button, ButtonGroup, makeStyles, createStyles, Dialog, DialogActions, Divider} from '@material-ui/core';

export interface ILaboratory {
    name: string;
    description: string;
    specialization: Array<string>;
    equipment?: Array<ILaboratoryPartDesc>;
    technologies?: Array<ILaboratoryPartDesc>;
}

export interface ILaboratoryPartDesc {
    label?: string;
    value: Array<string>;
}

export const laboratories: Array<ILaboratory> = [
    {
        name: "Laboratoř třískových technologií a procesů",
        description: "Laboratoř třískových technologií a procesů vytváří technické zázemí pro řešení výzkumných a vývojových úkolů z oblasti obrábění kovů, plastů i kompozitních materiálů. Zabývá se teoretickými i praktickými aspekty obrábění se zaměřením na řezné nástroje, technologickou analýzu i využití procesních kapalin. Jedním z hlavních cílů je nabídka služeb spojená s optimalizací řezného procesu z hlediska nástroje, obráběného materiálu i řezných podmínek. Laboratoř je zaměřena zejména na technologii soustružení, frézování, vrtání a broušení.",
        specialization: [
            "specifikace a hodnocení technologických charakteristik a spolehlivosti řezných nástrojů",
            "definice řezných podmínek a jejich optimalizace z hlediska řezného nástroje a obráběného materiálu",
            "hodnocení technologických charakteristik procesních kapalin",
            "analýza utváření třísky při obrábění nástroji s definovanou geometrií břitu",
            "hodnocení kvality povrchu a rozměrové stability strojní součásti po obrábění"
        ],
        equipment: [
            {
                label: "Strojní vybavení",
                value: [
                    "soustruhy - CNC soustruhy DMG MORI CLX 350 a CHEVALIER FLC 400, SU 50/1500. Velikost obrobku až Ø 320 - 530 mm",
                    "frézky - CNC frézka DMG MORI CMX 600, FNG 32. Velikost obrobku až 600 x 560 x 510 mm",
                    "vrtačka VS40 sprint",
                    "brusky - hrotová bruska USR 500 N, BPH 320A, BPH 20, EBN 2-C, BN 102",
                    "pila - PILOUS AGR 300+H.F."
                ]
            },
            {
                label: "Zařízení a měřicí systémy",
                value: [
                    "piezoelektrický dynamometr KISTLER 9265 B",
                    "tenzometrický dvousložkový dynamometr pro vrtání",
                    "mikromazací systém Accu-Lube",
                    "dynamický vyvažovací systém SBS",
                    "systém pro monitorizaci procesu rovinného broušení",
                    "třífázový analyzátor výkonu DW – 6092",
                    "systém pro měření teploty při obrábění"
                ]
            }
        ],
        technologies: [
            {
                label: "Řezné nástroje",
                value: [
                    "Návrh a optimalizace geometrie řezných nástrojů",
                    "hodnocení trvanlivosti a spolehlivosti řezných nástrojů",
                    "hodnocení materiálů pro nástroje a analýza jejich aplikací"
                ]
            },
            {
                label: "Obráběné materiály (Kovy, plasty, kompozity)",
                value: [
                    "zkoušky obrobitelnosti",
                    "analýza a hodnocení těžkoobrobitelných materiálů",
                    "hodnocení objemového součinitele třísek",
                    "hodnocení integrity povrchu obrobku"
                ]
            },
            {
                label: "Řezné podmínky",
                value: [
                    "definice, návrh, hodnocení a optimalizace řezných podmínek při obrábění",
                    "analýza a hodnocení vlivu řezného prostředí",
                    "hodnocení procesních kapalin – antiadhezní schopnost, ulpívání, aj"
                ]
            },
            {
                label: "Monitorizace technologických parametrů",
                value: [
                    "hodnocení technologických parametrů – řezná síla, teplota, deformace, vibrace, aj",
                    "výzkum a vývoj v oblasti inteligentního obrábění"
                ]
            }
        ]
    },
    {
        name: "Laboratoř strojírenské metrologie",
        description: "Laboratoř strojírenské metrologie disponuje moderním vybavením pro měření geometrických vlastností strojních součástí. Cílem laboratoře je vytvoření nabídky komplexních služeb zejména v oblasti měření délek a úhlů (1D, 2D, 3D). Dále je vybavena pro přesné měření parametrů drsnosti povrchu dotykovou metodou dle ČSN EN ISO 4287 a dalších norem. Pro bezdotykové měření parametrů drsnosti povrchu je laboratoř vybavena konfokálním mikroskopem a 3D laserovým bezkontaktním profiloměrem. Součástí nabídky je analýza vlastností povrchové vrstvy digitálním analyzátorem Barkhausenova šumu. Pro měření fyzikálních veličin pevných látek je laboratoř vybavena termomechanickým analyzátorem.",
        specialization: [
            "hodnocení parametrů drsnosti povrchu a křivek materiálového podílu",
            "nedestruktivní a rychlá kontrola jakosti a kvality povrchu",
            "nedestruktivní a rychlá kontrola podpovrchových vad u feromagnetických strojních součástí",
            "měření délkových rozměrů dotykovým i bezdotykovým způsobem",
            "měření rovinných a prostorových úhlů dotykovým i bezdotykovým způsobem",
            "měření teplotní roztažnosti"
        ],
        equipment: [
            {
                value: [
                    "profilometr Mitutoyo Surftest SV-2000N2",
                    "konfokální mikroskop a 3D laserový bezkontaktní profiloměr KEYENCE VK-X1100",
                    "digitální analyzátor Barkhausenova šumu MicroScan 600-1",
                    "souřadnicový měřicí stroj Zeiss Prismo 5",
                    "termomechanický analyzátor TMA PT-1000LT",
                    "systém pro měření teploty při obrábění",
                    "univerzální mikroskop Zeiss",
                    "profilprojektor"
                ]
            }
        ],
        technologies: [
            {
                label: "Měření délek a úhlů",
                value: [
                    "dotykové měření délkových a úhlových rozměrů součástí do rozměru max. 800 × 1200 × 500 mm",
                    "bezdotykové měření délkových a úhlových rozměrů součástí do rozměru max. 100 × 200 × 300 mm"
                ]
            },
            {
                label: "Topografie povrchu strojních součástí (Kontaktní i bezkontaktní měření jakosti povrchu)",
                value: [
                    "hodnocení parametrů a křivek drsnosti povrchu",
                    "analýza hloubky vrypů event. dalších povrchových vad",
                    "přesné analýzy komplikovaných tvarových ploch",
                    "3D měření parametrů drsnosti povrchu (drážky, závity, ozubená kola aj.) pro kovové, nekovové i elastické součásti",
                    "analýza tloušťky nanesených povlaků"
                ]
            },
            {
                label: "Analýza vlastností povrchové vrstvy strojních součástí",
                value: [
                    "detekce poruch a trhlinek",
                    "hodnocení vlivu materiálu, technologie obrábění a řezných podmínek na vlastnosti povrchové vrstvy",
                    "hodnocení anomálií vyvolaných změnami zbytkového napětí, tvrdosti a mikrostruktury"
                ]
            },
        ]
    }
];

const LaboratoryInfo = (props: { laboratory: ILaboratory }) => {
    const [laboratoryOpen ,setLaboratoryOpen] = useState<boolean>(false);

    const handleDialogOpen = () => {
        setLaboratoryOpen(!laboratoryOpen);
    }

    return (
        <div className="border" onClick={handleDialogOpen}>
            <div className="laboratoryButton">
                <h2>{props.laboratory.name}</h2>
                <p>{props.laboratory.description.split(".", 3).map(word =>
                    <span> {word}</span>
                )}<span>...</span></p>
                <Button
                    onClick={handleDialogOpen}
                    variant="contained"
                    style={{margin: "0.6rem auto"}}
                    color="default"
                >Vice info</Button>
            </div>
            <Dialog open={laboratoryOpen}>
                <DialogActions>
                    <Button onClick={handleDialogOpen}>Zavřít</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const Laboratories = () => {
    return (
        <div className="laboratories">
            {laboratories.map(laboratory =>
                <LaboratoryInfo key={laboratory.name} laboratory={laboratory}/>
            )}
        </div>
    );
};

export default Laboratories;